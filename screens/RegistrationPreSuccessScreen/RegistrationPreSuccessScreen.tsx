import React, { useState, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { RegistrationPreSuccessScreenNavigationProp } from '../../types';

const RegistrationPreSuccessScreen = () => {
  const [pressed, setPressed] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<RegistrationPreSuccessScreenNavigationProp>();
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const route = useRoute();
  const email = (route.params && (route.params as any).email) || '';

  const handlePress = () => {
    setPressed(true);
    console.log('Повторная отправка письма');

    setTimeout(() => setPressed(false), 200);
  };

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];

    if (text.length === 1) {
      newCode[index] = text;
      setCode(newCode);

      if (index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    } else if (text.length === 0) {
      newCode[index] = '';
      setCode(newCode);

      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    if (code.join('').length !== 6) return;
    setLoading(true);
    try {
      const response = await fetch('http://192.168.56.1:8000/auth/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: code.join('') })
      });
      if (response.ok) {
        navigation.navigate('RegistrationSuccess', { email });
      } else {
        const error = await response.json();
        let message = error.detail;
        if (Array.isArray(message)) {
          message = message.map((e: any) => e.msg).join('\n');
        }
        Alert.alert('Ошибка', message || 'Неверный код');
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
        {/* Заголовок */}
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.registrationTitle}>Почти готово</Text>
        </View>

        <Text style={styles.emailConfirmationText}>
          Пожалуйста, проверьте ваш{'\n'}
          email —{'\n'}
          мы отправили письмо с{'\n'}
          инструкцией{'\n'}
          для подтверждения вашего{'\n'}
          аккаунта. Также проверяйте{'\n'}
          папку "Спам". В случае, если письмо не пришло в течение 10{'\n'}
          <View style={styles.resendRow}>
            <Text style={styles.BeforeResendText}> минут, вы можете </Text>
            <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.7}
              style={pressed ? styles.pressedButton : null}
            >
              <Text style={styles.resendText}>запросить</Text>
            </TouchableOpacity>
          </View>
        </Text>

        <View style={styles.resendRow}>
          <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={pressed ? styles.pressedButton : null}
          >
            <Text style={styles.resendText}>письмо повторно.</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.codeConfirmationText}>
          Введите код ниже:
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginLeft: -10 }}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <TextInput
              key={index}
              ref={(el) => {
                if (inputsRef.current) {
                  inputsRef.current[index] = el;
                }
              }}
              style={{
                width: 50,
                height: 55,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 15,
                borderColor: '#FF6F3B',
                fontFamily: 'IgraSans',
                textAlign: 'center',
                fontSize: 20,
                marginHorizontal: 5,
              }}
              maxLength={1}
              keyboardType="numeric"
              value={code[index]}
              onChangeText={(text) => handleCodeChange(text, index)}
              onSubmitEditing={() => {
                if (index < 5 && inputsRef.current) {
                  inputsRef.current[index + 1]?.focus();
                }
              }}
            />
          ))}
        </View>


        {/* Кнопка регистрации */}
        <TouchableOpacity
          style={styles.mainButton}
          onPress={handleSubmit}
          disabled={code.join('').length !== 6 || loading}
        >
          <Text style={styles.mainButtonText}>{loading ? 'Проверяем...' : 'Подтвердить'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default RegistrationPreSuccessScreen;
