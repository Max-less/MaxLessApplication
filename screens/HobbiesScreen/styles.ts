import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    activeOpacityText: {
        opacity: 1,
    },

    background: {
        flex: 1,
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        padding: 35,
        justifyContent: 'center',
        marginTop: -5,
    },

    UpperPanel: {
        position: 'absolute',
        top: '0%',
        width: '100%',
        left: '2%',
        transform: [{ scaleX: 1.06 }],
    },

    LogoOnMainScreen: {
        position: 'absolute',
        top: 40,
        left: '45%',
    },

    MainScreenText: {
        position: 'absolute',
        top: 50,
        left: '40%',
    },

    MainScreenTextFonts: {
        fontSize: 45,
        letterSpacing: 10,
        color: '#FFFFFF',
    },

    LowerPanel: {
        position: 'absolute',
        bottom: '0%',
        zIndex: 1,
        width: '100%',
        left: '2%',
        transform: [{ scaleX: 1.06 }],
    },

    MainScreenLogo: {
        position: 'absolute',
        bottom: 20,
        left: '50%',
        zIndex: 1,
    },

    BackToMainButtonWrapper: {
        position: 'absolute',
        bottom: 20,
        right: 40,
        alignItems: 'center',
        zIndex: 1,
    },

    BackToMainButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    BackToMainButtonText: {
        fontFamily: 'IgraSans',
        fontSize: 11,
        color: '#62281B',
        opacity: 0.4,
        marginTop: 5,
    },

    CommunityButtonWrapper: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        alignItems: 'center',
        zIndex: 1,
    },

    CommunityButton: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 5,
    },

    communityButtonText: {
        fontFamily: 'IgraSans',
        fontSize: 11,
        color: '#62281B',
        opacity: 0.4,
    },

    CreateNewHobby: {
        position: 'absolute',
        bottom: 120,
        right: 10,
        zIndex: 1,
    },

    ThreeStripedButton: {
        position: 'absolute',
        top: 70,
        left: 31,
        zIndex: 1,
    },

    BellButton: {
        position: 'absolute',
        top: 70,
        right: 30,
        zIndex: 1,
    },

    title: {
        fontSize: 36,
        marginTop: '30%',
        marginBottom: '5%',
        textAlign: 'left',
        color: '#62281B',
        fontFamily: 'IgraSans',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },

    leftAligned: {
        textAlign: 'left',
        width: '100%',
        marginLeft: 30,
    },

    scrollViewContent: {
        paddingBottom: height * 0.1,
        width: 340,
    },

    content: {
        alignItems: 'center',
    },

    hobbyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#FEE5CE',
        borderRadius: 15,
        padding: 15,
        width: '100%',
        height: height * 0.12,
    },

    hobbyTextWrapper: {
        flexDirection: 'column',
        marginLeft: 15,
        flex: 1,
    },

    hobbyText: {
        fontFamily: 'IgraSans',
        fontSize: 18,
        color: '#62281B',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },

    hobbyStatus: {
        fontFamily: 'IgraSans',
        fontSize: 16,
        color: '#62281B',
        marginTop: 5,
    },

    arrowRightIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },

    modalOverlay: {
        position: 'absolute',
        top: 0,
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

    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
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

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },

    addPictureIcon: {
        marginRight: 15,
    },

    textInputWrapper: {
        flex: 1,
    },

    textInput: {
        fontSize: 16,
        color: '#333',
        paddingBottom: 5,
    },

    underline: {
        height: 1,
        backgroundColor: '#62281B',
        marginTop: 5,
    },

    remindersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
    },

    remindersText: {
        fontSize: 20,
        color: '#62281B',
        fontFamily: 'IgraSans',
    },

    switchContainer: {
        padding: 10,
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

    notificationsModal: {
        position: 'relative',
        width: 300,
        height: 300,
        backgroundColor: '#FEE5CE',
        borderRadius: 20,
        padding: 20,
        paddingTop: 26,
        alignItems: 'center',
        marginTop: -330,
        marginLeft: 50,
    }
});