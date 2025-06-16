import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Input } from '../../shared/input/Input';


import { styles } from './styles';
import { useFonts } from '../../fonts';

import { useNavigation } from '@react-navigation/native';

import { MainScreenNavigationProp } from '../../types';


const MainScreen = () => {
    const navigation = useNavigation<MainScreenNavigationProp>();

    const fontsLoaded = useFonts();

    const goToHobbies = () => {
        navigation.navigate('Hobbies');
    };

    const goToRegistration = () => {
        navigation.navigate('Registration');
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.background}
            resizeMode="cover"
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                        resizeMode="contain"
                    />
                    <View style={styles.form}>

                        <Input
                            isEmail
                            placeholder="Ваш номер телефона или e-mail"
                            placeholderTextColor="#999"
                        />
                        <View style={styles.passwordContainer}>
                            <Input
                                isPassword
                                placeholder="Пароль"
                                placeholderTextColor="#999"
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('ForgotPasswordStepFirst')
                                }}
                            >
                                <Text style={styles.restoreText}>Забыли пароль?</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.buttonstyle}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goToHobbies}
                        >
                            <Text style={styles.buttonText}>Войти</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button2}
                            onPress={goToRegistration}
                        >
                            <Text style={styles.buttonText2}>Регистрация</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default MainScreen;