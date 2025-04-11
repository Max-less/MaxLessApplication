import React from 'react';
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = ({ text, style, textStyle }) => (
  <Pressable style={style}>
    <Text style={textStyle}>{text}</Text>
  </Pressable>
);