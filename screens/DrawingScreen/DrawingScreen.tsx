import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import BackGroundGradientOrange from '../../assets/icons/BackGroundGradientOrange';
import PaintOpacityArt from '../../assets/icons/PaintOpacityArt';
import WhiteRectangle from '../../assets/icons/WhiteRectangle';
import ArrowToBack from '../../assets/icons/ArrowToBack';
import NewHobbyIcon from '../../assets/icons/NewHobbyIcon';
import CloseCreatingHobbyIcon from "../../assets/icons/CloseCreatingHobbyIcon";
import NewMediaNoteIcon from '../../assets/icons/NewMediaNoteIcon';
import NewTextNoteIcon from '../../assets/icons/NewTextNoteIcon';


import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { DrawingScreenNavigationProp } from '../../types';



const DrawingScreen = () => {
  const [activeTab, setActiveTab] = useState<'tracking' | 'settings'>('tracking');
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);

  const navigation = useNavigation<DrawingScreenNavigationProp>();

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={[styles.background, { backgroundColor: '#E2C7B6' }]}>
      {/* Основной контент с возможным затемнением */}
      <View style={[styles.container, showNewNoteModal && { opacity: 0.6 }]}>

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
                onPress={() => setActiveTab('tracking')}
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
                onPress={goToSettings}
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

        <TouchableOpacity
          style={styles.ThreeStripedButton}
          onPress={() => navigation.navigate('Hobbies')}
        >
          <ArrowToBack />
        </TouchableOpacity>

        <View style={styles.PaintScreenText}>
          <Text style={styles.PaintScreenTextFonts}>рисование</Text>
        </View>

        <TouchableOpacity
          style={styles.CreateNewArtHobby}
          onPress={() => setShowNewNoteModal(true)}
        >
          <NewHobbyIcon />
        </TouchableOpacity>

      </View>

      {/* Модальное окно новой заметки */}
      {showNewNoteModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.newHobbyModal}>
            {/* Крестик закрытия */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowNewNoteModal(false)}
            >
              <CloseCreatingHobbyIcon />
            </TouchableOpacity>

            {/* Заголовок */}
            <View style={[styles.modalHeader, { marginBottom: -10 }]}>
              <Text style={styles.modalTitle}>Новая заметка</Text>
            </View>

            {/* Блок с иконками */}
            <View style={[styles.iconsRow, { marginBottom: -10 }]}>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  // Логика сохранения заметки
                  setShowNewNoteModal(false);
                }}
              >
                <NewMediaNoteIcon />
                <Text style={styles.iconText}>Медиа</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => {
                  // Логика сохранения заметки
                  setShowNewNoteModal(false);
                }}
              >
                <NewTextNoteIcon />
                <Text style={styles.iconText}>Текст</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      )}

    </View>
  );
}

export default DrawingScreen;