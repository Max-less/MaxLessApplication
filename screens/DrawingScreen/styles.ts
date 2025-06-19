import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    activeTabText: {
        color: '#62281B',
    },

    activeGapLine: {
        backgroundColor: '#62281B',
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

    paintOpacityArtContainer: {
        position: 'absolute',
        top: -20,
        left: '10%',
        zIndex: 1,
    },

    whiteRectangleContainer: {
        position: 'absolute',
        zIndex: 1,
        height: '53%',
        left: '10%',
    },

    tabsContainer: {
        position: 'absolute',
        top: '37%',
        width: '100%',
    },

    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    tabButton: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginLeft: -30,
    },

    tabButtonText: {
        fontSize: 18,
        color: '#999999',
        fontFamily: 'IgraSans',
    },

    gapLineContainer: {
        width: 64,
        flexDirection: 'row',
    },

    gapLineLeft: {
        width: '50%',
        height: '100%',
        backgroundColor: '#CCCCCC',
    },

    gapLineRight: {
        width: '50%',
        height: '100%',
        backgroundColor: '#CCCCCC',
    },

    fullUnderline: {
        height: 2,
        backgroundColor: '#CCCCCC',
        marginTop: 5,
    },

    activeUnderline: {
        position: 'absolute',
        height: '100%',
        backgroundColor: '#62281B',
    },

    ThreeStripedButton: {
        position: 'absolute',
        top: 70,
        left: 20,
        zIndex: 1,
    },

    PaintScreenText: {
        position: 'absolute',
        top: 56,
        width: 310,
        alignItems: 'center',
        marginLeft: 63,
        height: 170
    },

    PaintScreenTextFonts: {
        fontSize: 40,
        color: '#62281B',
        fontFamily: 'IgraSans',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },

    CreateNewArtHobby: {
        position: 'absolute',
        bottom: 50,
        right: 10,
        zIndex: 1,
        transform: [{ scale: 0.8 }],
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

    iconsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },

    iconContainer: {
        alignItems: 'center',
        padding: 15,
    },

    iconText: {
        marginTop: 8,
        fontSize: 16,
        color: '#62281B',
        fontFamily: 'IgraSans',
    },

    yourGoal: {
        top: -135,
        left: 20,
    },

    yourGoalText: {
        fontSize: 22,
        color: '#62281B',
        fontFamily: 'IgraSans',
    },
    
    progressTextContainer: {
        marginTop: -130,
        marginBottom: 5,
        marginLeft: 23
    },

    progressText: {
        fontSize: 16,
        color: '#62281B',
    },

    progressBarContainer: {
        height: 20,
        backgroundColor: '#B0877463',
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 15,
        overflow: 'hidden',
    },

    progressBarFill: {
        height: '100%',
        backgroundColor: '#F57F40',
        borderRadius: 10,
        zIndex: 5
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