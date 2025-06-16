import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'center',
    },

    UpperPanel: {
        position: 'absolute',
        top: '0%',
        width: '100%',
        left: '2%',
        transform: [{ scaleX: 1.06 }],
    },

    communityTabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55,
        marginBottom: 15,
        paddingHorizontal: 16,
        width: '100%',
    },

    communityTabButton: {
        width: 190,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 0,
    },

    communityActiveTabBackground: {
        backgroundColor: '#FEE5CE',
        width: 190,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    communityTabText: {
        fontSize: 20,
        color: '#62281B',
        fontFamily: 'IgraSans',
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 10,
        includeFontPadding: false,
        textAlignVertical: 'center',
        marginTop: 7,
    },

    communityActiveTabText: {
        fontSize: 20,
        color: '#62281B',
        fontFamily: 'IgraSans',
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 10,
        includeFontPadding: false,
        textAlignVertical: 'center',
        opacity: 1,
        marginTop: 7,
    },

    communitySearchContainer: {
        marginLeft: 16,
        paddingRight: 16,
        marginBottom: -10,
        alignSelf: 'flex-start',
    },

    communitySearchBackground: {
        width: 370,
        height: 45,
        backgroundColor: '#FEE5CE',
        opacity: 0.5,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    communitySearchIcon: {
        marginRight: 12,
    },

    communitySearchInput: {
        flex: 1,
        color: '#62281B',
        fontFamily: 'IdealistSans',
        fontSize: 18,
        paddingLeft: 8,
        paddingTop: 3,
        paddingBottom: 0,
        margin: 0,
        includeFontPadding: false,
        overflow: 'hidden',
    },

    feedContent: {
        flex: 1,
        paddingHorizontal: 16,
    },

    subscriptionsTitle: {
        fontFamily: 'IgraSans',
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center',
        color: '#62281B',
        marginTop: 20,
    },

    subscriptionsContent: {
        flex: 1,
        paddingHorizontal: 16,
    },

    communitiesTitle: {
        fontFamily: 'IgraSans',
        fontWeight: '400',
        fontSize: 20,
        color: '#62281B',
        marginTop: 12,
        marginBottom: -6,
        marginLeft: 17,
    },

    communityCreateCard: {
        width: 370,
        height: 100,
        backgroundColor: '#FEE5CE',
        borderRadius: 25,
        marginLeft: -1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    orangeCircleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    orangeCircleWrapper: {
        position: 'relative',
        width: 60,
        height: 60,
        marginLeft: -4,
    },

    cameraIconContainer: {
        position: 'absolute',
        top: '5%',
        left: '12%',
    },

    cameraButtonText: {
        fontFamily: 'IdealistSans',
        fontSize: 12,
        color: '#62281B',
        marginTop: 5,
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    createSocietyButton: {
        marginLeft: 12,
    },

    createSocietyContainer: {
        alignItems: 'center',
    },

    createSocietyText: {
        fontFamily: 'IdealistSans',
        fontSize: 12,
        color: '#62281B',
        marginTop: 5,
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },

    postContainer: {
        width: 370,
        borderRadius: 25,
        backgroundColor: '#FEE5CE',
        marginTop: 9,
        padding: 16,
    },

    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    postAuthorButton: {
        position: 'relative',
        width: 40,
        height: 40,
        marginRight: 10,
        marginTop: -20,
    },

    postCameraIconContainer: {
        position: 'absolute',
        top: '7%',
        left: '20%',
    },

    postAuthorInfo: {
        flexDirection: 'column',
        marginLeft: 20,
    },

    postAuthorName: {
        fontFamily: 'IgraSans',
        fontSize: 20,
        color: '#62281B',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },

    postTime: {
        fontFamily: 'IdealistSans',
        fontSize: 18,
        color: '#62281B',
        opacity: 0.5,
    },

    postText: {
        fontFamily: 'IdealistSans',
        fontSize: 18,
        color: '#62281B',
        marginBottom: 12,
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1,
    },

    postImage: {
        width: 370,
        height: 300,
        marginLeft: -16,
        marginBottom: 12,
    },

    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    actionCount: {
        fontFamily: 'IdealistSans',
        fontSize: 14,
        color: '#62281B',
        marginLeft: 5,
    },

    commentButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        padding: 35,
        justifyContent: 'center',
        marginTop: -25,
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

    activeOpacityText: {
        opacity: 1,
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
    }

});