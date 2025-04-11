import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Input } from './shared/input/Input';
import { Button } from './shared/button/button';
import { useFonts } from './fonts';

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover"
      imageStyle={styles.backgroundImage} // Добавляем отдельные стили для изображения
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
            <View style={styles.button2}> 
              <Button text='Регистрация' textStyle={styles.buttonText2}/>
            </View>
          </View>
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
  backgroundImage: {
    transform: [{ scale: 1.08 }], // Оптимальное значение
    margin: -15,
  },
  content: {
    alignItems: 'center',
    gap: 50,
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
  background: {
    flex: 1,
    justifyContent: 'center',
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
    textShadowColor: 'rgba(255, 255, 255, 0.75)', // Цвет обводки
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    transform: [{ scaleX: 1.15 }],
  },
  buttonText2: {
    color: "black",
    fontFamily: 'IgraSans',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Цвет обводки
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    transform: [{ scaleX: 1.05 }],
  },
  buttonstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
});