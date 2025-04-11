import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Input } from './shared/input/Input';
import { Button } from './shared/button/button';
import { useFonts } from './fonts';
import EyeClosedIcon from "./assets/icons/EyeClosedIcon";
import EyeOpenedIcon from "./assets/icons/EyeOpenedIcon";

export default function App() {
  const fontsLoaded = useFonts();
  const [currentScreen, setCurrentScreen] = React.useState<'login' | 'registration'>('login');

  if (!fontsLoaded) {
    return null;
  }

  if (currentScreen === 'registration') {
    return <RegistrationScreen navigation={{ goBack: () => setCurrentScreen('login') }} />;
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
            <View style={styles.button}>
              <Button text='Войти' textStyle={styles.buttonText}/>
            </View>
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

type RegistrationScreenProps = {
  navigation: {
    goBack: () => void;
  };
};

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

const styles = StyleSheet.create({
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
});