import React, { useState, useRef } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { ForgotPasswordStepFirstNavigationProp } from '../../types';

const ForgotPasswordStepFirstWithHalfScreen = () => {
  const [pressed, setPressed] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const navigation = useNavigation<ForgotPasswordStepFirstNavigationProp>();
  const route = useRoute();
  const { email } = route.params as { email: string };
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const goToSecondStep = async () => {
    setError('');
    const codeStr = code.join('');
    if (codeStr.length !== 6) {
      setError('Введите 6-значный код');
      return;
    }
    try {
      const response = await fetch('http://192.168.56.1:8000/auth/verify-reset-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: codeStr }),
      });
      if (!response.ok) {
        const data = await response.json();
        let errorMsg = 'Неверный код';
        if (typeof data.detail === 'string') {
          errorMsg = data.detail;
        } else if (Array.isArray(data.detail)) {
          errorMsg = data.detail.map((err: any) => err.msg || JSON.stringify(err)).join(', ');
        } else if (typeof data.detail === 'object' && data.detail !== null) {
          errorMsg = JSON.stringify(data.detail);
        }
        setError(errorMsg);
      } else {
        navigation.navigate('ForgotPasswordStepSecond', { email, code: codeStr } as any);
      }
    } catch (e) {
      setError('Ошибка сети');
    }
  };

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
          <Text style={styles.registrationTitle}>Сброс пароля</Text>
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
          onPress={goToSecondStep}
        >
          <Text style={styles.mainButtonText}>Подтвердить</Text>
        </TouchableOpacity>

        {error ? <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{error}</Text> : null}
      </View>
    </ImageBackground>
  );
}

export default ForgotPasswordStepFirstWithHalfScreen;