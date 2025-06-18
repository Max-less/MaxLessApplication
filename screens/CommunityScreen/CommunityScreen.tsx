import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';


import BackGroundGradientOrange from '../../assets/icons/BackGroundGradientOrange';
import ActiveCommunityIcon from '../../assets/icons/ActiveCommunityIcon';
import ActiveBackToMainIcon from '../../assets/icons/ActiveBackToMainIcon';
import OrangeCircleIcon from '../../assets/icons/OrangeCircleIcon';
import CameraIcon from '../../assets/icons/CameraIcon';
import LikePressedIcon from '../../assets/icons/LikePressedIcon';
import LikeUnPressedIcon from '../../assets/icons/LikeUnPressedIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import ComentIcon from '../../assets/icons/ComentIcon';
import CreateNewSocietyIcon from '../../assets/icons/CreateNewSocietyIcon';
import LowerPanel from '../../assets/icons/LowerPanelIcon';
import BackToMainIcon from "../../assets/icons/BackToMainIcon";
import MainScreenLogo from '../../assets/icons/MainScreenLogo';


import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { CommunityScreenNavigationProp } from '../../types';



const CommunityScreen = () => {
    const [activeTab, setActiveTab] = useState<'feed' | 'subscriptions'>('subscriptions');
    const [feedSearch, setFeedSearch] = useState('');
    const [subscriptionsSearch, setSubscriptionsSearch] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleTabChange = (tab: 'feed' | 'subscriptions') => {
        setActiveTab(tab);
    };

    const navigation = useNavigation<CommunityScreenNavigationProp>();

    const handleCommunityPress = () => {
        navigation.navigate('CommunityDetails');
    };

    const handleLikePress = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };
    
    return (
        <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
            <View style={styles.UpperPanel}>
                <BackGroundGradientOrange />
            </View>

            {/* Кнопки переключения между вкладками */}
            <View style={styles.communityTabsContainer}>
                <TouchableOpacity
                    style={[
                        styles.communityTabButton,
                        activeTab === 'feed' && styles.communityActiveTabBackground
                    ]}
                    onPress={() => handleTabChange('feed')}
                >
                    <Text style={[
                        styles.communityTabText,
                        activeTab === 'feed' && styles.communityActiveTabText
                    ]}>
                        Общая лента
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.communityTabButton,
                        activeTab === 'subscriptions' && styles.communityActiveTabBackground
                    ]}
                    onPress={() => handleTabChange('subscriptions')}
                >
                    <Text style={[
                        styles.communityTabText,
                        activeTab === 'subscriptions' && styles.communityActiveTabText
                    ]}>
                        Подписки
                    </Text>
                </TouchableOpacity>
            </View>

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
                        value={activeTab === 'feed' ? feedSearch : subscriptionsSearch}
                        onChangeText={(text) => {
                            if (activeTab === 'feed') {
                                setFeedSearch(text);
                            } else {
                                setSubscriptionsSearch(text);
                            }
                        }}
                        numberOfLines={1}
                    />
                </View>
            </View>

            {/* Контент для вкладки "Сообщетва" */}
            {activeTab === 'feed' && (
                <View style={styles.feedContent}>
                    <Text style={styles.subscriptionsTitle}>Подписки</Text>

                </View>
            )}

            {activeTab === 'subscriptions' && (
                <View style={styles.subscriptionsContent}>

                    <Text style={styles.communitiesTitle}>Мои сообщества</Text>

                    <View style={styles.communityCreateCard}>
                        <View style={styles.orangeCircleContainer}>
                            <TouchableOpacity
                                style={styles.orangeCircleWrapper}
                                onPress={handleCommunityPress}
                            >
                                <OrangeCircleIcon />
                                <View style={styles.cameraIconContainer}>
                                    <CameraIcon />
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.cameraButtonText}>PhotoLUV</Text>
                        </View>

                        {/* Группа кнопок справа */}
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.createSocietyButton}>
                                <View style={styles.createSocietyContainer}>
                                    <CreateNewSocietyIcon />
                                    <Text style={styles.createSocietyText}>Создать</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* Новый прямоугольник с контентом */}
                    <View style={styles.postContainer}>
                        <View style={styles.postHeader}>

                            <TouchableOpacity onPress={handleCommunityPress}>
                                <View style={styles.postAuthorButton}>
                                    <OrangeCircleIcon />
                                    <View style={styles.postCameraIconContainer}>
                                        <CameraIcon />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.postAuthorInfo}>
                                <TouchableOpacity onPress={handleCommunityPress}>
                                    <Text style={styles.postAuthorName}>PhotoLUV</Text>
                                </TouchableOpacity>
                                <Text style={styles.postTime}>19 мин.</Text>
                            </View>
                        </View>

                        {/* Текст поста */}
                        <Text style={styles.postText}>Поймал удачный кадр на закате!</Text>

                        {/* Изображение поста */}
                        <Image
                            source={require('../../assets/pictures/image.png')}
                            style={styles.postImage}
                        />

                        {/* Лайки и комментарии */}
                        <View style={styles.postActions}>
                            <TouchableOpacity
                                style={styles.likeButton}
                                onPress={handleLikePress}
                            >
                                {isLiked ? <LikePressedIcon /> : <LikeUnPressedIcon />}
                                <Text style={styles.actionCount}>{likeCount}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.commentButton}

                            >
                                <ComentIcon />
                                <Text style={styles.actionCount}>0</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            )}

            <View style={styles.container}>
                <View style={styles.LowerPanel}>
                    <LowerPanel />
                </View>

                <TouchableOpacity
                    style={styles.MainScreenLogo}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <MainScreenLogo />
                </TouchableOpacity>

                <View style={styles.BackToMainButtonWrapper}>
                    <TouchableOpacity
                        style={styles.BackToMainButton}
                        onPress={() => navigation.goBack()}
                    >
                        {navigation.getState()?.routes[navigation.getState().index]?.name === 'Hobbies'
                            ? <ActiveBackToMainIcon />
                            : <BackToMainIcon />
                        }
                    </TouchableOpacity>
                    <Text style={[
                        styles.BackToMainButtonText,
                        navigation.getState()?.routes[navigation.getState().index]?.name === 'Hobbies' && styles.activeOpacityText
                    ]}>Главная</Text>
                </View>

                <View style={styles.CommunityButtonWrapper}>
                    <TouchableOpacity
                        style={styles.CommunityButton}
                        onPress={() => { }}
                    >
                        <ActiveCommunityIcon />
                    </TouchableOpacity>
                    <Text style={[
                        styles.communityButtonText,
                        navigation.getState()?.routes[navigation.getState().index]?.name === 'Community' && styles.activeOpacityText
                    ]}>Сообщество</Text>
                </View>

            </View>
        </View>
    );
}

export default CommunityScreen;