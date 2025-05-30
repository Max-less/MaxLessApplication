import React, { useState } from 'react';
import { ScrollView, View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import { Input } from './shared/input/Input';
import { useFonts } from './fonts';
import EyeClosedIcon from "./assets/icons/EyeClosedIcon";
import EyeOpenedIcon from "./assets/icons/EyeOpenedIcon";
import GuitarIcon from "./assets/icons/GuitarIcon";
import BookIcon from "./assets/icons/BookIcon";
import YogaIcon from "./assets/icons/YogaIcon";
import PaintIcon from "./assets/icons/PaintIcon";
import BackToMainIcon from "./assets/icons/BackToMainIcon";
import CommunityIcon from './assets/icons/CommunityIcon';
import ThreeStripedIcon from './assets/icons/ThreeStripedIcon';
import BellIcon from './assets/icons/BellIcon';
import LowerPanel from './assets/icons/LowerPanelIcon';
import StarIcon from './assets/icons/StarIcon';
import MainScreenLogo from './assets/icons/MainScreenLogo';
import LogoIcon from './assets/icons/LogoIcon';
import ArrowRightIcon from './assets/icons/ArrowRightIcon';
import NewHobbyIcon from './assets/icons/NewHobbyIcon';
import AddNewPictureIcon from './assets/icons/AddNewPictureIcon';
import BackGroundGradientOrange from './assets/icons/BackGroundGradientOrange';
import ArrowToBack from './assets/icons/ArrowToBack';
import PaintOpacityArt from './assets/icons/PaintOpacityArt';
import WhiteRectangle from './assets/icons/WhiteRectangle';
import { styles } from './styles';
import ActiveCommunityIcon from './assets/icons/ActiveCommunityIcon';
import ActiveBackToMainIcon from './assets/icons/ActiveBackToMainIcon';
import PointerRight from './assets/icons/PointerRight';
import PointerLeft from './assets/icons/PointerLeft';
import SwitchOffIcon from './assets/icons/SwitchOffIcon';
import SwitchOnIcon from './assets/icons/SwitchOnIcon';
import CloseCreatingHobbyIcon from "./assets/icons/CloseCreatingHobbyIcon";
import AddPictureOnCreatingHobby from './assets/icons/AddPictureOnCreatingHobby';
import ProfileCameraForChangePictureIcon from './assets/icons/ProfileCameraForChangePictureIcon';
import ChangeNickNameIcon from './assets/icons/ChangeNickNameIcon';
import NewMediaNoteIcon from './assets/icons/NewMediaNoteIcon';
import NewTextNoteIcon from './assets/icons/NewTextNoteIcon';
import SearchIcon from './assets/icons/SearchIcon';
import CreateNewSocietyIcon from './assets/icons/CreateNewSocietyIcon';
import OrangeCircleIcon from './assets/icons/OrangeCircleIcon';
import LikePressedIcon from './assets/icons/LikePressedIcon';
import LikeUnPressedIcon from './assets/icons/LikeUnPressedIcon';
import ComentIcon from './assets/icons/ComentIcon';
import CameraIcon from './assets/icons/CameraIcon';

type CommunityDetailsScreenProps = {
  navigation: {
    goBack: () => void;
  };
};

type CommunityScreenProps = {
  navigation: {
    goBack: () => void;
    navigateToProfile: () => void;
    navigateToCommunityDetails: () => void; // Убираем параметр activeTab
    currentScreen: 'hobbies' | 'community';
  };
};

type ProfileScreenProps = {
  navigation: {
    goBack: () => void;
    cameFrom: 'hobbies' | 'community';
  };
};

type HobbiesScreenProps = {
  navigation: {
    goBack: () => void;
    navigateToDrawing: () => void;
    navigateToCommunity: () => void;
    navigateToProfile: () => void;
    currentScreen: 'hobbies' | 'community';
    setAsMain?: () => void;
  };
};

type DrawingScreenProps = {
  navigation: {
    goBack: () => void;
    navigateToSettings: () => void;
  };
};

type RegistrationScreenProps = {
  navigation: {
    goBack: () => void;
    navigateToSuccess: () => void;
  };
};

type RegistrationSuccessScreenProps = {
  navigation: {
    goBack: () => void;
    setCurrentScreen: (screen: 'login' | 'registration' | 'hobbies' | 'registrationSuccess') => void;
  };
};

type SettingScreenProps = {
  navigation: {
    goBack: () => void;
    navigate: (screen: 'drawing' | 'hobbies') => void;
  };
};

const { width, height } = Dimensions.get('window');



export default function App() {
  const fontsLoaded = useFonts();

  const [currentScreen, setCurrentScreen] = React.useState<
  'login' | 'registration' | 'hobbies' | 'registrationSuccess' | 
  'drawing' | 'community' | 'settings' | 'profile' | 'communityDetails'
>('login');

  const [prevScreen, setPrevScreen] = React.useState<'hobbies' | 'community'>('hobbies');

  const [mainScreen, setMainScreen] = React.useState<'hobbies' | null>(null);

  const navigateWithParams = (
    screen: 'communityDetails',
    params: { activeTab: 'feed' | 'subscriptions' },
    from?: 'hobbies' | 'community'
  ) => {
    if (from) setPrevScreen(from);
    setCurrentScreen(screen);
  };

  const navigateTo = (screen: typeof currentScreen, from?: 'hobbies' | 'community') => {
    if (from) {
      setPrevScreen(from);
    }
    setCurrentScreen(screen);
  };


  if (currentScreen === 'communityDetails') {
    return <CommunityDetailsScreen 
      navigation={{ goBack: () => setCurrentScreen('community') }}
    />;
  }

  if (currentScreen === 'profile') {
    return <ProfileScreen navigation={{ 
      goBack: () => setCurrentScreen(prevScreen),
      cameFrom: prevScreen
    }} />;
  }

  if (currentScreen === 'settings') {
    return <SettingScreen navigation={{ 
      goBack: () => setCurrentScreen('drawing'),
      navigate: (screen: 'drawing' | 'hobbies') => setCurrentScreen(screen)
    }} />;
  }

  if (currentScreen === 'drawing') {
    return <DrawingScreen navigation={{ 
      goBack: () => setCurrentScreen('hobbies'),
      navigateToSettings: () => setCurrentScreen('settings')
    }} />;
  }

  if (currentScreen === 'registration') {
    return <RegistrationScreen navigation={{ 
      goBack: () => setCurrentScreen('login'),
      navigateToSuccess: () => setCurrentScreen('registrationSuccess')
    }} />;
  }

  if (currentScreen === 'registrationSuccess') {
    return <RegistrationSuccessScreen navigation={{ 
      goBack: () => setCurrentScreen('registration'),
      setCurrentScreen: setCurrentScreen
    }} />;
  }

  if (currentScreen === 'hobbies') {
    return <HobbiesScreen navigation={{ 
      goBack: () => setCurrentScreen(mainScreen || 'login'), 
      navigateToDrawing: () => navigateTo('drawing', 'hobbies'),
      navigateToCommunity: () => navigateTo('community', 'hobbies'),
      navigateToProfile: () => navigateTo('profile', 'hobbies'),
      currentScreen: 'hobbies'
    }} />;
  }
  
  if (currentScreen === 'community') {
    return <CommunityScreen navigation={{ 
      goBack: () => setCurrentScreen('hobbies'),
      navigateToProfile: () => navigateTo('profile', 'community'),
      navigateToCommunityDetails: () => navigateTo('communityDetails', 'community'),
      currentScreen: 'community'
    }} />;
  }

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require('./assets/logo.png')}
            resizeMode="contain"
          />
          <View style={styles.form}>
            <Input
              isEmail
              placeholder="Ваш номер телефона или e-mail"
              placeholderTextColor="#999"
            />
            <View style={styles.passwordContainer}>
              <Input
                isPassword
                placeholder="Пароль"
                placeholderTextColor="#999"
              />
              
              <TouchableOpacity 
                onPress={() => {

                }}
              >
                <Text style={styles.restoreText}>Забыли пароль?</Text>
              </TouchableOpacity>

            </View>
          </View>
          
          <View style={styles.buttonstyle}>  
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => {
                setCurrentScreen('hobbies');
                setMainScreen('hobbies');
              }}
            >
              <Text style={styles.buttonText}>Войти</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button2} 
              onPress={() => setCurrentScreen('registration')}
            >
              <Text style={styles.buttonText2}>Регистрация</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

