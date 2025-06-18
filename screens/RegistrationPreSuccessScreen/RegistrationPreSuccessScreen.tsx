import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { RegistrationPreSuccessScreenNavigationProp } from '../../types';

const RegistrationPreSuccessScreen = () => {
  const [pressed, setPressed] = useState(false);
  const navigation = useNavigation<RegistrationPreSuccessScreenNavigationProp>();

  const handlePress = () => {
    setPressed(true);
    console.log('Повторная отправка письма');
    
    setTimeout(() => setPressed(false), 200);
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
        <View style={{ alignItems: 'center'}}>
          <Text style={styles.registrationTitle}>Регистрация</Text>
          <Text style={styles.successText}>прошла успешно!</Text>
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

        {/* Кнопка возврата */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Вернуться</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
}

export default RegistrationPreSuccessScreen;