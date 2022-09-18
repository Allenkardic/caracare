import React from 'react';

import { useTheme } from '@react-navigation/native';
import { Pressable, StyleSheet, GestureResponderEvent } from 'react-native';

import { boxWithSmallShadow, colors, HP, spacing } from '../constants';

import Icon from './icon';
interface IProps {
  onPress: (event: GestureResponderEvent) => void;
  iconName?: string;
}

export default function FloatingActionButton({ onPress, iconName = 'add' }: IProps) {
  const theme = useTheme();
  const styles = useStyles({ theme });

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={HP('3.3%')} color={theme.colors.text} />
    </Pressable>
  );
}

const useStyles = (props: { theme: any }) =>
  StyleSheet.create({
    container: {
      ...boxWithSmallShadow,
      position: 'absolute',
      bottom: HP('10%'),
      right: spacing.xxsmall,
      backgroundColor: props.theme.dark ? colors.black : colors.white,
      width: HP('6%'),
      height: HP('6%'),
      borderRadius: HP('6%') / 2,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
  });
