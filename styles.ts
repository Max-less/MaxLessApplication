import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  createSocietyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    left: -15,
    top: 3,
  },
  
  createSocietyText: {
    fontFamily: 'IdealistSans',
    fontSize: 12,
    color: '#62281B',
    marginTop: 5,
  },

  communitiesTitle: {
    fontFamily: 'IgraSans',
    fontWeight: '400',
    fontSize: 20,
    color: '#62281B',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
  },

  communityCreateCard: {
    width: 370,
    height: 100,
    backgroundColor: '#FEE5CE',
    borderRadius: 25,
    marginLeft: 4,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  createSocietyButton: {
    marginLeft: 20,
    padding: 10,
  },

  subscriptionsTitle: {
    fontFamily: 'IgraSans',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: '#62281B',
    marginTop: 20,
  },

  feedContent: {
    flex: 1,
    paddingHorizontal: 16,
  },

  subscriptionsContent: {
    flex: 1,
    paddingHorizontal: 16,
  },

  tabContent: {
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  tabContentText: {
    fontSize: 24,
    color: '#62281B',
    fontFamily: 'IgraSans',
    fontWeight: 'bold',
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
    paddingLeft: 15,
  },

  communitySearchInput: {
    flex: 1,
    color: '#62281B',
    fontFamily: 'IgraSans',
    fontSize: 16,
    paddingLeft: 8,
    paddingTop: 3,
    paddingBottom: 0,
    margin: 0,
    includeFontPadding: false,
    overflow: 'hidden',
  },

  communityTabText: {
    fontSize: 18,
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
    fontSize: 18,
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

  communityTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 15,
    paddingHorizontal: 16,
    width: '100%',
  },

  communityActiveTab: {
    borderBottomWidth: 0,
  },

  communitySearchContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: -10,
    alignSelf: 'flex-start',
  },

  communitiesSection: {
    paddingLeft: 16,
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  communitySearchPlaceholder: {
    color: '#62281B',
    fontFamily: 'IgraSans',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 8,
  },

  communitySearchIcon: {
    marginRight: 10,
  },
  
  communityContentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  
  communitySectionTitle: {
    fontSize: 20,
    color: '#62281B',
    fontFamily: 'IgraSans',
    marginBottom: 15,
    fontWeight: 'bold',
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

  sectionTitleOnProfile: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: -5,
    marginBottom: 15,
    marginTop: 10,
    color: '#62281B',
    bottom: '33%'
  },

  profileContainer: {
    flex: 1,
    padding: 30,
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

  accountData: {
    backgroundColor: '#62281B',
    borderRadius: 15,
    padding: 15,
    bottom: '30%'
  },

  dataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#62281B',
  },

  notifications: {
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 20,
    bottom: '30%',
    right: '10%',
  },

  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
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

  reminderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
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

  settingsContent: {
    position: 'absolute',
    top: '52%',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    padding: 15,
  },
  
  calendarContainer: {
    padding: 15,
    zIndex: 20,
    marginBottom: -10,
  },
  
  dayButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 30,
    marginVertical: 1,
  },

  monthYearText: {
    fontSize: 24,
    fontFamily: 'IdealistSans',
    textAlign: 'center',
    marginBottom: 6,
    color: '#62281B',
    textShadowColor: '#62281B',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,

  },

  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },

  weekDayText: {
    width: 32,
    textAlign: 'center',
    fontFamily: 'IdealistSans',
    fontSize: 18,
    textShadowColor: '#62281B',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    color: '#62281B'
  },

  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },

  dayText: {
    fontFamily: 'IdealistSans',
    fontSize: 18,
    // textShadowColor: '#62281B',
    // textShadowOffset: { width: 0.5, height: 0.5 },
    // textShadowRadius: 1,
    color: '#62281B'
  },

  divider: {
    height: 1,
    backgroundColor: '#999',
    marginVertical: 7,
    marginLeft: 18,
    marginRight: 18,
  },

  sectionTitle: {
    fontFamily: 'IgraSans',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 25,
    textAlign: 'left',
    color: '#62281B',
  },

  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  
  buttonTextOnSettings: {
    color: "#fff",
    fontFamily: 'IgraSans',
    fontSize: 16,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    transform: [{ scaleX: 1.15 }],
  },

  buttonOnSettings: {
    alignItems: 'center',
    borderWidth: 0.15,
    borderColor: '#000',
    borderRadius: 30,
    width: 150,
    height: 45,
    justifyContent: 'center',
    backgroundColor: '#FF6F3B',
  },

  activeOpacityText: {
      opacity: 1,
  },

  communityText: {
      color: '#000',
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      marginTop: 20,
  },
  
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
  
  activeGapLine: {
    backgroundColor: '#62281B',
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
  
  activeTabText: {
    color: '#62281B',
  },

  PaintButtonText: {
    fontSize: 18,
  },

  trackingButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  
  settingsButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  paintOpacityArtContainer: {
    position: 'absolute',
    top: -20,
    left: '10%',
    zIndex: 1,
  },

  scrollViewContent: {
    paddingBottom: height * 0.1,
    width: 340,
  },

  container: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
  },

  background: {
    flex: 1,
    justifyContent: 'center',
  },

  backgroundImage: {
    transform: [{ scale: 1.08 }],
    margin: -15,
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
    // textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

  registrationTitleOnAddPicture: {
    fontFamily: 'IgraSans',
    fontSize: 24,
    color: '#62281B',
    alignSelf: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    marginTop: 19,
    marginBottom: 45,
  },

  label: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#62281B',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 8,
  },

  inputWrapper: {
    marginBottom: 12,
  },

  lastInputWrapper: {
    marginBottom: 30,
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

  passwordInputContainer: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FF6F3B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },

  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontFamily: 'IgraSans',
    fontSize: 16,
  },

  eyeIcon: {
    padding: 10,
  },
  
  mainButton: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FF6F3B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
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

  avatarContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 68,
  },

  secondaryButtonText: {
    color: '#FF6F3B',
    fontFamily: 'IgraSans',
    fontSize: 20,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  
  form: {
    alignSelf: 'stretch',
    gap: 16,
  },

  passwordContainer: {
    marginBottom: 8,
  },

  inputText: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#000',
  },

  restoreText: {
    color: '#FF6F3B',
    textAlign: 'right',
    marginTop: 4,
    fontSize: 14,
    fontFamily: 'IgraSans',
  },

  logo: {
    width: 170,
    height: 170,
    transform: [{ scale: 1.5 }],
    marginTop: 90,
    marginBottom: 70,
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

  buttonText: {
    color: "#fff",
    fontFamily: 'IgraSans',
    fontSize: 18,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    transform: [{ scaleX: 1.15 }],
  },

  buttonText2: {
    color: "#62281B",
    fontFamily: 'IgraSans',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    transform: [{ scaleX: 1.05 }],
  },

  buttonstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 55,
  },
  
  nicknameLabel: {
    fontFamily: 'IgraSans',
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: -10,
  },

  registerButton: {
    backgroundColor: '#FF6F3B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButtonText: {
    color: '#FF6F3B',
    fontFamily: 'IgraSans',
    fontSize: 16,
  },

  registerButtonText: {
    color: "#fff",
    fontFamily: 'IgraSans',
    fontSize: 16,
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },

  inputField: {
    width: 334,
    height: 55,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    fontFamily: 'IgraSans',
    fontSize: 16,
  },

  backButton: {
    position: 'absolute',
    bottom: 30,
    right: 50,
    zIndex: 1,
  },

  CreateNewHobby: {
    position: 'absolute',
    bottom: 120,
    right: 10,
    zIndex: 1,
  },

  CreateNewArtHobby: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    zIndex: 1,
    transform: [{ scale: 0.8 }],
  },

  BackToMainButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    alignItems: 'center',
    zIndex: 1,
  },

  BackToMainButtonText: {
    fontFamily: 'IgraSans',
    fontSize: 11,
    color: '#62281B',
    opacity: 0.4,
    marginTop: 5,
  },

  BackToMainButton: {
    justifyContent: 'center',
    alignItems: 'center',
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

  UpperPanel: {
    position: 'absolute',
    top: '0%',
    width: '100%',
    left: '2%',
    transform: [{ scaleX: 1.06 }],
  },  

  MainScreenText: {
    position: 'absolute',
    top: 50,
    left: '40%',
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

  leftAligned: {
    textAlign: 'left', 
    width: '100%',
    marginLeft: 30,
  },

  arrowRightIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

  MainScreenTextFonts: {
    fontSize: 45,
    letterSpacing: 10, 
    color: '#FFFFFF',
  },  

  LogoOnMainScreen: {
    position: 'absolute',
    top: 40,
    left: '45%',
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
});