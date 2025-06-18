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

    scrollContainer: {
        flex: 1,
        marginTop: -5,
    },

    ThreeStripedButton: {
        position: 'absolute',
        top: 70,
        left: 31,
        zIndex: 1,
    },

    communityAvatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    orangeCirclePlace: {
        marginTop: 100,
        position: 'relative',
        marginLeft: -4,
        transform: [{ scale: 2.0 }],
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#62281B',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cameraIconPlace: {
        position: 'absolute',
        top: '5%',
        left: '1.5%',
    },

    communityName: {
        fontFamily: 'IgraSans',
        fontSize: 32,
        color: '#62281B',
        marginTop: 40,
        letterSpacing: -0.5,
        fontWeight: 'bold',
    },

    subscribersCount: {
        fontSize: 15,
        color: '#62281B',
        fontFamily: 'IdealistSans',
        letterSpacing: -0.5,
        fontWeight: 'bold',
    },

    descriptionContainer: {
        width: 370,
        height: 79,
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 20,
        backgroundColor: '#FEE5CE',
        padding: 15,
    },

    descriptionTitle: {
        color: '#62281B',
        fontFamily: 'IdealistSans',
        fontSize: 13,
        letterSpacing: -0.5,
        opacity: 0.5,
        marginTop: -7,
    },

    descriptionText: {
        color: '#62281B',
        fontWeight: 'bold',
        fontFamily: 'IdealistSans',
        fontSize: 14,
        marginTop: 5,
        width: 350,
        height: 40,
    },

    buttonsContainers: {
        paddingHorizontal: 16,
        marginTop: 20,
    },

    subscribeButton: {
        width: 370,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#F47530',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    subscribedButton: {
        backgroundColor: '#FEE5CE',
        opacity: 0.5,
    },

    subscribeButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'IdealistSans',
        fontSize: 20,
    },

    subscribedButtonText: {
        color: '#F57F40',
        fontWeight: 'bold',
        fontFamily: 'IdealistSans',
    },

    newPostButton: {
        width: 370,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#FEE5CE',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
    },

    activeNewPostButton: {
        backgroundColor: '#FFFFFF',
        opacity: 1,
    },

    newPostButtonText: {
        color: '#62281B',
        fontWeight: 'bold',
        fontFamily: 'IdealistSans',
        fontSize: 20,
        opacity: 0.5,
    },
    
    activeNewPostButtonText: {
        color: '#62281B',
        opacity: 1,
    },

    dividerLine: {
        borderWidth: 1,
        borderColor: '#B0877457',
        marginVertical: 10,
        width: 370,
        marginLeft: 16,
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

    postsCount: {
        color: '#62281B',
        fontFamily: 'IdealistSans',
        fontSize: 13,
        marginLeft: 25,
        opacity: 0.5,
        marginTop: 15,
    },

    postContainers: {
        width: 370,
        borderRadius: 25,
        backgroundColor: '#FEE5CE',
        marginTop: 9,
        padding: 16,
        marginLeft: 15,
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

    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    actionCount: {
        fontFamily: 'IdealistSans',
        fontSize: 14,
        color: '#62281B',
        marginLeft: 5,
    },

    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    }
});