import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import BackGroundGradientOrange from '../../assets/icons/BackGroundGradientOrange';
import WhiteRectangle from '../../assets/icons/WhiteRectangle';
import ArrowToBack from '../../assets/icons/ArrowToBack';
import NewHobbyIcon from '../../assets/icons/NewHobbyIcon';
import CloseCreatingHobbyIcon from "../../assets/icons/CloseCreatingHobbyIcon";
import NewMediaNoteIcon from '../../assets/icons/NewMediaNoteIcon';
import NewTextNoteIcon from '../../assets/icons/NewTextNoteIcon';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { styles } from './styles';

import { RootStackParamList, DrawingScreenNavigationProp } from '../../types';

const DrawingScreen = () => {
  const [activeTab, setActiveTab] = useState<'tracking' | 'settings'>('tracking');
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);
  const [newNoteType, setNewNoteType] = useState<null | 'text' | 'media'>(null);
  const [newNoteText, setNewNoteText] = useState('');
  const [newNoteImage, setNewNoteImage] = useState<string | null>(null);
  const [notes, setNotes] = useState<
    { id: string; date: string; text?: string; mediaUrl?: string }[]
  >([
    // Пример начальных заметок для теста:
    // { id: '1', date: '23 апр. 2025 г.', text: 'Начал новый скетч' },
    // { id: '2', date: '24 апр. 2025 г.', mediaUrl: 'https://i.imgur.com/0y8Ftya.jpg' },
  ]);
  const [progress, setProgress] = useState({ current: 0, target: 0 });
  const [goalText, setGoalText] = useState('Скорее добавьте цель');

  const navigation = useNavigation<DrawingScreenNavigationProp>();

  const route = useRoute<RouteProp<RootStackParamList, 'Drawing'>>();
  const params = route.params;
  
  const [hobbyData, setHobbyData] = useState({
    name: params?.hobbyName || 'рисование',
    image: params?.hobbyImage || require('../../assets/pictures/PaintArt.png'),
    isNew: params?.isNew || false
  });

  const goToSettings = () => {
    navigation.navigate('Settings', { 
      hobbyName: params?.hobbyName || 'рисование',
      hobbyImage: params?.hobbyImage || require('../../assets/pictures/PaintArt.png')
    });
  };

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (flatListRef.current && notes.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [notes]);

  // Загрузка заметок при открытии экрана
  useEffect(() => {
    const loadNotes = async () => {
      try {
        const hobbyName = params?.hobbyName || hobbyData.name;
        const savedNotes = await AsyncStorage.getItem(`@notes_${hobbyName}`);
        if (savedNotes) {
          setNotes(JSON.parse(savedNotes));
        }
      } catch (e) {
        console.error('Ошибка загрузки заметок', e);
      }
    };
    loadNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.hobbyName]);

  // Сохраняем заметки при изменении
  useEffect(() => {
    const saveNotes = async () => {
      try {
        const hobbyName = params?.hobbyName || hobbyData.name;
        await AsyncStorage.setItem(`@notes_${hobbyName}`, JSON.stringify(notes));
      } catch (e) {
        console.error('Ошибка сохранения заметок', e);
      }
    };
    saveNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes, params?.hobbyName]);

  React.useEffect(() => {
    if (params) {
      setHobbyData({
        name: params.hobbyName || 'рисование',
        image: params.hobbyImage || require('../../assets/pictures/PaintArt.png'),
        isNew: params.isNew || false
      });
    }
  }, [params]);

  React.useEffect(() => {
    const loadGoal = async () => {
      try {
        const savedGoals = await AsyncStorage.getItem('@hobbyGoals');
        const goals = savedGoals ? JSON.parse(savedGoals) : {};
        const hobbyGoal = goals[params?.hobbyName || ''] || 'Скорее добавьте цель';
        setGoalText(hobbyGoal);
      } catch (e) {
        console.error('Ошибка загрузки цели', e);
      }
    };
    loadGoal();
  }, [params?.hobbyName]);

  React.useEffect(() => {
    const loadProgressData = async () => {
      try {
        const hobbyName = params?.hobbyName || '';
        
        const savedProgress = await AsyncStorage.getItem('@hobbyProgress');
        if (savedProgress) {
          const progressData = JSON.parse(savedProgress);
          setProgress(progressData[hobbyName] || { current: 0, target: 0 });
        }
        
        const savedGoals = await AsyncStorage.getItem('@hobbyGoals');
        if (savedGoals) {
          const goals = JSON.parse(savedGoals);
          setGoalText(goals[hobbyName] || 'Скорее добавьте цель');
        }
      } catch (e) {
        console.error('Ошибка загрузки данных', e);
      }
    };
    
    loadProgressData();
  }, [params?.hobbyName]);

  const addNote = (note: { text?: string; mediaUrl?: string }) => {
    setNotes(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' }),
        ...note,
      },
    ]);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setNewNoteImage(result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={[styles.container, showNewNoteModal && { opacity: 0.6 }]}>

        <View style={styles.UpperPanel}>
          <BackGroundGradientOrange />
        </View>

        <View style={styles.paintOpacityArtContainer}>
          <Image
            source={params?.hobbyImage || hobbyData.image}
            style={{
              width: 320,
              height: 320,
              opacity: 0.15
            }}
          />
        </View>

        <View style={styles.whiteRectangleContainer}>
          <WhiteRectangle />
          <View style={styles.yourGoal}>
            <Text style={styles.yourGoalText}>{goalText}</Text>
          </View>

          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>
              {progress.current} из {progress.target || '?'}
            </Text>
          </View>

          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBarFill,
                { 
                  width: `${progress.target > 0 
                    ? Math.min(100, (progress.current / progress.target) * 100) 
                    : 0}%` 
                }
              ]}
            />
          </View>

          <View style={styles.tabsContainer}>
            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.tabButton}
                onPress={() => setActiveTab('tracking')}
              >
                <Text style={[
                  styles.tabButtonText,
                  activeTab === 'tracking' && styles.activeTabText
                ]}>
                  отслеживание
                </Text>
              </TouchableOpacity>

              <View style={styles.gapLineContainer}>
                <View style={[
                  styles.gapLineLeft,
                  activeTab === 'tracking' && styles.activeGapLine
                ]} />
                <View style={[
                  styles.gapLineRight,
                  activeTab === 'settings' && styles.activeGapLine
                ]} />
              </View>

              <TouchableOpacity
                style={styles.tabButton}
                onPress={goToSettings}
              >
                <Text style={[
                  styles.tabButtonText,
                  activeTab === 'settings' && styles.activeTabText
                ]}>
                  настройки
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.fullUnderline}>
              <View style={[
                styles.activeUnderline,
                activeTab === 'tracking' && { width: '52%', left: '-2%' },
                activeTab === 'settings' && { width: '50%', left: '50%' }
              ]} />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.ThreeStripedButton}
          onPress={() => navigation.navigate('Hobbies')}
        >
          <ArrowToBack />
        </TouchableOpacity>

        <View style={styles.PaintScreenText}>
          <Text style={styles.PaintScreenTextFonts}>{hobbyData.name}</Text>
        </View>

        {/* Вкладка отслеживания */}
        {activeTab === 'tracking' && (
          <View style={{ flex: 2, maxHeight: 2000, marginHorizontal: 24, marginTop: 500, paddingBottom: 16 }}>
            <FlatList
              ref={flatListRef}
              data={notes}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => (
                <View style={{ marginBottom: 16 }}>
                  {/* Дата */}
                  {(index === 0 || notes[index - 1].date !== item.date) && (
                    <Text style={{ color: '#A97C50', marginBottom: 4 }}>{item.date}</Text>
                  )}
                  {/* Текст */}
                  {item.text && (
                    <View style={{ backgroundColor: '#FBE7D0', borderRadius: 16, padding: 8, alignSelf: 'flex-start', marginBottom: 4 }}>
                      <Text style={{ color: '#A97C50' }}>{item.text}</Text>
                    </View>
                  )}
                  {/* Медиа */}
                  {item.mediaUrl && (
                    <Image source={{ uri: item.mediaUrl }} style={{ width: 180, height: 180, borderRadius: 16 }} />
                  )}
                </View>
              )}
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end', paddingBottom: 16 }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}

        <TouchableOpacity
          style={styles.CreateNewArtHobby}
          onPress={() => {
            setShowNewNoteModal(true);
            setNewNoteType(null);
            setNewNoteText('');
            setNewNoteImage(null);
          }}
        >
          <NewHobbyIcon />
        </TouchableOpacity>

      </View>

      {/* Модальное окно новой заметки */}
      {showNewNoteModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.newHobbyModal}>
            {/* Крестик закрытия */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setShowNewNoteModal(false);
                setNewNoteType(null);
                setNewNoteText('');
                setNewNoteImage(null);
              }}
            >
              <CloseCreatingHobbyIcon />
            </TouchableOpacity>
            {/* Заголовок */}
            <View style={[styles.modalHeader, { marginBottom: -10 }]}> 
              <Text style={styles.modalTitle}>Новая заметка</Text>
            </View>
            {/* Выбор типа заметки */}
            {!newNoteType && (
              <View style={[styles.iconsRow, { marginBottom: -10 }]}> 
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => setNewNoteType('media')}
                >
                  <NewMediaNoteIcon />
                  <Text style={styles.iconText}>Медиа</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => setNewNoteType('text')}
                >
                  <NewTextNoteIcon />
                  <Text style={styles.iconText}>Текст</Text>
                </TouchableOpacity>
              </View>
            )}
            {/* Ввод текстовой заметки */}
            {newNoteType === 'text' && (
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: '#E2C7B6',
                    borderRadius: 12,
                    padding: 10,
                    minHeight: 60,
                    color: '#A97C50',
                    backgroundColor: '#FBE7D0',
                  }}
                  placeholder="Введите заметку"
                  placeholderTextColor="#A97C50"
                  value={newNoteText}
                  onChangeText={setNewNoteText}
                  multiline
                />
                <TouchableOpacity
                  style={{ marginTop: 16, alignSelf: 'flex-end', backgroundColor: '#FF9900', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 20 }}
                  onPress={() => {
                    if (newNoteText.trim()) {
                      addNote({ text: newNoteText });
                      setNewNoteText('');
                      setNewNoteType(null);
                      setShowNewNoteModal(false);
                    }
                  }}
                >
                  <Text style={styles.confirmButtonText}>Сохранить</Text>
                  </TouchableOpacity>
              </View>
            )}
            {/* Ввод медиа-заметки */}
            {newNoteType === 'media' && (
              <View style={{ marginTop: 16, alignItems: 'center' }}>
                {newNoteImage ? (
                  <Image source={{ uri: newNoteImage }} style={{ width: 180, height: 180, borderRadius: 16, marginBottom: 12 }} />
                ) : (
                  <TouchableOpacity
                    style={{ backgroundColor: '#FBE7D0', borderRadius: 12, padding: 16, marginBottom: 12 }}
                    onPress={pickImage}
                  >
                    <Text style={{ color: '#A97C50' }}>Выбрать изображение</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  style={{ marginTop: 8, alignSelf: 'flex-end', backgroundColor: '#FF9900', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 20 }}
                  onPress={() => {
                    if (newNoteImage) {
                      addNote({ mediaUrl: newNoteImage });
                      setNewNoteImage(null);
                      setNewNoteType(null);
                      setShowNewNoteModal(false);
                    }
                  }}
                  disabled={!newNoteImage}
                >
                  <Text style={styles.confirmButtonText}>Сохранить</Text>
                  </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}

    </View>
  );
}

export default DrawingScreen;