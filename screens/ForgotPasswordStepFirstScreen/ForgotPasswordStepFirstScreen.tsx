import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { ForgotPasswordStepFirstNavigationProp } from '../../types';



const ForgotPasswordStepFirstScreen = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation<ForgotPasswordStepFirstNavigationProp>();

  const goToSecondStep = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://192.168.56.1:8000/auth/request-password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const data = await response.json();
        let errorMsg = 'Ошибка отправки запроса';
        if (typeof data.detail === 'string') {
          errorMsg = data.detail;
        } else if (Array.isArray(data.detail)) {
          errorMsg = data.detail.map((err: any) => err.msg || JSON.stringify(err)).join(', ');
        } else if (typeof data.detail === 'object' && data.detail !== null) {
          errorMsg = JSON.stringify(data.detail);
        }
        setError(errorMsg);
      } else {
        navigation.navigate('ForgotPasswordStepFirstWithHalf', { email });
      }
    } catch (e) {
      setError('Ошибка сети');
    }
    setLoading(false);
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
              Введите ваш email, который {'\n'} 
              вы указывали при {'\n'} 
              регистрации аккаунта
            </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Кнопка регистрации */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={goToSecondStep}
            disabled={loading}
          >
            <Text style={styles.mainButtonText}>Отправить</Text>
          </TouchableOpacity>

          {error ? <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{error}</Text> : null}

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

export default ForgotPasswordStepFirstScreen;