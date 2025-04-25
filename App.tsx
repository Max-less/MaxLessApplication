import React, { useState } from 'react';
import { Animated, ScrollView, View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import { Input } from './shared/input/Input';
import { Button } from './shared/button/button';
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
import UpperPanel from './assets/icons/UpperPanelIcon';
import LowerPanel from './assets/icons/LowerPanelIcon';
import StarIcon from './assets/icons/StarIcon';
import MainScreenLogo from './assets/icons/MainScreenLogo';
import LogoIcon from './assets/icons/LogoIcon';
import ArrowRightIcon from './assets/icons/ArrowRightIcon';
import NewHobbyIcon from './assets/icons/NewHobbyIcon';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import AddNewPictureIcon from './assets/icons/AddNewPictureIcon';
import BackGroundGradientOrange from './assets/icons/BackGroundGradientOrange';
import ArrowToBack from './assets/icons/ArrowToBack';
import PaintOpacityArt from './assets/icons/PaintOpacityArt';
import WhiteRectangle from './assets/icons/WhiteRectangle';


type HobbiesScreenProps = {
  navigation: {
    goBack: () => void;
    navigateToDrawing: () => void;
  };
};

type DrawingScreenProps = {
  navigation: {
    goBack: () => void;
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

const { width, height } = Dimensions.get('window');

export default function App() {
  const fontsLoaded = useFonts();
  const [currentScreen, setCurrentScreen] = React.useState<'login' | 'registration' | 'hobbies' | 'registrationSuccess' | 'drawing'>('login');

  if (!fontsLoaded) {
    return null;
  }

  if (currentScreen === 'drawing') {
    return <DrawingScreen navigation={{ goBack: () => setCurrentScreen('hobbies') }} />;
  }

  if (currentScreen === 'registration') {
    return <RegistrationScreen navigation={{ 
      goBack: () => setCurrentScreen('login'),
      navigateToSuccess: () => setCurrentScreen('registrationSuccess') // Добавляем метод
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
      goBack: () => setCurrentScreen('login'),
      navigateToDrawing: () => setCurrentScreen('drawing')
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
              onPress={() => setCurrentScreen('hobbies')}
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
  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.container}>
        <View style={styles.UpperPanel}>
          <UpperPanel />
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

        <View style={styles.MainScreenLogo}>
          <MainScreenLogo />
        </View>

        <View style={styles.BackToMainButtonWrapper}>
          <TouchableOpacity 
            style={styles.BackToMainButton}
            onPress={() => navigation.goBack()}
          >
            <BackToMainIcon />
          </TouchableOpacity>
          <Text style={styles.BackToMainButtonText}>Назад</Text>
        </View>

        <View style={styles.CommunityButtonWrapper}>
          <TouchableOpacity 
            style={styles.CommunityButton}>
            <CommunityIcon />
          </TouchableOpacity>
          <Text style={styles.communityButtonText}>Сообщество</Text>
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
            
            <TouchableOpacity style={styles.hobbyItem}>
              <StarIcon />
              <View style={styles.hobbyTextWrapper}>
                <Text style={styles.hobbyText}>Попробуйте что-то новое</Text>
                <Text style={styles.hobbyStatus}>А вдруг это твоё?</Text>
              </View>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
  tabsContainer: {
    position: 'absolute',
    top: '110%',
    width: '100%',
  },
  
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  
  fullUnderline: {
    height: 2,
    backgroundColor: '#CCCCCC',
    marginTop: 5,
  },
  
  activeUnderline: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#62281B',
  },
  
  gapLineContainer: {
    width: 64,
    flexDirection: 'row',
  },
  
  gapLineLeft: {
    width: '50%',
    height: '100%',
    backgroundColor: '#CCCCCC',
  },
  
  gapLineRight: {
    width: '50%',
    height: '100%',
    backgroundColor: '#CCCCCC',
  },
  
  activeGapLine: {
    backgroundColor: '#62281B',
  },
  
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginLeft: -30, // добавлено
  },
  
  tabButtonText: {
    fontSize: 18,
    color: '#999999',
    fontFamily: 'IgraSans',
  },
  
  activeTabText: {
    color: '#62281B',
  },

  PaintButtonText: {
    fontSize: 18,
  },

  trackingButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  
  settingsButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  paintOpacityArtContainer: {
    position: 'absolute',
    top: '0%', // Позиционируем по вертикали
    left: '10%', // Занимаем всю ширину
    zIndex: 1, // Чтобы был поверх градиента
  },
  
  whiteRectangleContainer: {
    bottom: '15%',
    zIndex: 1, // Чтобы был поверх градиента
    left: '1%',
  },

  scrollViewContent: {
    paddingBottom: height * 0.1,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    transform: [{ scale: 1.08 }],
    margin: -15,
  },
  content: {
    alignItems: 'center',
  },
  registrationTitle: {
    fontFamily: 'IgraSans',
    fontSize: 36,
    color: '#62281B',
    alignSelf: 'center',
    marginBottom: 62,
    // textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,

  },
  registrationTitleOnAddPicture: {
    fontFamily: 'IgraSans',
    fontSize: 24,
    color: '#62281B',
    alignSelf: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    marginTop: 19,
    marginBottom: 45,

  },
  label: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#62281B',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 8,
  },
  inputWrapper: {
    marginBottom: 12,
  },
  lastInputWrapper: {
    marginBottom: 30,
  },
  input: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FF6F3B',
    fontFamily: 'IgraSans',
    fontSize: 16,
  },
  passwordInputContainer: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FF6F3B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontFamily: 'IgraSans',
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  
  mainButton: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FF6F3B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

  mainButtonText: {
    color: '#FFFFFF',
    fontFamily: 'IgraSans',
    fontSize: 22,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  secondaryButton: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF6F3B',
    marginTop: 15,
  },

  avatarContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 68,
  },

  secondaryButtonText: {
    color: '#FF6F3B',
    fontFamily: 'IgraSans',
    fontSize: 20,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  
  form: {
    alignSelf: 'stretch',
    gap: 16,
  },
  passwordContainer: {
    marginBottom: 8,
  },
  inputText: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#000',
  },
  restoreText: {
    color: '#FF6F3B',
    textAlign: 'right',
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'IgraSans',
  },
  logo: {
    width: 170,
    height: 170,
    transform: [{ scale: 1.5 }],
    marginTop: 90,
    marginBottom: 70,
  },
  
  button: {
    alignItems: 'center',
    borderWidth: 0.15,
    borderColor: '#000',
    borderRadius: 30,
    width: 210,
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#FF6F3B',
  },
  button2: {
    alignItems: 'center',
    borderWidth: 0.15,
    borderColor: 'black',
    borderRadius: 30,
    width: 210,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonText: {
    color: "#fff",
    fontFamily: 'IgraSans',
    fontSize: 18,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    transform: [{ scaleX: 1.15 }],
  },
  buttonText2: {
    color: "#62281B",
    fontFamily: 'IgraSans',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    transform: [{ scaleX: 1.05 }],
  },
  buttonstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 55,
  },
  
  nicknameLabel: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: -10,
  },

  registerButton: {
    backgroundColor: '#FF6F3B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButtonText: {
    color: '#FF6F3B',
    fontFamily: 'IgraSans',
    fontSize: 16,
  },
  registerButtonText: {
    color: "#fff",
    fontFamily: 'IgraSans',
    fontSize: 16,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },

  inputField: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    fontFamily: 'IgraSans',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    bottom: 30,
    right: 50,
    zIndex: 1,
  },

  CreateNewHobby: {
    position: 'absolute',
    bottom: 120,
    right: 10,
    zIndex: 1,
  },

  CreateNewArtHobby: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    zIndex: 1,
    transform: [{ scale: 0.8 }],
  },

  BackToMainButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    alignItems: 'center',  // Центрируем как иконку, так и текст по горизонтали
    zIndex: 1,
  },

  BackToMainButtonText: {
    fontFamily: 'IgraSans',
    fontSize: 11,  // Размер шрифта
    color: '#62281B',  // Цвет текста
    marginTop: 5,   // Отступ сверху для текста (расстояние между иконкой и текстом)
  },

  BackToMainButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  CommunityButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    alignItems: 'center',  // Центрируем как иконку, так и текст по горизонтали
    zIndex: 1,
  },
  
  CommunityButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  communityButtonText: {
    fontFamily: 'IgraSans',
    fontSize: 11,  // Размер шрифта
    color: '#62281B',  // Цвет текста
    marginTop: 5,   // Отступ сверху для текста (расстояние между иконкой и текстом)
    opacity: 0.4,
  },

  ThreeStripedButton: {
    position: 'absolute',
    top: 70,
    left: 31,
    zIndex: 1,
  },
  BellButton: {
    position: 'absolute',
    top: 70,
    right: 50,
    zIndex: 1,
  },

  UpperPanel: {
    position: 'absolute',
    top: '0%',
    width: '100%',
    left: '2%',
    transform: [{ scaleX: 1.06 }],
  },  

  MainScreenText: {
    position: 'absolute',
    top: 50,
    left: '40%',
  },

  PaintScreenText: {
    position: 'absolute',
    top: 51,
    left: 100,
  },

  PaintScreenTextFonts: {
    fontSize: 40,
    color: '#62281B',
    fontFamily: 'IgraSans',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  }, 

  leftAligned: {
    textAlign: 'left', 
    width: '100%',
    marginLeft: 30,
  },

  arrowRightIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  MainScreenTextFonts: {
    fontSize: 45,
    letterSpacing: 10, 
    color: '#FFFFFF',
  },  

  LogoOnMainScreen: {
    position: 'absolute',
    top: 40,
    left: '45%',
  },

  LowerPanel: {
    position: 'absolute',
    bottom: '0%',
    zIndex: 1,
    width: '100%',
    left: '2%',
    transform: [{ scaleX: 1.06 }],
  },

  MainScreenLogo: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    zIndex: 1,
  },
  
  title: {
    fontSize: 36,
    marginTop: '30%',
    marginBottom: '5%',
    textAlign: 'left',
    color: '#62281B',
    fontFamily: 'IgraSans',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  hobbyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FEE5CE',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    height: height * 0.12,
  },
  
  
  hobbyTextWrapper: {
    flexDirection: 'column',
    marginLeft: 15,
    flex: 1,
  },
  
  hobbyText: {
    fontFamily: 'IgraSans',
    fontSize: 18,
    color: '#62281B',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  
  hobbyStatus: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#62281B',
    marginTop: 5,
  },
});