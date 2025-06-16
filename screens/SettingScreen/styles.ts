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
    marginTop: -25,
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
  }
});