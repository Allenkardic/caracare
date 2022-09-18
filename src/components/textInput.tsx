import React from 'react';

import { useTheme } from '@react-navigation/native';
import {
  KeyboardType,
  TextInput as RNTextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import { borderRadius, colors, HP, spacing } from '../constants';
import theme from '../styles';

import ErrorLabel from './errorLabel';
import Icon from './icon';
import Label from './label';
import { H6 } from './text';

interface IProps extends TextInputProps {
  onChangeText: any;
  value: string;
  label?: string;
  keyboardType?: KeyboardType;
  error?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  note?: string;
  suffix?: string;
  style?: ViewStyle;
  icon?: string;
  iconStyle?: ViewStyle;
  iconColor?: string;
  inputName?: string | undefined;
  focusedName?: string | undefined;
  iconOnPress?: any;
  onFocus?: any;
  onBlur?: any;
  noSpace?: boolean;
  optional?: boolean;
}

export default function TextInput(props: IProps) {
  const {
    onChangeText,
    label,
    value,
    keyboardType,
    placeholder,
    secureTextEntry,
    error,
    icon,
    style,
    iconStyle,
    iconColor,
    iconOnPress,
    note,
    suffix,
    inputName,
    focusedName,
    onFocus,
    onBlur,
    noSpace,
    optional,
    ...others
  } = props;

  const appTheme = useTheme();
  const styles = useStyles({ inputName, focusedName, appTheme, error, noSpace });
  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelContainer}>
          <Label>{label}</Label>
          {optional && (
            <H6 style={styles.optionalText} color={appTheme.dark ? colors.ghostWhite : colors.grey}>
              (optional)
            </H6>
          )}
        </View>
      )}

      <View style={styles.textContainer}>
        <RNTextInput
          autoCapitalize="none"
          style={{ ...theme.textInput, ...styles.textInput, ...style }}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType || 'default'}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
          {...others}
        />

        {icon && (
          <TouchableOpacity style={{ ...iconStyle }} onPress={iconOnPress}>
            <Icon name={icon} color={iconColor} size={27} />
          </TouchableOpacity>
        )}

        {suffix && (
          <View style={styles.suffix}>
            <H6 bold color={appTheme.dark ? colors.primaryColor : colors.secondaryColor}>
              {suffix}
            </H6>
          </View>
        )}
      </View>
      {note && <H6>{note}</H6>}
      {error && <ErrorLabel message={error} />}
    </View>
  );
}

const useStyles = (props: {
  appTheme: any;
  error?: string;
  inputName?: string;
  focusedName?: string;
  noSpace?: boolean;
}) =>
  StyleSheet.create({
    container: {
      marginBottom: props.noSpace ? 0 : spacing.xsmall,
    },
    textContainer: {
      width: '100%',
      borderRadius: borderRadius.small,
      flexDirection: 'row',
      alignItems: 'center',
    },
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
    suffix: {
      backgroundColor: props.appTheme.dark ? colors.alternateBlack : colors.ghostWhite,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      paddingHorizontal: 5,
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    optionalText: {
      marginLeft: spacing.mini,
    },
  });
