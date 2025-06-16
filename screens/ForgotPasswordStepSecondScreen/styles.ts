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
        marginTop: -250,
    },

    content: {
        alignItems: 'center',
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

    inputWrapper: {
        marginBottom: 12,
    },

    label: {
        fontFamily: 'IgraSans',
        fontSize: 14,
        color: '#62281B',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginBottom: 8,
        opacity: 0.7
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
        marginTop: 55,
    },

    mainButtonText: {
        color: '#FFFFFF',
        fontFamily: 'IgraSans',
        fontSize: 22,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },

    modalOverlay: {
        position: 'absolute',
        top: 225,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    newHobbyModal: {
        position: 'relative',
        width: '80%',
        backgroundColor: '#FEE5CE',
        borderRadius: 20,
        padding: 20,
        paddingTop: 26,
        alignItems: 'center',
    },

    modalHeader: {
        marginBottom: 18,
        alignItems: 'center',
    },

    modalTitle: {
        fontSize: 24,
        color: '#62281B',
        fontFamily: 'IgraSans',
        textAlign: 'center',
    },

    modalMiddle: {
        marginBottom: 18,
        alignItems: 'center',
    },

    modalMiddleText: {
        fontSize: 20,
        color: '#62281B',
        fontFamily: 'IgraSans',
        textAlign: 'center',
    },



    confirmButton: {
        backgroundColor: '#F47530',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 40,
        alignItems: 'center',
    },

    confirmButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'IgraSans',
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },
    
});