function RegistrationScreen({ navigation }: RegistrationScreenProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.registrationTitle}>
            Регистрация
          </Text>
          
          {/* Email */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Номер телефона или e-mail</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>
          
          {/* Пароль с иконкой глаза */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Придумайте пароль</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder=""
                placeholderTextColor="#999"
                secureTextEntry={!isPasswordVisible}
              />
              <Pressable 
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                style={styles.eyeIcon}
              >
                {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
              </Pressable>
            </View>
          </View>
          
          {/* Подтверждение пароля с иконкой глаза */}
          <View style={styles.lastInputWrapper}>
            <Text style={styles.label}>Подтвердите пароль</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder=""
                placeholderTextColor="#999"
                secureTextEntry={!isConfirmPasswordVisible}
              />
              <Pressable 
                onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                style={styles.eyeIcon}
              >
                {isConfirmPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
              </Pressable>
            </View>
          </View>
          
          {/* Кнопка регистрации */}
          <TouchableOpacity 
            style={styles.mainButton}
            onPress={navigation.navigateToSuccess}
          >
            <Text style={styles.mainButtonText}>Далее</Text>
          </TouchableOpacity>
          
          {/* Кнопка возврата */}
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.secondaryButtonText}>Вернуться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

function RegistrationSuccessScreen({ navigation }: RegistrationSuccessScreenProps) {
  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          
          {/* Круг для аватара с иконкой добавления */}
          <View style={styles.avatarContainer}>
            <AddNewPictureIcon />
          </View>

          <Text style={styles.registrationTitleOnAddPicture}>
            Установите аватар
          </Text>
          
          {/* Поле для никнейма */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Придумайте никнейм</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#999"
            />
          </View>
          
          {/* Кнопка продолжения */}
          <TouchableOpacity 
            style={styles.mainButton}
            onPress={() => navigation.setCurrentScreen('hobbies')}
          >
            <Text style={styles.mainButtonText}>Давайте начнём!</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.secondaryButtonText}>Вернуться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

interface Hobby {
  name: string;
}

function HobbiesScreen({ navigation }: HobbiesScreenProps) {
  const [showNewHobbyModal, setShowNewHobbyModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [hobbyName, setHobbyName] = useState('');
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

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
          onPress={() => navigation.navigateToProfile()}
        >
          <MainScreenLogo />
        </TouchableOpacity>

        <View style={styles.BackToMainButtonWrapper}>
          <TouchableOpacity 
            style={styles.BackToMainButton}
            onPress={() => {}}
          >
            <ActiveBackToMainIcon />
          </TouchableOpacity>
          <Text style={[
            styles.BackToMainButtonText,
            navigation.currentScreen === 'hobbies' && styles.activeOpacityText
          ]}>Главная</Text>
        </View>

        <View style={styles.CommunityButtonWrapper}>
          <TouchableOpacity 
            style={styles.CommunityButton}
            onPress={() => navigation.navigateToCommunity()}
          >
            {navigation.currentScreen === 'community' ? <ActiveCommunityIcon /> : <CommunityIcon />}
          </TouchableOpacity>
          <Text style={[
            styles.communityButtonText,
            navigation.currentScreen === 'community' && styles.activeOpacityText
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
              onPress={() => navigation.navigateToDrawing()}
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
                  source={require('./assets/pictures/hobbypictures.png')} 
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
              onPress={handleAddHobby} // Используем новую функцию
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

function ProfileScreen({ navigation }: ProfileScreenProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [notifications, setNotifications] = useState({
    hobbyReminder: true,
    postLikes: true,
    postComments: true
  });

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.profileContainer}>
        {/* Фон */}
        <View style={styles.UpperPanel}>
          <BackGroundGradientOrange/>
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
          <Text style={styles.nickname}>nickname</Text>
          <TouchableOpacity>
            <ChangeNickNameIcon />
          </TouchableOpacity>
        </View>

        {/* Данные аккаунта */}
      <View style={styles.accountDataContainer}>
        {/* Рамка для email */}
        <View style={styles.dataItemContainer}>
          <Text style={styles.dataLabel}>Эл. почта</Text>
          <Text style={styles.dataValue}>email@example.com</Text>
        </View>
        
        {/* Рамка для пароля */}
        <View style={styles.dataItemContainer}>
          <Text style={styles.dataLabel}>Пароль</Text>
          <Text style={styles.dataValue}>
            {passwordVisible ? 'password123' : '••••••••'}
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

function CommunityScreen({ navigation }: CommunityScreenProps) {
  const [activeTab, setActiveTab] = useState<'feed' | 'subscriptions'>('subscriptions');
  const [feedSearch, setFeedSearch] = useState('');
  const [subscriptionsSearch, setSubscriptionsSearch] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleTabChange = (tab: 'feed' | 'subscriptions') => {
    setActiveTab(tab);
  };

  const handleCommunityPress = () => {
    navigation.navigateToCommunityDetails();
  };

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.UpperPanel}>
        <BackGroundGradientOrange />
      </View>
      
      {/* Кнопки переключения между вкладками */}
      <View style={styles.communityTabsContainer}>
        <TouchableOpacity 
          style={[
            styles.communityTabButton, 
            activeTab === 'feed' && styles.communityActiveTabBackground
          ]}
          onPress={() => handleTabChange('feed')}
        >
          <Text style={[
            styles.communityTabText, 
            activeTab === 'feed' && styles.communityActiveTabText
          ]}>
            Общая лента
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.communityTabButton, 
            activeTab === 'subscriptions' && styles.communityActiveTabBackground
          ]}
          onPress={() => handleTabChange('subscriptions')}
        >
          <Text style={[
            styles.communityTabText, 
            activeTab === 'subscriptions' && styles.communityActiveTabText
          ]}>
            Подписки
          </Text>
        </TouchableOpacity>
      </View>

      {/* Поле поиска */}
      <View style={styles.communitySearchContainer}>
        <View style={styles.communitySearchBackground}>
          <View style={styles.communitySearchIcon}>
            <SearchIcon />
          </View>
          <TextInput
            style={styles.communitySearchInput}
            placeholder="Поиск"
            placeholderTextColor="#62281B"
            value={activeTab === 'feed' ? feedSearch : subscriptionsSearch}
            onChangeText={(text) => {
              if (activeTab === 'feed') {
                setFeedSearch(text);
              } else {
                setSubscriptionsSearch(text);
              }
            }}
            numberOfLines={1}
          />
        </View>
      </View>
      
      {/* Контент для вкладки "Сообщетва" */}
      {activeTab === 'feed' && (
        <View style={styles.feedContent}>
            <Text style={styles.subscriptionsTitle}>Подписки</Text>

        </View>
      )}

      {activeTab === 'subscriptions' && (
        <View style={styles.subscriptionsContent}>

          <Text style={styles.communitiesTitle}>Мои сообщества</Text>

          <View style={styles.communityCreateCard}>
            <View style={styles.orangeCircleContainer}>
              <TouchableOpacity 
                style={styles.orangeCircleWrapper}
                onPress={handleCommunityPress}
              >
                <OrangeCircleIcon />
                <View style={styles.cameraIconContainer}>
                  <CameraIcon />
                </View>
              </TouchableOpacity>
              <Text style={styles.cameraButtonText}>PhotoLUV</Text>
            </View>
            
            {/* Группа кнопок справа */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.createSocietyButton}>
                <View style={styles.createSocietyContainer}>
                  <CreateNewSocietyIcon />
                  <Text style={styles.createSocietyText}>Создать</Text>
                </View>
              </TouchableOpacity>
              
              {/* Добавьте другие кнопки здесь, если нужно */}
            </View>
            
          </View>
          
          {/* Новый прямоугольник с контентом */}
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>

            <TouchableOpacity onPress={handleCommunityPress}>
              <View style={styles.postAuthorButton}>
                <OrangeCircleIcon />
                <View style={styles.postCameraIconContainer}>
                  <CameraIcon />
                </View>
              </View>
            </TouchableOpacity>
              
              <View style={styles.postAuthorInfo}>
                <TouchableOpacity onPress={handleCommunityPress}>
                  <Text style={styles.postAuthorName}>PhotoLUV</Text>
                </TouchableOpacity>
                <Text style={styles.postTime}>19 мин.</Text>
              </View>
            </View>
            
            {/* Текст поста */}
            <Text style={styles.postText}>Поймал удачный кадр на закате!</Text>
            
            {/* Изображение поста */}
            <Image 
              source={require('./assets/pictures/image.png')} 
              style={styles.postImage} 
            />
            
            {/* Лайки и комментарии */}
            <View style={styles.postActions}>
            <TouchableOpacity 
              style={styles.likeButton}
              onPress={handleLikePress}
            >
              {isLiked ? <LikePressedIcon /> : <LikeUnPressedIcon />}
              <Text style={styles.actionCount}>{likeCount}</Text>
            </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.commentButton}

              >
                <ComentIcon />
                <Text style={styles.actionCount}>0</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      )}

      <View style={styles.container}>
        <View style={styles.LowerPanel}>
          <LowerPanel />
        </View>

        <TouchableOpacity 
          style={styles.MainScreenLogo}
          onPress={() => navigation.navigateToProfile()}
        >
          <MainScreenLogo />
        </TouchableOpacity>

        <View style={styles.BackToMainButtonWrapper}>
          <TouchableOpacity 
            style={styles.BackToMainButton}
            onPress={() => navigation.goBack()}
          >
            {navigation.currentScreen === 'hobbies' ? <ActiveBackToMainIcon /> : <BackToMainIcon />}
          </TouchableOpacity>
          <Text style={[
            styles.BackToMainButtonText,
            navigation.currentScreen === 'hobbies' && styles.activeOpacityText
          ]}>Главная</Text>
        </View>

        <View style={styles.CommunityButtonWrapper}>
          <TouchableOpacity 
            style={styles.CommunityButton}
            onPress={() => {}}
          >
            <ActiveCommunityIcon />
          </TouchableOpacity>
          <Text style={[
            styles.communityButtonText,
            navigation.currentScreen === 'community' && styles.activeOpacityText
          ]}>Сообщество</Text>
        </View>

      </View>
    </View>
  );
}

function DrawingScreen({ navigation }: DrawingScreenProps) {
  const [activeTab, setActiveTab] = useState<'tracking' | 'settings'>('tracking');
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      {/* Основной контент с возможным затемнением */}
      <View style={[styles.container, showNewNoteModal && { opacity: 0.6 }]}>

        <View style={styles.UpperPanel}>
          <BackGroundGradientOrange />
        </View>

        <View style={styles.paintOpacityArtContainer}>
          <PaintOpacityArt />
        </View>

        <View style={styles.whiteRectangleContainer}>
          <WhiteRectangle />
        
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
                onPress={() => navigation.navigateToSettings()}
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
          onPress={() => navigation.goBack()}
        >
          <ArrowToBack />
        </TouchableOpacity>

        <View style={styles.PaintScreenText}>
          <Text style={styles.PaintScreenTextFonts}>рисование</Text>
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
            <View style={[styles.modalHeader, {marginBottom: -10}]}>
              <Text style={styles.modalTitle}>Новая заметка</Text>
            </View>

            {/* Блок с иконками */}
            <View style={[styles.iconsRow, {marginBottom: -10}]}>
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
                  // Логика сохранения заметки
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

function SettingScreen({ navigation }: SettingScreenProps) {
  const [activeTab, setActiveTab] = useState<'tracking' | 'settings'>('settings');
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(4);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDates, setSelectedDates] = useState<{[key: string]: number[]}>({});

  const getCalendarData = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const firstDayOfWeek = firstDay.getDay();
    const startOffset = (firstDayOfWeek + 6) % 7;
    
    const daysInMonth = lastDay.getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    
    const allDays = Array(startOffset).fill(null).concat(days);

    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
      let week = allDays.slice(i, i + 7);
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }
    
    return weeks;
  };

  const weeks = getCalendarData(currentMonth, currentYear);

  const monthNames = [
    'январь', 'февраль', 'март', 'апрель', 
    'май', 'июнь', 'июль', 'август',
    'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ];

  const handlePrevMonth = () => {
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleDayPress = (day: number) => {
    const monthKey = `${currentYear}-${currentMonth}`;
    
    setSelectedDates(prev => {
      const currentMonthDates = prev[monthKey] || [];
      const newDates = currentMonthDates.includes(day)
        ? currentMonthDates.filter(d => d !== day)
        : [...currentMonthDates, day];
      
      const allSelected = Object.entries(prev)
        .filter(([key]) => key !== monthKey)
        .reduce((acc, [key, days]) => {
          const [y, m] = key.split('-');
          return [...acc, ...days.map(d => `${d}.${parseInt(m)+1}.${y}`)];
        }, newDates.map(d => `${d}.${currentMonth+1}.${currentYear}`));
      
      console.log('Выбранные даты:', allSelected.join(', '));
      
      return {
        ...prev,
        [monthKey]: newDates
      };
    });
  };

  const isDaySelected = (day: number) => {
    const monthKey = `${currentYear}-${currentMonth}`;
    return selectedDates[monthKey]?.includes(day) || false;
  };

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.container}>
        <View style={styles.UpperPanel}>
          <BackGroundGradientOrange />
        </View>

        <View style={styles.paintOpacityArtContainer}>
          <PaintOpacityArt />
        </View>

        <View style={styles.whiteRectangleContainer}>
          <WhiteRectangle />

          <View style={styles.tabsContainer}>
            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.tabButton}
                onPress={() => { 
                  setActiveTab('tracking');
                  navigation.navigate('drawing');
                }}
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
                onPress={() => setActiveTab('settings')}
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

        <View style={styles.settingsContent}>
          <View style={styles.calendarContainer}>
            <View style={styles.monthHeader}>
              <TouchableOpacity style={styles.monthNavButton} onPress={handlePrevMonth}>
                <PointerLeft />
              </TouchableOpacity>
              
              <Text style={styles.monthYearText}>
                {monthNames[currentMonth]} {currentYear} г.
              </Text>
              
              <TouchableOpacity style={styles.monthNavButton} onPress={handleNextMonth}>
                <PointerRight />
              </TouchableOpacity>
            </View>

            <View style={styles.weekDaysRow}>
              {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map(day => (
                <Text key={day} style={styles.weekDayText}>{day}</Text>
              ))}
            </View>

            {weeks.map((week, i) => (
              <View key={i} style={styles.weekRow}>
                {week.map((day, j) => day ? (
                  <TouchableOpacity
                    key={j}
                    style={[
                      styles.dayButton,
                      isDaySelected(day) && styles.selectedDay
                    ]}
                    onPress={() => handleDayPress(day)}
                  >
                    <Text style={styles.dayText}>{day}</Text>
                  </TouchableOpacity>
                ) : <View key={j} style={styles.dayButton} />)}
              </View>
            ))}
          </View>

            {/* Серая линия */}
            <View style={styles.divider} />

            {/* Напоминания + переключатель */}
            <View style={styles.reminderHeader}>
              <Text style={styles.sectionTitle}>Напоминания</Text>
              <TouchableOpacity onPress={() => setIsSwitchOn(!isSwitchOn)}>
                {isSwitchOn ? <SwitchOnIcon /> : <SwitchOffIcon />}
              </TouchableOpacity>
            </View>

            {/* Серая линия */}
            <View style={styles.divider} />

            {/* Кнопки действий */}
            <View style={styles.actionButtonsRow}>
              <TouchableOpacity style={styles.buttonOnSettings}>
                <Text style={styles.buttonTextOnSettings}>Добавить</Text>
                <Text style={styles.buttonTextOnSettings}>прогресс</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonOnSettings}>
                <Text style={styles.buttonTextOnSettings}>Изменить</Text>
                <Text style={styles.buttonTextOnSettings}>цель</Text>
              </TouchableOpacity>
            </View>
          </View>

        <TouchableOpacity
          style={styles.ThreeStripedButton}
          onPress={() => navigation.navigate('hobbies')}
        >
          <ArrowToBack />
        </TouchableOpacity>

        <View style={styles.PaintScreenText}>
          <Text style={styles.PaintScreenTextFonts}>рисование</Text>
        </View>
      </View>
    </View>
  );
}

