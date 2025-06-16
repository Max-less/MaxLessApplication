import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import BackGroundGradientOrange from '../../assets/icons/BackGroundGradientOrange';
import PaintOpacityArt from '../../assets/icons/PaintOpacityArt';
import WhiteRectangle from '../../assets/icons/WhiteRectangle';
import PointerRight from '../../assets/icons/PointerRight';
import PointerLeft from '../../assets/icons/PointerLeft';
import SwitchOffIcon from '../../assets/icons/SwitchOffIcon';
import SwitchOnIcon from '../../assets/icons/SwitchOnIcon';
import ArrowToBack from '../../assets/icons/ArrowToBack';



import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { SettingsScreenNavigationProp } from '../../types';



const SettingScreen = () => {
  const [activeTab, setActiveTab] = useState<'tracking' | 'settings'>('settings');
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(4);
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDates, setSelectedDates] = useState<{ [key: string]: number[] }>({});

  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const goToDrawing = () => {
    navigation.navigate('Drawing')
  };

  const goToHobbies = () => {
    navigation.navigate('Hobbies')
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

      const allSelected = Object.entries(prev)
        .filter(([key]) => key !== monthKey)
        .reduce((acc, [key, days]) => {
          const [y, m] = key.split('-');
          return [...acc, ...days.map(d => `${d}.${parseInt(m) + 1}.${y}`)];
        }, newDates.map(d => `${d}.${currentMonth + 1}.${currentYear}`));

      console.log('Выбранные даты:', allSelected.join(', '));

      return {
        ...prev,
        [monthKey]: newDates
      };
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
          <PaintOpacityArt />
        </View>

        <View style={styles.whiteRectangleContainer}>
          <WhiteRectangle />

          <View style={styles.tabsContainer}>
            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.tabButton}
                onPress={() => {
                  setActiveTab('tracking');
                  navigation.navigate('Drawing');
                }}
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

        <View style={styles.settingsContent}>
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

          {/* Серая линия */}
          <View style={styles.divider} />

          {/* Напоминания + переключатель */}
          <View style={styles.reminderHeader}>
            <Text style={styles.sectionTitle}>Напоминания</Text>
            <TouchableOpacity onPress={() => setIsSwitchOn(!isSwitchOn)}>
              {isSwitchOn ? <SwitchOnIcon /> : <SwitchOffIcon />}
            </TouchableOpacity>
          </View>

          {/* Серая линия */}
          <View style={styles.divider} />

          {/* Кнопки действий */}
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity style={styles.buttonOnSettings}>
              <Text style={styles.buttonTextOnSettings}>Добавить</Text>
              <Text style={styles.buttonTextOnSettings}>прогресс</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOnSettings}>
              <Text style={styles.buttonTextOnSettings}>Изменить</Text>
              <Text style={styles.buttonTextOnSettings}>цель</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.ThreeStripedButton}
          onPress={() => navigation.navigate('Hobbies')}
        >
          <ArrowToBack />
        </TouchableOpacity>

        <View style={styles.PaintScreenText}>
          <Text style={styles.PaintScreenTextFonts}>рисование</Text>
        </View>
      </View>
    </View>
  );
}

export default SettingScreen;