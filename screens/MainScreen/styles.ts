import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },

    backgroundImage: {
        transform: [{ scale: 1.08 }],
        margin: -15,
    },

    container: {
        flex: 1,
        padding: 35,
        justifyContent: 'center',
        marginTop: -25,
    },

    content: {
        alignItems: 'center',
    },

    logo: {
        width: 170,
        height: 170,
        transform: [{ scale: 1.5 }],
        marginTop: 90,
        marginBottom: 70,
    },

    form: {
        alignSelf: 'stretch',
        gap: 16,
    },

    passwordContainer: {
        marginBottom: 8,
    },

    restoreText: {
        color: '#FF6F3B',
        textAlign: 'right',
        marginTop: 4,
        fontSize: 14,
        fontFamily: 'IgraSans',
    },

    buttonstyle: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        marginTop: 55,
    },

    button: {
        alignItems: 'center',
        borderWidth: 0.15,
        borderColor: '#000',
        borderRadius: 30,
        width: 210,
        height: 60,
        justifyContent: 'center',
        backgroundColor: '#FF6F3B',
    },

    buttonText: {
        color: "#fff",
        fontFamily: 'IgraSans',
        fontSize: 18,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        transform: [{ scaleX: 1.15 }],
        width: '100%',
        marginLeft: '80%'
    },

    button2: {
        alignItems: 'center',
        borderWidth: 0.15,
        borderColor: 'black',
        borderRadius: 30,
        width: 210,
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    buttonText2: {
        color: "#62281B",
        fontFamily: 'IgraSans',
        fontSize: 16,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
        transform: [{ scaleX: 1.05 }],
        width: '100%',
        marginLeft: '50%'
    }
});