function CommunityDetailsScreen({ navigation }: CommunityDetailsScreenProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribePress = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.UpperPanel}>
        <BackGroundGradientOrange />
      </View>

      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity 
          style={styles.ThreeStripedButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowToBack />
        </TouchableOpacity>

        {/* Аватар сообщества */}
        <View style={styles.communityAvatarContainer}>
          <View style={styles.orangeCirclePlace}>
            <OrangeCircleIcon />
            <View style={styles.cameraIconPlace}>
              <CameraIcon />
            </View>
          </View>
          <Text style={styles.communityName}>PhotoLUV</Text>
          <Text style={styles.subscribersCount}>1.234 подписчика</Text>
        </View>

        {/* Описание сообщества */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Описание</Text>
          <Text style={styles.descriptionText}>
            Добро пожаловать в уголок визуальной магии! Здесь каждый кадр — история, каждое фото...
          </Text>
        </View>

        {/* Кнопки */}
        <View style={styles.buttonsContainers}>
          <TouchableOpacity 
            style={[
              styles.subscribeButton,
              isSubscribed && styles.subscribedButton
            ]}
            onPress={handleSubscribePress}
          >
            <Text style={[
              styles.subscribeButtonText,
              isSubscribed && styles.subscribedButtonText
            ]}>
              {isSubscribed ? 'Отписаться' : 'Подписаться'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.newPostButton,
              isSubscribed && styles.activeNewPostButton
            ]}
          >
            <Text style={[
              styles.newPostButtonText,
              isSubscribed && styles.activeNewPostButtonText
            ]}>
              Новый пост
            </Text>
          </TouchableOpacity>
        </View>

        {/* Разделительная линия */}
        <View style={styles.dividerLine} />

        {/* Поле поиска */}
        <View style={styles.communitySearchContainer}>
          <View style={styles.communitySearchBackground}>
            <View style={styles.communitySearchIcon}>
              <SearchIcon />
            </View>
            <TextInput
              style={styles.communitySearchInput}
              placeholder="Поиск"
              placeholderTextColor="#62281B"
              editable={false}
            />
          </View>
        </View>

        {/* Количество публикаций */}
        <Text style={styles.postsCount}>54 публикации</Text>

        {/* Пост */}
        <View style={styles.postContainers}>
          <View style={styles.postHeader}>
            <View style={styles.postAuthorButton}>
              <OrangeCircleIcon />
              <View style={styles.postCameraIconContainer}>
                <CameraIcon />
              </View>
            </View>
            
            <View style={styles.postAuthorInfo}>
              <Text style={styles.postAuthorName}>PhotoLUV</Text>
              <Text style={styles.postTime}>19 мин.</Text>
            </View>
          </View>
          
          <Text style={styles.postText}>Поймал удачный кадр на закате!</Text>
          
          <Image 
            source={require('./assets/pictures/image.png')} 
            style={styles.postImage} 
          />
          
          <View style={styles.postActions}>
            <View style={styles.likeContainer}>
              <LikePressedIcon />
              <Text style={styles.actionCount}>42</Text>
            </View>
            
            <View style={styles.commentContainer}>
              <ComentIcon />
              <Text style={styles.actionCount}>0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}