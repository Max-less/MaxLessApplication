import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import BackGroundGradientOrange from '../../assets/icons/BackGroundGradientOrange';
import WhiteRectangle from '../../assets/icons/WhiteRectangle';
import PointerRight from '../../assets/icons/PointerRight';
import PointerLeft from '../../assets/icons/PointerLeft';
import SwitchOffIcon from '../../assets/icons/SwitchOffIcon';
import SwitchOnIcon from '../../assets/icons/SwitchOnIcon';
import ArrowToBack from '../../assets/icons/ArrowToBack';
import CloseCreatingHobbyIcon from "../../assets/icons/CloseCreatingHobbyIcon";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { styles } from './styles';

import { RootStackParamList, SettingsScreenNavigationProp } from '../../types';


const SettingScreen = () => {
  interface Hobby {
    name: string;
    imageKey: 'guitar' | 'book' | 'yoga' | 'paint' | 'default';
    status?: string;
    goal?: string;
  }

  interface ProgressData {
    current: number;
    target: number;
  }

  const [progress, setProgress] = useState<ProgressData>({ current: 0, target: 0 });
  const [modalProgress, setModalProgress] = useState({ current: 0, target: 0 });
  const [isTargetLocked, setIsTargetLocked] = useState(false);

  const [activeTab, setActiveTab] = useState<'tracking' | 'settings'>('settings');
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(4);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDates, setSelectedDates] = useState<{[key: string]: number[]}>({});
  const [showChangeGoalModal, setShowChangeGoalModal] = useState(false);
  const [showAddYourProgressModal, setShowAddYourProgressModal] = useState(false);

  

  const route = useRoute<RouteProp<RootStackParamList, 'Settings'>>();
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const [hobbyData, setHobbyData] = useState({
    name: route.params?.hobbyName || 'рисование',
    image: route.params?.hobbyImage || require('../../assets/pictures/PaintArt.png')
  });

  const [goalText, setGoalText] = useState('Скорее добавьте цель');
  const [inputText, setInputText] = useState('');

  const handleChangeGoal = async () => {
    if (inputText.trim()) {
      try {
        const savedGoals = await AsyncStorage.getItem('@hobbyGoals');
        const goals = savedGoals ? JSON.parse(savedGoals) : {};
        goals[params?.hobbyName || ''] = inputText;
        await AsyncStorage.setItem('@hobbyGoals', JSON.stringify(goals));
        
        setGoalText(inputText);
        setInputText('');
        setShowChangeGoalModal(false);
      } catch (e) {
        console.error('Ошибка сохранения цели', e);
      }
    }
  };

  const params = route.params;
  const hobbyName = params?.hobbyName || 'рисование';
  
  React.useEffect(() => {
    if (route.params) {
      setHobbyData({
        name: route.params.hobbyName || 'рисование',
        image: route.params.hobbyImage || require('../../assets/pictures/PaintArt.png')
      });
    }
  }, [route.params]);

  React.useEffect(() => {
    const loadGoal = async () => {
      try {
        const savedGoals = await AsyncStorage.getItem('@hobbyGoals');
        const goals = savedGoals ? JSON.parse(savedGoals) : {};
        const hobbyGoal = goals[params?.hobbyName || ''] || 'Скорее добавьте цель';
        setGoalText(hobbyGoal);
      } catch (e) {
        console.error('Ошибка загрузки цели', e);
      }
    };
    loadGoal();
  }, [params?.hobbyName]);

  React.useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedProgress = await AsyncStorage.getItem('@hobbyProgress');
        if (savedProgress) {
          const progressData = JSON.parse(savedProgress);
          const hobbyProgress = progressData[params?.hobbyName || ''] || { current: 0, target: 0 };
          setProgress(hobbyProgress);
          setIsTargetLocked(hobbyProgress.target > 0);
        }
      } catch (e) {
        console.error('Ошибка загрузки прогресса', e);
      }
    };
    loadProgress();
  }, [params?.hobbyName]);

  React.useEffect(() => {
    const loadSelectedDates = async () => {
      try {
        const savedDates = await AsyncStorage.getItem(`@selectedDates_${hobbyName}`);
        if (savedDates) {
          setSelectedDates(JSON.parse(savedDates));
        }
      } catch (e) {
        console.error('Ошибка загрузки дат', e);
      }
    };
    loadSelectedDates();
  }, [hobbyName]);
  
  React.useEffect(() => {
    const saveSelectedDates = async () => {
      try {
        await AsyncStorage.setItem(
          `@selectedDates_${hobbyName}`,
          JSON.stringify(selectedDates)
        );
      } catch (e) {
        console.error('Ошибка сохранения дат', e);
      }
    };
    saveSelectedDates();
  }, [selectedDates, hobbyName]);

  const handleBackToTracking = () => {
    navigation.navigate('Drawing', { 
      hobbyName: params?.hobbyName,
      hobbyImage: params?.hobbyImage,
      isNew: false
    });
  };

  const defaultImage = require('../../assets/pictures/PaintArt.png');

  const handleAddProgress = async () => {
    const newProgress = {
      current: progress.current + modalProgress.current,
      target: isTargetLocked ? progress.target : modalProgress.target
    };
  
    try {
      const savedProgress = await AsyncStorage.getItem('@hobbyProgress');
      const allProgress = savedProgress ? JSON.parse(savedProgress) : {};
      allProgress[params?.hobbyName || ''] = newProgress;
      await AsyncStorage.setItem('@hobbyProgress', JSON.stringify(allProgress));
  
      setProgress(newProgress);
      setShowAddYourProgressModal(false);
      
      if (navigation.isFocused()) {
        setProgress(prev => ({ ...prev }));
      }
    } catch (e) {
      console.error('Ошибка сохранения прогресса', e);
    }
  };

  const handleDeleteHobby = async () => {
    try {
      const savedHobbies = await AsyncStorage.getItem('@hobbies');
      if (savedHobbies) {
        const hobbies = JSON.parse(savedHobbies);
        const updatedHobbies = hobbies.filter((h: Hobby) => h.name !== params?.hobbyName);
        await AsyncStorage.setItem('@hobbies', JSON.stringify(updatedHobbies));
      }

      await AsyncStorage.multiRemove([
        `@hobbyGoals_${params?.hobbyName}`,
        `@hobbyProgress_${params?.hobbyName}`,
        `@selectedDates_${hobbyName}`
      ]);
  
      navigation.navigate('Hobbies');
    } catch (e) {
      console.error('Ошибка удаления хобби', e);
    }
  };


  const getCalendarData = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const firstDayOfWeek = firstDay.getDay();
    const startOffset = (firstDayOfWeek + 6) % 7;

    const daysInMonth = lastDay.getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const allDays = Array(startOffset).fill(null).concat(days);

    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
      let week = allDays.slice(i, i + 7);
      while (week.length < 7) {
        week.push(null);
      }
      weeks.push(week);
    }

    return weeks;
  };

  const weeks = getCalendarData(currentMonth, currentYear);

  const monthNames = [
    'январь', 'февраль', 'март', 'апрель',
    'май', 'июнь', 'июль', 'август',
    'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ];

  const handlePrevMonth = () => {
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleDayPress = (day: number) => {
    const monthKey = `${currentYear}-${currentMonth}`;
    
    setSelectedDates(prev => {
      const currentMonthDates = prev[monthKey] || [];
      const newDates = currentMonthDates.includes(day)
        ? currentMonthDates.filter(d => d !== day)
        : [...currentMonthDates, day];
      
      const updatedDates = {
        ...prev,
        [monthKey]: newDates
      };
      
      return updatedDates;
    });
  };

  const isDaySelected = (day: number) => {
    const monthKey = `${currentYear}-${currentMonth}`;
    return selectedDates[monthKey]?.includes(day) || false;
  };

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      <View style={styles.container}>
        <View style={styles.UpperPanel}>
          <BackGroundGradientOrange />
        </View>

        <View style={styles.paintOpacityArtContainer}>
          <Image
            source={params?.hobbyImage || defaultImage}
            style={{
              width: 320,
              height: 320,
              opacity: 0.15
            }}
          />
        </View>

        <View style={styles.whiteRectangleContainer}>
          <WhiteRectangle />
          <View style={styles.yourGoal}>
            <Text style={styles.yourGoalText}>{goalText}</Text>
          </View>

          {/* Прогресс текст */}
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>
              {progress.current} из {progress.target || '?'}
            </Text>
          </View>

          {/* Прогресс бар */}
          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBarFill,
                { 
                  width: `${progress.target > 0 
                    ? Math.min(100, (progress.current / progress.target) * 100) 
                    : 0}%` 
                }
              ]}
            />
          </View>

          <View style={styles.tabsContainer}>
            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.tabButton}
                onPress={handleBackToTracking}
              >
                <Text style={[
                  styles.tabButtonText,
                  activeTab === 'tracking' && styles.activeTabText
                ]}>
                  отслеживание
                </Text>
              </TouchableOpacity>

              <View style={styles.gapLineContainer}>
                <View style={[
                  styles.gapLineLeft,
                  activeTab === 'tracking' && styles.activeGapLine
                ]} />
                <View style={[
                  styles.gapLineRight,
                  activeTab === 'settings' && styles.activeGapLine
                ]} />
              </View>

              <TouchableOpacity
                style={styles.tabButton}
                onPress={() => setActiveTab('settings')}
              >
                <Text style={[
                  styles.tabButtonText,
                  activeTab === 'settings' && styles.activeTabText
                ]}>
                  настройки
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.fullUnderline}>
              <View style={[
                styles.activeUnderline,
                activeTab === 'tracking' && { width: '52%', left: '-2%' },
                activeTab === 'settings' && { width: '50%', left: '50%' }
              ]} />
            </View>
          </View>
        </View>
        
        <ScrollView style={styles.settingsContent}>
          <View style={styles.calendarContainer}>
            <View style={styles.monthHeader}>
              <TouchableOpacity style={styles.monthNavButton} onPress={handlePrevMonth}>
                <PointerLeft />
              </TouchableOpacity>

              <Text style={styles.monthYearText}>
                {monthNames[currentMonth]} {currentYear} г.
              </Text>

              <TouchableOpacity style={styles.monthNavButton} onPress={handleNextMonth}>
                <PointerRight />
              </TouchableOpacity>
            </View>

            <View style={styles.weekDaysRow}>
              {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map(day => (
                <Text key={day} style={styles.weekDayText}>{day}</Text>
              ))}
            </View>

            {weeks.map((week, i) => (
              <View key={i} style={styles.weekRow}>
                {week.map((day, j) => day ? (
                  <TouchableOpacity
                    key={j}
                    style={[
                      styles.dayButton,
                      isDaySelected(day) && styles.selectedDay
                    ]}
                    onPress={() => handleDayPress(day)}
                  >
                    <Text style={styles.dayText}>{day}</Text>
                  </TouchableOpacity>
                ) : <View key={j} style={styles.dayButton} />)}
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          {/* Напоминания + переключатель */}
          <View style={styles.reminderHeader}>
            <Text style={styles.sectionTitle}>Напоминания</Text>
            <TouchableOpacity onPress={() => setIsSwitchOn(!isSwitchOn)}>
              {isSwitchOn ? <SwitchOnIcon /> : <SwitchOffIcon />}
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Кнопки действий */}
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity 
              style={styles.buttonOnSettings}
              onPress={() => setShowAddYourProgressModal(true)}
            >
              <Text style={styles.buttonTextOnSettings}>Добавить</Text>
              <Text style={styles.buttonTextOnSettings}>прогресс</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.buttonOnSettings}
              onPress={() => setShowChangeGoalModal(true)}
            >
              <Text style={styles.buttonTextOnSettings}>Изменить</Text>
              <Text style={styles.buttonTextOnSettings}>цель</Text>
            </TouchableOpacity>
            
          </View>
          
          <TouchableOpacity 
            style={styles.buttonOfDeleteHobby}
            onPress={handleDeleteHobby}
          >
            <Text style={styles.buttonTextOnSettings}>Удалить хобби</Text>
          </TouchableOpacity>

          <Text style={[styles.buttonTextOnSettings, { opacity: 0 }]}>
          </Text>

        </ScrollView >

        <TouchableOpacity
          style={styles.ThreeStripedButton}
          onPress={() => navigation.navigate('Hobbies')}
        >
          <ArrowToBack />
        </TouchableOpacity>

        <View style={styles.PaintScreenText}>
          <Text style={styles.PaintScreenTextFonts}>{hobbyName}</Text>
        </View>
      
        {showChangeGoalModal && (
          <View style={styles.modalOverlay}>
            <View style={styles.newHobbyModal}>
              {/* Крестик закрытия */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowChangeGoalModal(false)}
              >
                <CloseCreatingHobbyIcon />
              </TouchableOpacity>

              {/* Заголовок */}
              <View style={styles.modalHeaderGoal}>
                <Text style={styles.modalTitle}>Изменить цель</Text>
              </View>

              {/* Блок с иконкой и полем ввода */}
              <View style={styles.inputContainer}>
                <View style={styles.textInputWrapper}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Введи свою цель"
                    placeholderTextColor="#999"
                    value={inputText}
                    onChangeText={setInputText}
                  />
                  <View style={styles.underline} />
                </View>
              </View>

              {/* Кнопка подтверждения */}
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleChangeGoal}

              >
                <Text style={styles.confirmButtonText}>Изменить</Text>
              </TouchableOpacity>

            </View>
          </View>
        )}

        {showAddYourProgressModal && (
          <View style={styles.modalOverlay}>
            <View style={styles.newHobbyModal}>
              {/* Крестик закрытия */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowAddYourProgressModal(false)}
              >
                <CloseCreatingHobbyIcon />
              </TouchableOpacity>

              {/* Заголовок */}
              <View style={styles.modalHeaderProgress}>
                <Text style={styles.modalTitle}>Добавить прогресс</Text>
              </View>

              {/* Основной контент - поля ввода и прогресс бар */}
              <View style={styles.progressContent}>
                {/* Поля ввода в одну строку */}
                <View style={styles.inputRow}>
                  <TextInput
                    style={styles.numberInput}
                    placeholder="0"
                    keyboardType="numeric"
                    value={modalProgress.current > 0 ? modalProgress.current.toString() : ''}
                    onChangeText={(text) => {
                      const num = parseInt(text) || 0;
                      setModalProgress(prev => ({ ...prev, current: num }));
                    }}
                  />
                  <Text style={styles.dividerText}>из</Text>
                  <TextInput
                    style={styles.numberInput}
                    placeholder={isTargetLocked ? progress.target.toString() : "0"}
                    keyboardType="numeric"
                    value={isTargetLocked ? progress.target.toString() : (modalProgress.target > 0 ? modalProgress.target.toString() : '')}
                    onChangeText={(text) => {
                      if (!isTargetLocked) {
                        const num = parseInt(text) || 0;
                        setModalProgress(prev => ({ ...prev, target: num }));
                      }
                    }}
                    editable={!isTargetLocked}
                  />
                </View>

                {/* Прогресс бар сразу под полями ввода */}
                <View style={styles.progressBarWrapper}>
                  <View 
                    style={[
                      styles.progressBar,
                      { 
                        width: `${(() => {
                          const target = isTargetLocked ? progress.target : modalProgress.target || 1;
                          const current = progress.current + modalProgress.current;
                          return target > 0 ? Math.min(100, (current / target) * 100) : 0;
                        })()}%`
                      }
                    ]}
                  />
                </View>
              </View>

              {/* Кнопка подтверждения */}
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleAddProgress}
              >
                <Text style={styles.confirmButtonText}>Добавить</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        
      </View>
    </View>
  );
}

export default SettingScreen;