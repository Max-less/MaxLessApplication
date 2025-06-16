import React from 'react';


import CommunityDetailsScreen from './screens/CommunityDetailsScreen/CommunityDetailsScreen';
import CommunityScreen from './screens/CommunityScreen/CommunityScreen';
import DrawingScreen from './screens/DrawingScreen/DrawingScreen';
import HobbiesScreen from './screens/HobbiesScreen/HobbiesScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';
import RegistrationSuccessScreen from './screens/RegistrationSuccessScreen/RegistrationSuccessScreen';
import RegistrationPreSuccessScreen from './screens/RegistrationPreSuccessScreen/RegistrationPreSuccessScreen';
import SettingScreen from './screens/SettingScreen/SettingScreen';
import MainScreen from './screens/MainScreen/MainScreen';
import ForgotPasswordStepFirstScreen from './screens/ForgotPasswordStepFirstScreen/ForgotPasswordStepFirstScreen';
import ForgotPasswordStepSecondScreen from './screens/ForgotPasswordStepSecondScreen/ForgotPasswordStepSecondScreen';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Hobbies" component={HobbiesScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen name="CommunityDetails" component={CommunityDetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Drawing" component={DrawingScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccessScreen} />
      <Stack.Screen name="RegistrationPreSuccess" component={RegistrationPreSuccessScreen} />
      <Stack.Screen name="ForgotPasswordStepFirst" component={ForgotPasswordStepFirstScreen} />
      <Stack.Screen name="ForgotPasswordStepSecond" component={ForgotPasswordStepSecondScreen} />
    </Stack.Navigator>
  );
}