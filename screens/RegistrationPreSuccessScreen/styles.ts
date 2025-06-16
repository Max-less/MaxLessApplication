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
        marginTop: -290,
    },

    registrationTitle: {
        fontFamily: 'IgraSans',
        fontSize: 36,
        color: '#62281B',
        alignSelf: 'center',
        marginBottom: 62,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },

    successText: {
        fontFamily: 'IgraSans',
        fontSize: 36,
        color: '#62281B',
        alignSelf: 'center',
        marginBottom: 62,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
        marginTop: -70
    },

    emailConfirmationText: {
        fontFamily: 'IgraSans',
        fontSize: 20,
        textAlign: 'left',
        color: '#62281B',
        marginTop: 0,
    },
    resendRow: {
        flexDirection: 'row',
    },

    resendText: {
        color: '#F47530',
        fontFamily: 'IgraSans',
        fontSize: 20,
    },

    BeforeResendText: {
        fontFamily: 'IgraSans',
        fontSize: 20,
        color: '#62281B',
        marginLeft: -7
    },

    pressedButton: {
        opacity: 0.7,
        transform: [{ scale: 0.95 }],
    },

});