import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },

  profileContainer: {
    flex: 1,
    padding: 30,
    marginTop: -5
  },

  UpperPanel: {
    position: 'absolute',
    top: '0%',
    width: '100%',
    left: '2%',
    transform: [{ scaleX: 1.06 }],
  },

  ThreeStripedButton: {
    position: 'absolute',
    top: 70,
    left: 31,
    zIndex: 1,
  },

  PaintScreenText: {
    position: 'absolute',
    top: 51,
    left: 100,
  },

  PaintScreenTextFonts: {
    fontSize: 40,
    color: '#62281B',
    fontFamily: 'IgraSans',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  avatarContainerOnProfile: {
    alignItems: 'center',
    marginTop: 280,
    marginLeft: 350,
    position: 'relative',
  },

  profileAvatar: {
    width: 240,
    height: 240,
    borderRadius: 60,
    transform: [{ scale: 2.1 }],
  },

  cameraIcon: {
    position: 'absolute',
    height: 200,
    width: 300,
    bottom: '25%'
  },

  nicknameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 400,
    bottom: '30%',
    right: '5%',
  },

  nickname: {
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#62281B',
    fontFamily: 'IgraSans',
  },

  accountDataContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginLeft: 20,
  },

  dataItemContainer: {
    backgroundColor: 'rgba(98, 40, 27, 0.05)',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
    bottom: '190%',
    right: '7%',
    height: 55,
    width: 355,
  },

  dataLabel: {
    color: '#F57F40',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
    minWidth: 100,
  },

  dataValue: {
    fontSize: 16,
    color: '#62281B',
    flex: 1,
    width: 100,
    marginRight: 15,
    marginLeft: 15,
  },

  eyeIcon: {
    padding: 10,
  },

  sectionTitleOnProfile: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: -5,
    marginBottom: 15,
    marginTop: 10,
    color: '#62281B',
    bottom: '33%'
  },

  notificationsContainer: {
    marginHorizontal: 20,
    bottom: '35%',
    right: '5%'
  },

  notificationItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
  },

  notificationText: {
    fontSize: 18,
    flex: 1,
    color: '#62281B'
  },

  switchContainer: {
    padding: 10,
  }
});