import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import BackGroundGradientOrange from '../../assets/icons/BackGroundGradientOrange';
import LogoIcon from '../../assets/icons/LogoIcon';
import LowerPanel from '../../assets/icons/LowerPanelIcon';
import MainScreenLogo from '../../assets/icons/MainScreenLogo';
import ActiveBackToMainIcon from '../../assets/icons/ActiveBackToMainIcon';
import CloseCreatingHobbyIcon from "../../assets/icons/CloseCreatingHobbyIcon";
import SwitchOffIcon from '../../assets/icons/SwitchOffIcon';
import SwitchOnIcon from '../../assets/icons/SwitchOnIcon';
import AddPictureOnCreatingHobby from '../../assets/icons/AddPictureOnCreatingHobby';
import CommunityIcon from '../../assets/icons/CommunityIcon';
import StarIcon from '../../assets/icons/StarIcon';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import BellIcon from '../../assets/icons/BellIcon';
import NewHobbyIcon from '../../assets/icons/NewHobbyIcon';
import ThreeStripedIcon from '../../assets/icons/ThreeStripedIcon';
import ActiveCommunityIcon from '../../assets/icons/ActiveCommunityIcon';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { HobbiesScreenNavigationProp } from '../../types';

import { ImageSourcePropType } from 'react-native';



