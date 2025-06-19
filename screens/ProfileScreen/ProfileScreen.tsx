import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';


import BackGroundGradientOrange from '../../assets/icons/BackGroundGradientOrange';
import ArrowToBack from '../../assets/icons/ArrowToBack';
import MainScreenLogo from '../../assets/icons/MainScreenLogo';
import ProfileCameraForChangePictureIcon from '../../assets/icons/ProfileCameraForChangePictureIcon';
import ChangeNickNameIcon from '../../assets/icons/ChangeNickNameIcon';
import EyeClosedIcon from "../../assets/icons/EyeClosedIcon";
import EyeOpenedIcon from "../../assets/icons/EyeOpenedIcon";
import SwitchOffIcon from '../../assets/icons/SwitchOffIcon';
import SwitchOnIcon from '../../assets/icons/SwitchOnIcon';

import AsyncStorage from '@react-native-async-storage/async-storage';



import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { ProfileScreenNavigationProp } from '../../types';


const ProfileScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [notifications, setNotifications] = useState({
    hobbyReminder: true,
    postLikes: true,
    postComments: true
  });

  const [nickname, setNickname] = useState('nickname');
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const nicknameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation<ProfileScreenNavigationProp>();

  useEffect(() => {
    const loadNickname = async () => {
      try {
        const savedNickname = await AsyncStorage.getItem('userNickname');
        if (savedNickname) {
          setNickname(savedNickname);
        }
      } catch (error) {
        console.error('Ошибка при загрузке никнейма:', error);
      }
    };
    
    loadNickname();
  }, []);

  // Сохранение никнейма
  const saveNickname = async () => {
    try {
      await AsyncStorage.setItem('userNickname', nickname);
      setIsEditingNickname(false);
    } catch (error) {
      console.error('Ошибка при сохранении никнейма:', error);
    }
  };

  // Активация редактирования никнейма
  const handleEditNickname = () => {
    setIsEditingNickname(true);
    setTimeout(() => {
      nicknameInputRef.current?.focus();
    }, 100);
  };

  // Обработка нажатия "Готово" на клавиатуре
  const handleSubmitEditing = () => {
    saveNickname();
  };


  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.profileContainer}>
        <View style={styles.UpperPanel}>
          <BackGroundGradientOrange />
        </View>

        <TouchableOpacity
          style={styles.ThreeStripedButton}
          onPress={navigation.goBack}
        >
          <ArrowToBack />
        </TouchableOpacity>

        <View style={styles.PaintScreenText}>
          <Text style={styles.PaintScreenTextFonts}>профиль</Text>
        </View>

        {/* Аватар */}
        <View style={styles.avatarContainerOnProfile}>
          <View style={styles.profileAvatar}>
            <MainScreenLogo />
          </View>
          <TouchableOpacity style={styles.cameraIcon}>
            <ProfileCameraForChangePictureIcon />
          </TouchableOpacity>
        </View>

        {/* Никнейм */}
        <View style={styles.nicknameContainer}>
          <Text style={styles.nickname}>Kotyara</Text>
          <TouchableOpacity>
            <ChangeNickNameIcon />
          </TouchableOpacity>
        </View>

        {/* Данные аккаунта */}
        <View style={styles.accountDataContainer}>
          {/* Рамка для email */}
          <View style={styles.dataItemContainer}>
            <Text style={styles.dataLabel}>Эл. почта</Text>
            <Text style={styles.dataValue}>eldar.minkhazev@urfu.me</Text>
          </View>

          {/* Рамка для пароля */}
          <View style={styles.dataItemContainer}>
            <Text style={styles.dataLabel}>Пароль</Text>
            <Text style={styles.dataValue}>
              {passwordVisible ? 'UrFUtop2025' : '•••••••••••'}
            </Text>
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.eyeIcon}
            >
              {passwordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Уведомления */}
        <Text style={styles.sectionTitleOnProfile}>Уведомления</Text>

        <View style={styles.notificationsContainer}>
          <View style={styles.notificationItemContainer}>
            <Text style={styles.notificationText}>Напоминание о хобби</Text>
            <View style={styles.switchContainer}>
              <TouchableOpacity onPress={() => setNotifications({
                ...notifications,
                hobbyReminder: !notifications.hobbyReminder
              })}>
                {notifications.hobbyReminder ? <SwitchOnIcon /> : <SwitchOffIcon />}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.notificationItemContainer}>
            <Text style={styles.notificationText}>Лайки моих постов</Text>
            <View style={styles.switchContainer}>
              <TouchableOpacity onPress={() => setNotifications({
                ...notifications,
                postLikes: !notifications.postLikes
              })}>
                {notifications.postLikes ? <SwitchOnIcon /> : <SwitchOffIcon />}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.notificationItemContainer}>
            <Text style={styles.notificationText}>Комментарии к моим постам</Text>
            <View style={styles.switchContainer}>
              <TouchableOpacity onPress={() => setNotifications({
                ...notifications,
                postComments: !notifications.postComments
              })}>
                {notifications.postComments ? <SwitchOnIcon /> : <SwitchOffIcon />}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;