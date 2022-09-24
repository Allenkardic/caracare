import React from 'react';

import {useTheme} from '@react-navigation/native';
import {StyleSheet, ViewStyle, View, Pressable} from 'react-native';

import {colors, spacing} from '../constants';

import Icon from './icon';
import {H6} from './text';

interface IProps {
  onPressText?: () => any;
  onPressChecker?: any;
  text: string;
  checker: boolean;
  style?: ViewStyle;
}

export default function Checker(props: IProps) {
  const {checker, onPressText, onPressChecker, text, style} = props;
  const theme = useTheme();
  const styles = useStyles({theme, checker});

  return (
    <View style={[styles.container, {...style}]}>
      <Pressable onPress={onPressChecker} style={styles.checker}>
        <Icon
          name={'checkmark'}
          size={22}
          color={!!checker ? colors.white : 'transparent'}
        />
      </Pressable>
      <H6 onPress={onPressText}>{text}</H6>
    </View>
  );
}

const useStyles = (props: {theme: any; checker: boolean}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: spacing.xxsmall,
    },
    checker: {
      borderColor: colors.grey,
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      width: 22,
      height: 22,
      backgroundColor: props.checker ? colors.green : 'transparent',
      marginRight: spacing.xxsmall,
    },
  });
