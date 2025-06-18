import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

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

        <TouchableOpacity
          style={styles.CreateNewArtHobby}
          onPress={() => setShowNewNoteModal(true)}
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
              onPress={() => setShowNewNoteModal(false)}
            >
              <CloseCreatingHobbyIcon />
            </TouchableOpacity>

            {/* Заголовок */}
            <View style={[styles.modalHeader, { marginBottom: -10 }]}>
              <Text style={styles.modalTitle}>Новая заметка</Text>
            </View>

            {/* Блок с иконками */}
            <View style={[styles.iconsRow, { marginBottom: -10 }]}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  // Логика сохранения заметки
                  setShowNewNoteModal(false);
                }}
              >
                <NewMediaNoteIcon />
                <Text style={styles.iconText}>Медиа</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  setShowNewNoteModal(false);
                }}
              >
                <NewTextNoteIcon />
                <Text style={styles.iconText}>Текст</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      )}

    </View>
  );
}

export default DrawingScreen;