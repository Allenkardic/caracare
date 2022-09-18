import React from 'react';

import { useTheme } from '@react-navigation/native';
import { ViewStyle, StyleSheet } from 'react-native';

import { borderRadius, colors, HP, spacing } from '../constants';

import TextInput from './textInput';

interface IProps {
  label?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChangeText: Function;
  style?: ViewStyle;
  numberOfLines?: number;
  inputName?: string | undefined;
  focusedName?: string | undefined;
  onFocus?: any;
  onBlur?: any;
  optional?: boolean;
}

export default function TextArea(props: IProps) {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    error,
    numberOfLines = 5,
    style,
    inputName,
    focusedName,
    onFocus,
    onBlur,
    optional,
  } = props;
  const appTheme = useTheme();
  const styles = useStyles({ inputName, focusedName, appTheme, error });
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      multiline={true}
      numberOfLines={numberOfLines}
      error={error}
      style={{ ...styles.textInput, ...style }}
      onFocus={onFocus}
      onBlur={onBlur}
      optional={optional && optional}
    />
  );
}

const useStyles = (props: { appTheme: any; error?: string; inputName?: string; focusedName?: string }) =>
  StyleSheet.create({
    textInput: {
      color: props.appTheme.dark ? colors.white : colors.alternateBlack,
      backgroundColor: props.appTheme.dark ? colors.alternateBlack : colors.white,
      borderColor: props.error
        ? colors.danger
        : props.inputName !== props.focusedName
        ? colors.inputBorderVarientOne
        : colors.alternateBlack,
      borderWidth: 1,
      borderStyle: 'solid',
      height: HP('5%'),
      borderRadius: borderRadius.small,
    },
  });
