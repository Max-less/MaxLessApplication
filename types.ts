import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Hobbies: undefined;
  Community: undefined;
  CommunityDetails: undefined;
  Profile: undefined;
  Drawing: { hobbyName?: string; hobbyImage?: any; isNew?: boolean };
  Settings: { hobbyName?: string; hobbyImage?: any };
  Registration: undefined;
  RegistrationSuccess: undefined;
  RegistrationPreSuccess: undefined;
  ForgotPasswordStepFirst: undefined;
  ForgotPasswordStepSecond: undefined;
};

export type HobbiesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, 
  'Hobbies'
> & {
  setAsMain?: () => void;
  currentScreen?: string;
};

export type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;
export type CommunityScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Community'>;
export type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;
export type DrawingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Drawing'>;
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;
export type RegistrationScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Registration'>;
export type RegistrationSuccessScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegistrationSuccess'>;
export type RegistrationPreSuccessScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegistrationPreSuccess'>;
export type ForgotPasswordStepFirstNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgotPasswordStepFirst'>;
export type ForgotPasswordStepSecondNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgotPasswordStepSecond'>;