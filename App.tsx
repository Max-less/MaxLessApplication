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




type RegistrationScreenProps = {
  navigation: {
    goBack: () => void;
  };
};

type HobbiesScreenProps = {
  navigation: {
    goBack: () => void;
  };
};

const { width, height } = Dimensions.get('window');

export default function App() {
  const fontsLoaded = useFonts();
  const [currentScreen, setCurrentScreen] = React.useState<'login' | 'registration' | 'hobbies'>('login');

  if (!fontsLoaded) {
    return null;
  }

  if (currentScreen === 'registration') {
    return <RegistrationScreen navigation={{ goBack: () => setCurrentScreen('login') }} />;
  }

  if (currentScreen === 'hobbies') {
      return <HobbiesScreen navigation={{ goBack: () => setCurrentScreen('login') }} />;
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
          
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Никнейм</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#999"
            />
          </View>
          
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
          
          <View style={styles.separator} />
          
          {/* Кнопка регистрации */}
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>Зарегистрироваться</Text>
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
            
            <TouchableOpacity style={styles.hobbyItem}>
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

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: height * 0.1, // space for lower panel
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
    fontSize: 24,
    color: '#000',
    alignSelf: 'center',
    marginBottom: 40, // titleMargin
  },
  label: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 8, // labelMargin
  },
  inputWrapper: {
    marginBottom: 12, // inputSpacing
  },
  lastInputWrapper: {
    marginBottom: 30, // sectionMargin
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
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 20,
  },
  mainButton: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FF6F3B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  mainButtonText: {
    color: '#FFFFFF',
    fontFamily: 'IgraSans',
    fontSize: 16,
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
  secondaryButtonText: {
    color: '#FF6F3B',
    fontFamily: 'IgraSans',
    fontSize: 16,
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
    marginBottom: 50,
    transform: [{ scale: 1.5 }],
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
    color: "black",
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
    gap: 15
  },
  
  nicknameLabel: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: -10,
  },
  
  // Обновленные стили для существующих кнопок
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
    left: 50,
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
    top: 50, // Размещаем логотип в верхней части экрана
    left: '40%', // Центрируем по горизонтали
  },

  leftAligned: {
    textAlign: 'left', 
    width: '100%',
    marginLeft: 30,
  },

  arrowRightIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,   // Отступ между текстом и иконкой
    marginRight: 10,  // Отступ справа
    marginBottom: 10,  // Отступ снизу
  },

  MainScreenTextFonts: {
    fontSize: 45,
    letterSpacing: 10, 
    color: '#FFFFFF',
  },  

  LogoOnMainScreen: {
    position: 'absolute',
    top: 40, // Размещаем логотип в верхней части экрана
    left: '45%', // Центрируем по горизонтали
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
    fontFamily: 'IgraSans',
    fontSize: 36,
    color: '#62281B',
    marginTop: '30%',
    marginBottom: '5%',
    textAlign: 'left',
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
    flexDirection: 'column',  // Выстраивает элементы в колонку
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