const HobbiesScreen = () => {

  type HobbyImageKey = 'guitar' | 'book' | 'yoga' | 'paint' | 'default';

  interface Hobby {
    name: string;
    imageKey: HobbyImageKey;
    status?: string;
    goal?: string;
  }

  const HOBBY_IMAGES: Record<HobbyImageKey, ImageSourcePropType> = {
    guitar: require('../../assets/pictures/GuitarArt.png'),
    book: require('../../assets/pictures/BookArt.png'),
    yoga: require('../../assets/pictures/YogaArt.png'),
    paint: require('../../assets/pictures/PaintArt.png'),
    default: require('../../assets/pictures/HobbyPictures.png'),
  };

  const DEFAULT_IMAGE_KEY: HobbyImageKey = 'default';

  const getHobbyImage = (key: string): ImageSourcePropType => {
    return HOBBY_IMAGES[key as HobbyImageKey] || HOBBY_IMAGES[DEFAULT_IMAGE_KEY];
  };

  const [showNewHobbyModal, setShowNewHobbyModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [hobbyName, setHobbyName] = useState('');
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [hobbies, setHobbies] = useState<Hobby[]>([
    {
      name: 'ГИТАРА',
      imageKey: 'guitar',
      status: 'Не занимались 3 дня'
    },
    {
      name: 'КНИГИ',
      imageKey: 'book',
      status: '103 из 230 страниц'
    },
    {
      name: 'ЙОГА',
      imageKey: 'yoga',
      status: '17 дней подряд'
    },
    {
      name: 'РИСОВАНИЕ',
      imageKey: 'paint',
      status: 'Не занимались 5 дней'
    }
  ]);

  const navigation = useNavigation<HobbiesScreenNavigationProp>();

  React.useEffect(() => {
    if (navigation.setAsMain) {
      navigation.setAsMain();
    }
  }, []);

  React.useEffect(() => {
    const loadHobbies = async () => {
      try {
        const saved = await AsyncStorage.getItem('@hobbies');
        if (saved) setHobbies(JSON.parse(saved));
      } catch (e) {
        console.error('Ошибка загрузки', e);
      }
    };
    loadHobbies();
  }, []);
  
  React.useEffect(() => {
    const saveHobbies = async () => {
      try {
        await AsyncStorage.setItem('@hobbies', JSON.stringify(hobbies));
      } catch (e) {
        console.error('Ошибка сохранения', e);
      }
    };
    saveHobbies();
  }, [hobbies]);

  // AsyncStorage.removeItem('@hobbies');
  // AsyncStorage.clear();

  const handleAddHobby = () => {
    const newHobby: Hobby = {
      name: hobbyName.trim() || "Новое хобби",
      imageKey: DEFAULT_IMAGE_KEY,
      status: 'Новое хобби'
    };
    
    setHobbies([...hobbies, newHobby]);
    setHobbyName('');
    setShowNewHobbyModal(false);
    
    navigation.navigate('Drawing', {
      hobbyName: newHobby.name,
      hobbyImage: HOBBY_IMAGES[newHobby.imageKey],
    });
  };

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={[styles.container, (showNewHobbyModal || showNotificationsModal) && { opacity: 0.6 }]}>
        
        <View style={styles.UpperPanel}>
          <BackGroundGradientOrange />
        </View>

        <View style={styles.LogoOnMainScreen}>
          <LogoIcon />
        </View>

        <View style={styles.MainScreenText}>
          <Text style={styles.MainScreenTextFonts}>redly</Text>
        </View>

        <View style={styles.LowerPanel}>
          <LowerPanel />
        </View>

        <TouchableOpacity
          style={styles.MainScreenLogo}
          onPress={goToProfile}
        >
          <MainScreenLogo />
        </TouchableOpacity>

        <View style={styles.BackToMainButtonWrapper}>
          <TouchableOpacity
            style={styles.BackToMainButton}
            onPress={() => { }}
          >
            <ActiveBackToMainIcon />
          </TouchableOpacity>
          <Text style={[
            styles.BackToMainButtonText,
            navigation.getState()?.routes[navigation.getState().index]?.name === 'Hobbies' && styles.activeOpacityText
          ]}>Главная</Text>
        </View>

        <View style={styles.CommunityButtonWrapper}>
          <TouchableOpacity
            style={styles.CommunityButton}
            onPress={() => navigation.navigate('Community')}
          >
            {navigation.getState()?.routes[navigation.getState().index]?.name === 'Community' ? <ActiveCommunityIcon /> : <CommunityIcon />}
          </TouchableOpacity>
          <Text style={[
            styles.communityButtonText,
            navigation.getState()?.routes[navigation.getState().index]?.name === 'Community' && styles.activeOpacityText
          ]}>Сообщество</Text>
        </View>

        <TouchableOpacity
          style={styles.CreateNewHobby}
        >
          <NewHobbyIcon />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ThreeStripedButton}
        >
          <ThreeStripedIcon />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.BellButton,
            showNewHobbyModal && { opacity: 0.6 }
          ]}
          onPress={() => setShowNotificationsModal(true)}
          disabled={showNewHobbyModal}
        >
          <View style={showNewHobbyModal && { opacity: 0.6 }}>
            <BellIcon />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.CreateNewHobby,
            showNotificationsModal && { opacity: 0.6 }
          ]}
          onPress={() => setShowNewHobbyModal(true)}
          disabled={showNotificationsModal}
        >
          <View style={showNotificationsModal && { opacity: 0.6 }}>
            <NewHobbyIcon />
          </View>
        </TouchableOpacity>

        <Text style={[styles.title, styles.leftAligned]}>Мои хобби</Text>

        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            {hobbies.map((hobby, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.hobbyItem}
                onPress={() => navigation.navigate('Drawing', { 
                  hobbyName: hobby.name,
                  hobbyImage: getHobbyImage(hobby.imageKey),
                })}
              >
                <Image
                  source={getHobbyImage(hobby.imageKey)}
                  style={{ width: 50, height: 50 }}
                />
                <View style={styles.hobbyTextWrapper}>
                  <Text style={styles.hobbyText}>{hobby.name}</Text>
                  <Text style={styles.hobbyStatus}>{hobby.status}</Text>
                </View>
                <View style={styles.arrowRightIcon}>
                  <ArrowRightIcon />
                </View>
              </TouchableOpacity>
            ))}

            <View style={styles.hobbyItem}>
              <StarIcon />
              <View style={styles.hobbyTextWrapper}>
                <Text style={styles.hobbyText}>Попробуйте что-то новое</Text>
                <Text style={styles.hobbyStatus}>А вдруг это твоё?</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {showNewHobbyModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.newHobbyModal}>
            {/* Крестик закрытия */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowNewHobbyModal(false)}
            >
              <CloseCreatingHobbyIcon />
            </TouchableOpacity>

            {/* Заголовок */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Новое хобби</Text>
            </View>

            {/* Блок с иконкой и полем ввода */}
            <View style={styles.inputContainer}>

              <View style={styles.addPictureIcon}>
                <AddPictureOnCreatingHobby />
              </View>

              <View style={styles.textInputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Название хобби"
                  placeholderTextColor="#999"
                  value={hobbyName}
                  onChangeText={setHobbyName}
                />
                <View style={styles.underline} />
              </View>
            </View>

            {/* Блок с напоминаниями */}
            <View style={styles.remindersContainer}>
              <Text style={styles.remindersText}>Напоминания</Text>
              <TouchableOpacity
                onPress={() => setRemindersEnabled(!remindersEnabled)}
                style={styles.switchContainer}
              >
                {remindersEnabled ? <SwitchOnIcon /> : <SwitchOffIcon />}
              </TouchableOpacity>
            </View>

            {/* Кнопка подтверждения */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleAddHobby}
            >
              <Text style={styles.confirmButtonText}>Добавить</Text>
            </TouchableOpacity>

          </View>
        </View>
      )}

      {showNotificationsModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.notificationsModal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowNotificationsModal(false)}
            >
              <CloseCreatingHobbyIcon />
            </TouchableOpacity>

            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Уведомления</Text>
            </View>

          </View>
        </View>
      )}

    </View>
  );
}

export default HobbiesScreen;