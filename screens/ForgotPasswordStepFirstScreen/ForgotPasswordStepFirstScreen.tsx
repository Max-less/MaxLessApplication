import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { ForgotPasswordStepFirstNavigationProp } from '../../types';



const ForgotPasswordStepFirstScreen = () => {

  const goToSecondStep = () => {
    navigation.navigate('ForgotPasswordStepSecond');
  };

  const navigation = useNavigation<ForgotPasswordStepFirstNavigationProp>();

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
            />
          </View>

          

          

          {/* Кнопка регистрации */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={goToSecondStep}
          >
            <Text style={styles.mainButtonText}>Отправить</Text>
          </TouchableOpacity>

          {/* Кнопка возврата */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Вернуться</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  );
}

export default ForgotPasswordStepFirstScreen;