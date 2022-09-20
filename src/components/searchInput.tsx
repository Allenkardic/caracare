import React from 'react';

import {useTheme} from '@react-navigation/native';
import {
  KeyboardType,
  TextInput as RNTextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

import {borderRadius, colors, HP, spacing} from '../constants';
import theme from '../styles';

import Icon from './icon';
import {H6} from './text';

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
  iconOnPress?: any;
}

export default function SearchInput(props: IProps) {
  const {
    onChangeText,
    label,
    value,
    keyboardType,
    placeholder,
    secureTextEntry,
    error,
    icon = 'search-sharp',
    style,
    iconStyle,
    iconColor = colors.grey,
    iconOnPress,
    note,
    suffix,

    ...others
  } = props;

  const appTheme = useTheme();
  const styles = useStyles({appTheme});

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {icon && (
          <TouchableOpacity style={{...iconStyle}} onPress={iconOnPress}>
            <Icon name={icon} color={iconColor} size={HP('2.5%')} />
          </TouchableOpacity>
        )}
        <RNTextInput
          autoCapitalize="none"
          style={{...theme.textInput, ...styles.textInput, ...style}}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType || 'default'}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          secureTextEntry={secureTextEntry}
          {...others}
        />
      </View>
      <Pressable>
        <Icon name={""}
      </Pressable>
    </View>
  );
}

const useStyles = (props: {appTheme: any}) =>
  StyleSheet.create({
    container: {
      paddingVertical: spacing.mini,
    },
    textContainer: {
      width: '100%',
      borderRadius: borderRadius.round,
      flexDirection: 'row',
      backgroundColor: props.appTheme.dark
        ? colors.greyVariantThree
        : colors.white,
      height: HP('5%'),
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: props.appTheme.dark ? colors.black : colors.white,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    textInput: {
      color: props.appTheme.dark ? colors.white : colors.alternateBlack,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      height: '100%',
      width: '85%',
    },
  });
