import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';


import AddNewPictureIcon from '../../assets/icons/AddNewPictureIcon';


import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { RegistrationSuccessScreenNavigationProp } from '../../types';




const RegistrationSuccessScreen = () => {
  const navigation = useNavigation<RegistrationSuccessScreenNavigationProp>();

  const goToSuccess = () => {
    navigation.navigate('RegistrationSuccess')
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

          {/* Круг для аватара с иконкой добавления */}
          <View style={styles.avatarContainer}>
            <AddNewPictureIcon />
          </View>

          <Text style={styles.registrationTitleOnAddPicture}>
            Установите аватар
          </Text>

          {/* Поле для никнейма */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Придумайте никнейм</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#999"
            />
          </View>

          {/* Кнопка продолжения */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={goToSuccess}
          >
            <Text style={styles.mainButtonText}>Давайте начнём!</Text>
          </TouchableOpacity>

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

export default RegistrationSuccessScreen;