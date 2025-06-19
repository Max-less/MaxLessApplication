import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AddNewPictureIcon from '../../assets/icons/AddNewPictureIcon';
import { styles } from './styles';
import { RegistrationSuccessScreenNavigationProp } from '../../types';

const RegistrationSuccessScreen = () => {
  const navigation = useNavigation<RegistrationSuccessScreenNavigationProp>();
  const route = useRoute();
  const email = (route.params && (route.params as any).email) || '';
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Выбор аватара
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };

  // Проверка уникальности никнейма
  const checkNickname = async () => {
    const response = await fetch('http://192.168.56.1:8000/auth/check-nickname', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nickname })
    });
    if (response.ok) {
      const data = await response.json();
      return data.available;
    }
    return false;
  };

  // Отправка данных на backend
  const handleFinalize = async () => {
    if (!nickname) {
      Alert.alert('Ошибка', 'Введите никнейм');
      return;
    }
    setLoading(true);
    try {
      // Проверка уникальности никнейма
      const isFree = await checkNickname();
      if (!isFree) {
        Alert.alert('Ошибка', 'Никнейм уже занят');
        setLoading(false);
        return;
      }
      let avatar_url = avatar;
      const response = await fetch('http://192.168.56.1:8000/auth/finalize-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nickname, avatar_url })
      });
      if (response.ok) {
        navigation.navigate('Hobbies');
      } else {
        const error = await response.json();
        let message = error.detail;
        if (Array.isArray(message)) {
          message = message.map((e: any) => e.msg).join('\n');
        }
        Alert.alert('Ошибка', message || 'Ошибка завершения регистрации');
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
          {/* Круг для аватара с иконкой добавления */}
          <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
            {avatar ? (
              <Image source={{ uri: avatar }} style={{ width: 120, height: 120, borderRadius: 60 }} />
            ) : (
              <AddNewPictureIcon />
            )}
          </TouchableOpacity>
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
              value={nickname}
              onChangeText={setNickname}
            />
          </View>
          {/* Кнопка продолжения */}
          <TouchableOpacity
            style={styles.mainButton}
            onPress={handleFinalize}
            disabled={loading}
          >
            <Text style={styles.mainButtonText}>{loading ? 'Сохраняем...' : 'Давайте начнём!'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationSuccessScreen;