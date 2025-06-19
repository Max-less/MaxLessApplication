import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { ForgotPasswordStepSecondNavigationProp } from '../../types';

const ForgotPasswordStepSecondScreen = () => {
  const navigation = useNavigation<ForgotPasswordStepSecondNavigationProp>();
  const route = useRoute();
  const { email, code } = route.params as { email: string, code: string };
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    setError('');
    if (password !== password2) {
      setError('Пароли не совпадают');
      return;
    }
    if (password.length < 6) {
      setError('Пароль слишком короткий');
      return;
    }
    try {
      const response = await fetch('http://192.168.56.1:8000/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code, new_password: password }),
      });
      if (!response.ok) {
        const data = await response.json();
        let errorMsg = 'Ошибка';
        if (typeof data.detail === 'string') {
          errorMsg = data.detail;
        } else if (Array.isArray(data.detail)) {
          errorMsg = data.detail.map((err: any) => err.msg || JSON.stringify(err)).join(', ');
        } else if (typeof data.detail === 'object' && data.detail !== null) {
          errorMsg = JSON.stringify(data.detail);
        }
        setError(errorMsg);
      } else {
        setShowModal(true);
      }
    } catch (e) {
      setError('Ошибка сети');
    }
  };

  const goToMain = () => {
    navigation.navigate('Main');
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
            Сброс пароля
          </Text>

          {/* Email */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>
              Придумайте новый пароль
            </Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>
              Подтверди пароль
            </Text>
            <TextInput
              style={styles.input}
              value={password2}
              onChangeText={setPassword2}
              secureTextEntry
            />
          </View>

          {/* Кнопка регистрации */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={handleSubmit}
          >
            <Text style={styles.mainButtonText}>Подтвердить</Text>
          </TouchableOpacity>

          {error ? <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{error}</Text> : null}

        </View>

        {showModal && (
          <View style={styles.modalOverlay}>
            <View style={styles.newHobbyModal}>
              
              {/* Заголовок */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Готово!</Text>
              </View>

              <View style={styles.modalMiddle}>
                <Text style={styles.modalMiddleText}>
                  Ваш пароль изменен. {'\n'} 
                  Пожалуйста, войдите в {'\n'} 
                  аккаунт снова.
                </Text>
              </View>

              {/* Кнопка подтверждения */}
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={goToMain}
              >
                <Text style={styles.confirmButtonText}>К странице входа</Text>
              </TouchableOpacity>

            </View>
          </View>
      )}
      </View>
    </ImageBackground>
  );
}

export default ForgotPasswordStepSecondScreen;