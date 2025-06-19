import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { Input } from '../../shared/input/Input';


import { styles } from './styles';
import { useFonts } from '../../fonts';

import { useNavigation } from '@react-navigation/native';

import { MainScreenNavigationProp } from '../../types';


const MainScreen = () => {
    const navigation = useNavigation<MainScreenNavigationProp>();

    const fontsLoaded = useFonts();

    // --- Новое: состояние для email и пароля ---
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const goToHobbies = () => {
        navigation.navigate('Hobbies');
    };

    const goToRegistration = () => {
        navigation.navigate('Registration');
    };

    // --- Новое: функция логина ---
    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://192.168.56.1:8000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            if (response.ok) {
                const data = await response.json();
                // Можно сохранить токен: data.access_token
                goToHobbies();
            } else {
                const error = await response.json();
                let message = error.detail;
                if (Array.isArray(message)) {
                    message = message.map(e => e.msg).join('\\n');
                }
                Alert.alert('Ошибка', message || 'Ошибка авторизации');
            }
        } catch (e) {
            Alert.alert('Ошибка', 'Не удалось подключиться к серверу');
        } finally {
            setLoading(false);
        }
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
                            value={email}
                            onChangeText={setEmail}
                        />
                        <View style={styles.passwordContainer}>
                            <Input
                                isPassword
                                placeholder="Пароль"
                                placeholderTextColor="#999"
                                value={password}
                                onChangeText={setPassword}
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
                            onPress={handleLogin}
                            disabled={loading}
                        >
                            <Text style={styles.buttonText}>{loading ? 'Вход...' : 'Войти'}</Text>
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