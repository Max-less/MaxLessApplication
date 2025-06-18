import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import BackGroundGradientOrange from '../../assets/icons/BackGroundGradientOrange';
import ArrowToBack from '../../assets/icons/ArrowToBack';
import OrangeCircleIcon from '../../assets/icons/OrangeCircleIcon';
import CameraIcon from '../../assets/icons/CameraIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import LikePressedIcon from '../../assets/icons/LikePressedIcon';
import ComentIcon from '../../assets/icons/ComentIcon';


import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const CommunityDetailsScreen = () => {
  const navigation = useNavigation();

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribePress = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.UpperPanel}>
        <BackGroundGradientOrange />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.ThreeStripedButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowToBack />
        </TouchableOpacity>

        {/* Аватар сообщества */}
        <View style={styles.communityAvatarContainer}>
          <View style={styles.orangeCirclePlace}>
            <OrangeCircleIcon />
            <View style={styles.cameraIconPlace}>
              <CameraIcon />
            </View>
          </View>
          <Text style={styles.communityName}>PhotoLUV</Text>
          <Text style={styles.subscribersCount}>1.234 подписчика</Text>
        </View>

        {/* Описание сообщества */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Описание</Text>
          <Text style={styles.descriptionText}>
            Добро пожаловать в уголок визуальной магии! Здесь каждый кадр — история, каждое фото...
          </Text>
        </View>

        {/* Кнопки */}
        <View style={styles.buttonsContainers}>
          <TouchableOpacity
            style={[
              styles.subscribeButton,
              isSubscribed && styles.subscribedButton
            ]}
            onPress={handleSubscribePress}
          >
            <Text style={[
              styles.subscribeButtonText,
              isSubscribed && styles.subscribedButtonText
            ]}>
              {isSubscribed ? 'Отписаться' : 'Подписаться'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.newPostButton,
              isSubscribed && styles.activeNewPostButton
            ]}
          >
            <Text style={[
              styles.newPostButtonText,
              isSubscribed && styles.activeNewPostButtonText
            ]}>
              Новый пост
            </Text>
          </TouchableOpacity>
        </View>

        {/* Разделительная линия */}
        <View style={styles.dividerLine} />

        {/* Поле поиска */}
        <View style={styles.communitySearchContainer}>
          <View style={styles.communitySearchBackground}>
            <View style={styles.communitySearchIcon}>
              <SearchIcon />
            </View>
            <TextInput
              style={styles.communitySearchInput}
              placeholder="Поиск"
              placeholderTextColor="#62281B"
              editable={false}
            />
          </View>
        </View>

        {/* Количество публикаций */}
        <Text style={styles.postsCount}>54 публикации</Text>

        {/* Пост */}
        <View style={styles.postContainers}>
          <View style={styles.postHeader}>
            <View style={styles.postAuthorButton}>
              <OrangeCircleIcon />
              <View style={styles.postCameraIconContainer}>
                <CameraIcon />
              </View>
            </View>

            <View style={styles.postAuthorInfo}>
              <Text style={styles.postAuthorName}>PhotoLUV</Text>
              <Text style={styles.postTime}>19 мин.</Text>
            </View>
          </View>

          <Text style={styles.postText}>Поймал удачный кадр на закате!</Text>

          <Image
            source={require('../../assets/pictures/image.png')}
            style={styles.postImage}
          />

          <View style={styles.postActions}>
            <View style={styles.likeContainer}>
              <LikePressedIcon />
              <Text style={styles.actionCount}>42</Text>
            </View>

            <View style={styles.commentContainer}>
              <ComentIcon />
              <Text style={styles.actionCount}>0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default CommunityDetailsScreen;