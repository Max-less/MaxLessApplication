import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { useState } from "react";
import EyeClosedIcon from "../../assets/icons/EyeClosedIcon";
import LockGrayIcon from "../../assets/icons/LockGrayIcon";
import LockOrangeIcon from "../../assets/icons/LockOrangeIcon";
import PersonGrayIcon from "../../assets/icons/PersonGrayIcon";
import PersonOrangeIcon from "../../assets/icons/PersonOrangeIcon";
import EyeOpenedIcon from "../../assets/icons/EyeOpenedIcon";

export function Input({ isPassword, isEmail, ...props }: TextInputProps & { isPassword?: boolean; isEmail?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <View style={[styles.container, isFocused && { borderBottomColor: '#FF6F3B' }]}>
            <View style={styles.inputContainer}>
                {isEmail && (
                    <View style={styles.icon}>
                        {isFocused ? <PersonOrangeIcon /> : <PersonGrayIcon />}
                    </View>
                )}
                {isPassword && (
                    <View style={styles.icon}>
                        {isFocused ? <LockOrangeIcon /> : <LockGrayIcon />}
                    </View>
                )}
                
                <TextInput 
                    style={[
                        styles.input, 
                        styles.inputText
                    ]}
                    placeholderTextColor={'gray'}
                    secureTextEntry={isPassword && !isPasswordVisible}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props} 
                />
            </View>
            
            {isPassword && (
                <Pressable 
                    onPress={() => setIsPasswordVisible(state => !state)} 
                    style={styles.eyeIcon}
                >
                    {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 3,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        color: 'black',
        fontSize: 16,
    },
    inputText: {
        fontFamily: 'IgraSans',
    },
    eyeIcon: {
        paddingVertical: 10,
        marginLeft: 10,
    },
});