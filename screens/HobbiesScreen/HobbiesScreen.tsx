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
import YogaIcon from "../../assets/icons/YogaIcon";
import StarIcon from '../../assets/icons/StarIcon';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import PaintIcon from "../../assets/icons/PaintIcon";
import BellIcon from '../../assets/icons/BellIcon';
import GuitarIcon from "../../assets/icons/GuitarIcon";
import NewHobbyIcon from '../../assets/icons/NewHobbyIcon';
import BookIcon from "../../assets/icons/BookIcon";
import ThreeStripedIcon from '../../assets/icons/ThreeStripedIcon';
import ActiveCommunityIcon from '../../assets/icons/ActiveCommunityIcon';



import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { HobbiesScreenNavigationProp } from '../../types';



const HobbiesScreen = () => {
  interface Hobby {
    name: string;
  }

  const [showNewHobbyModal, setShowNewHobbyModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [hobbyName, setHobbyName] = useState('');
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  const navigation = useNavigation<HobbiesScreenNavigationProp>();

  React.useEffect(() => {
    if (navigation.setAsMain) {
      navigation.setAsMain();
    }
  }, []);

  const handleAddHobby = () => {
    const newHobbyName = hobbyName.trim() || "Название хобби";

    setHobbies([...hobbies, { name: newHobbyName }]);

    setHobbyName('');
    setShowNewHobbyModal(false);
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
            <TouchableOpacity style={styles.hobbyItem}>
              <GuitarIcon />
              <View style={styles.hobbyTextWrapper}>
                <Text style={styles.hobbyText}>ГИТАРА</Text>
                <Text style={styles.hobbyStatus}>Не занимались 3 дня</Text>
              </View>
              <View style={styles.arrowRightIcon} >
                <ArrowRightIcon />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.hobbyItem}>
              <BookIcon />
              <View style={styles.hobbyTextWrapper}>
                <Text style={styles.hobbyText}>КНИГИ</Text>
                <Text style={styles.hobbyStatus}>103 из 230 страниц</Text>
              </View>
              <View style={styles.arrowRightIcon} >
                <ArrowRightIcon />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.hobbyItem}>
              <YogaIcon />
              <View style={styles.hobbyTextWrapper}>
                <Text style={styles.hobbyText}>ЙОГА</Text>
                <Text style={styles.hobbyStatus}>17 дней подряд</Text>
              </View>
              <View style={styles.arrowRightIcon} >
                <ArrowRightIcon />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.hobbyItem}
              onPress={() => navigation.navigate('Drawing')}
            >
              <PaintIcon />
              <View style={styles.hobbyTextWrapper}>
                <Text style={styles.hobbyText}>РИСОВАНИЕ</Text>
                <Text style={styles.hobbyStatus}>Не занимались 5 дней</Text>
              </View>
              <View style={styles.arrowRightIcon} >
                <ArrowRightIcon />
              </View>
            </TouchableOpacity>

            {hobbies.map((hobby, index) => (
              <TouchableOpacity key={index} style={styles.hobbyItem}>
                {/* Изображение иконки */}
                <Image
                  source={require('../../assets/pictures/hobbypictures.png')}
                  style={styles.Image}
                />

                <View style={styles.hobbyTextWrapper}>
                  <Text style={styles.hobbyText}>{hobby.name}</Text>
                  <Text style={styles.hobbyStatus}></Text>
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