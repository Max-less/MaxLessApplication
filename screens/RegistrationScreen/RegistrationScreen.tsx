import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Pressable, Alert } from 'react-native';

import EyeClosedIcon from "../../assets/icons/EyeClosedIcon";
import EyeOpenedIcon from "../../assets/icons/EyeOpenedIcon";


import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { RegistrationScreenNavigationProp } from '../../types';



const RegistrationScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<RegistrationScreenNavigationProp>();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.56.1:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, password_confirm: passwordConfirm })
      });
      if (response.ok) {
        navigation.navigate('RegistrationPreSuccess', { email });
      } else {
        const error = await response.json();
        let message = error.detail;
        if (Array.isArray(message)) {
          message = message.map(e => e.msg).join('\n');
        }
        Alert.alert('Ошибка', message || 'Ошибка регистрации');
      }
    } catch (e) {
      Alert.alert('Ошибка', 'Не удалось подключиться к серверу');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
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
            <Text style={styles.label}>Ваш e-mail</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          AsyncStorage.clear()

          {/* Пароль с иконкой глаза */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Придумайте пароль</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder=""
                placeholderTextColor="#999"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
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
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
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
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.mainButtonText}>{loading ? 'Регистрация...' : 'Зарегистрироваться'}</Text>
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

export default RegistrationScreen;