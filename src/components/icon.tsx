import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TextStyle, GestureResponderEvent} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {HP, colors} from '../constants';

interface IProps {
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle;
  focused?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function Icon(props: IProps) {
  const {name, size, color, onPress, ...otherProps} = props;
  const theme = useTheme();

  return (
    <Ionicon
      onPress={onPress}
      name={name}
      size={size || HP('2%')}
      color={color || theme.colors.primary}
      {...otherProps}
    />
  );
}

export function TabBarIcon(props: IProps) {
  const {focused, name, size} = props;
  const theme = useTheme();

  return (
    <Ionicon
      name={name}
      size={size || HP('2%')}
      color={focused ? theme.colors.primary : colors.tabIconDefault}
    />
  );
}
