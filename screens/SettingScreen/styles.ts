import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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

  content: {
    alignItems: 'center',
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
    zIndex: 10,
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

  activeTabText: {
    color: '#62281B',
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

  activeGapLine: {
    backgroundColor: '#62281B',
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

  settingsContent: {
    position: 'absolute',
    top: '52%',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    padding: 15,
    paddingBottom: height * 0.1,
  },

  calendarContainer: {
    padding: 15,
    zIndex: 20,
    marginBottom: -10,
    width: '100%',
  },

  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 40,
  },

  monthNavButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  monthYearText: {
    fontSize: 24,
    fontFamily: 'IdealistSans',
    textAlign: 'center',
    marginBottom: 6,
    color: '#62281B',
    flex: 1,
    textShadowColor: '#62281B',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },

  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
  },

  dayButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 30,
    marginVertical: 1,
  },

  selectedDay: {
    backgroundColor: '#FF6F3B',
    borderRadius: 16,
  },

  dayText: {
    fontFamily: 'IdealistSans',
    fontSize: 18,
    color: '#62281B'
  },

  divider: {
    height: 1,
    backgroundColor: '#999',
    marginVertical: 7,
    marginLeft: 18,
    marginRight: 18,
  },

  reminderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
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

  buttonOfDeleteHobby: {
    marginTop: 3,
    marginLeft: 29,
    alignItems: 'center',
    borderWidth: 0.25,
    borderColor: '#000',
    borderRadius: 30,
    width: 323,
    height: 45,
    justifyContent: 'center',
    backgroundColor: '#F43030',
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

  confirmButton: {
    backgroundColor: '#F47530',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 10
  },

  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'IgraSans',
    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
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

  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 30,
  },

  newHobbyModal: {
    position: 'relative',
    width: 321,
    height: 210,
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

  modalHeaderProgress: {
    marginBottom: -10,
    alignItems: 'center',
  },

  modalHeaderGoal: {
    marginBottom: 20,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 24,
    color: '#62281B',
    fontFamily: 'IgraSans',
    textAlign: 'center',
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

  progressContent: {
    width: '100%',
    marginVertical: 15,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  
  numberInput: {
    width: 60,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    textAlign: 'center',
    fontSize: 16,
  },

  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
  },

  progressBarWrapper: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 20,
  },

  progressBar: {
    height: '100%',
    backgroundColor: '#F57F40',
    borderRadius: 5,
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

  selectedDayText: {
    color: '#fff',
  },

  selectedDateContainer: {
    marginTop: -10,
    marginLeft: 22,
  },

  selectedDateText: {
    fontSize: 16,
    color: '#62281B',
    fontFamily: 'IgraSans',
  }
});