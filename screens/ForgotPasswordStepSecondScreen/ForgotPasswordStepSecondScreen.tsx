import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Pressable } from 'react-native';


import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { ForgotPasswordStepSecondNavigationProp } from '../../types';



const ForgotPasswordStepSecondScreen = () => {

  const navigation = useNavigation<ForgotPasswordStepSecondNavigationProp>();

  const [showModal, setShowModal] = useState(false);

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
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>
              Подтверди пароль
            </Text>
            <TextInput
              style={styles.input}
            />
          </View>





          {/* Кнопка регистрации */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => setShowModal(true)}
          >
            <Text style={styles.mainButtonText}>Подтвердить</Text>
          </TouchableOpacity>

          {/* Кнопка возврата */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Вернуться</Text>
          </TouchableOpacity>

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