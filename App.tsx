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

type CommunityScreenProps = {
  navigation: {
    goBack: () => void;
    navigateToProfile: () => void;
    currentScreen: 'hobbies' | 'community';
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
  const [currentScreen, setCurrentScreen] = React.useState<'login' | 'registration' | 'hobbies' | 'registrationSuccess' | 'drawing' | 'community' | 'settings' | 'profile'>('login');
  const [prevScreen, setPrevScreen] = React.useState<'hobbies' | 'community'>('hobbies'); // Инициализируем значением по умолчанию
  const [mainScreen, setMainScreen] = React.useState<'hobbies' | null>(null);

  const navigateTo = (screen: typeof currentScreen, from?: 'hobbies' | 'community') => {
    if (from) {
      setPrevScreen(from);
    }
    setCurrentScreen(screen);
  };
  
  if (!fontsLoaded) {
    return null;
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
              <Text style={styles.restoreText}>Забыли пароль?</Text>
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

function HobbiesScreen({ navigation }: HobbiesScreenProps) {
  const [showNewHobbyModal, setShowNewHobbyModal] = useState(false);
  const [hobbyName, setHobbyName] = useState('');
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  React.useEffect(() => {
    if (navigation.setAsMain) {
      navigation.setAsMain();
    }
  }, []);

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={[styles.container, showNewHobbyModal && { opacity: 0.6 }]}>
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
          style={styles.BellButton}
        >
          <BellIcon />
        </TouchableOpacity>
        
        <Text style={[styles.title, styles.leftAligned]}>Мои хобби</Text>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
              <Text style={styles.modalTitle}>Добавить новое</Text>
              <Text style={styles.modalTitle}>хобби</Text>
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
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Добавить</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <TouchableOpacity 
        style={styles.CreateNewHobby}
        onPress={() => setShowNewHobbyModal(true)}
      >
        <NewHobbyIcon />
      </TouchableOpacity>
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
  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.container}>
        <View style={styles.UpperPanel}>
          <BackGroundGradientOrange />
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

        <Text style={[styles.title, styles.leftAligned]}>Сообщество</Text>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            <Text style={styles.communityText}>Здесь будет контент сообщества</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function DrawingScreen({ navigation }: DrawingScreenProps) {
  const [activeTab, setActiveTab] = useState<'tracking' | 'settings'>('tracking');

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
        >
          <NewHobbyIcon />
        </TouchableOpacity>

      </View>
    </View>
  );
}

function SettingScreen({ navigation }: SettingScreenProps) {
  const [activeTab, setActiveTab] = useState<'tracking' | 'settings'>('settings');
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const firstDayOfMonth = new Date(2025, 3, 1);
  let startOffset = firstDayOfMonth.getDay();
  startOffset = (startOffset + 6) % 7;

  const daysInMonth = 30;
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const allDays = Array(startOffset).fill(null).concat(days);

  const weeks = [];
  for (let i = 0; i < allDays.length; i += 7) {
    const week = allDays.slice(i, i + 7);
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }

  const handleDayPress = (day: number) => {
    console.log('Выбран день:', day);
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
          {/* Календарь */}
          <View style={styles.calendarContainer}>

            <View style={styles.monthHeader}>
              <TouchableOpacity
                // onPress={() => navigation.goBack()}
              >
                <PointerLeft />
              </TouchableOpacity>

              <Text style={styles.monthYearText}>апрель 2025 г.</Text>

              <TouchableOpacity
                // onPress={() => navigation.goBack()}
              >
                <PointerRight />
              </TouchableOpacity>
            </View>

            {/* Дни недели */}
            <View style={styles.weekDaysRow}>
              {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day) => (
                <Text key={day} style={styles.weekDayText}>{day}</Text>
              ))}
            </View>

            {/* Дни месяца */}
            {weeks.map((week, weekIndex) => (
              <View key={weekIndex} style={styles.weekRow}>
                {week.map((day, index) =>
                  day ? (
                    <TouchableOpacity
                      key={index}
                      style={styles.dayButton}
                      onPress={() => handleDayPress(day)}
                    >
                      <Text style={styles.dayText}>{day}</Text>
                    </TouchableOpacity>
                  ) : (
                    <View key={index} style={styles.dayButton} />
                  )
                )}
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
              <Text style={styles.buttonTextOnSettings}>Добавить прогресс</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOnSettings}>
              <Text style={styles.buttonTextOnSettings}>Изменить цель</Text>
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
