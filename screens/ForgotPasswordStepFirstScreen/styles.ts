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
        marginTop: -200,
    },

    content: {
        alignItems: 'center',
    },

    registrationTitle: {
        fontFamily: 'IgraSans',
        fontSize: 36,
        color: '#62281B',
        alignSelf: 'center',
        marginBottom: 57,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },

    inputWrapper: {
        marginBottom: -45,
    },

    label: {
        fontFamily: 'IgraSans',
        fontSize: 20,
        color: '#62281B',
        alignSelf: 'flex-start',
        marginLeft: 14,
        marginBottom: 12,
    },

    input: {
        width: 334,
        height: 55,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#FF6F3B',
        fontFamily: 'IgraSans',
        fontSize: 16,
    },

    mainButton: {
        width: 334,
        height: 55,
        borderRadius: 20,
        backgroundColor: '#FF6F3B',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
    },

    mainButtonText: {
        color: '#FFFFFF',
        fontFamily: 'IgraSans',
        fontSize: 22,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },

    secondaryButton: {
        width: 334,
        height: 55,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FF6F3B',
        marginTop: 15,
    },

    secondaryButtonText: {
        color: '#FF6F3B',
        fontFamily: 'IgraSans',
        fontSize: 20,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    }
});