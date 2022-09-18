import React, {useCallback} from 'react';

import {useTheme} from '@react-navigation/native';
import {StyleSheet, View, ViewStyle, TouchableOpacity} from 'react-native';
// import debounce from 'lodash.debounce';

import {colors, HP} from '../constants';

import ActivityIndicator from './activityIndicator';
import {H5, H4, H6, H3} from './text';

interface IProps {
  onPress: any;
  isSubmitting?: boolean;
  hasError?: boolean;
  text: string;
  style?: ViewStyle;
  short?: boolean;
  alternate?: boolean;
  borderColor?: string;
  backgroundColor?: string;
}

export default function Button(props: IProps) {
  const {
    onPress,
    isSubmitting,
    text,
    style,
    short,
    alternate,
    hasError,
    borderColor = colors.primaryColor,
    backgroundColor,
  } = props;
  const theme = useTheme();

  const styles = useStyles({
    short,
    theme,
    alternate,
    isSubmitting,
    hasError,
    borderColor,
    backgroundColor,
  });

  // const handlePress = useCallback(debounce(onPress, 300), []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {...style}]}
        onPress={onPress}
        disabled={isSubmitting || false}>
        {isSubmitting ? (
          <ActivityIndicator
            color={alternate ? theme.colors.primary : colors.white}
          />
        ) : (
          <H5 bold color={alternate ? borderColor : colors.white}>
            {' '}
            {text}{' '}
          </H5>
        )}
      </TouchableOpacity>
    </View>
  );
}

const useStyles = (props: {
  short: any;
  alternate?: boolean;
  isSubmitting?: boolean;
  hasError?: boolean;
  theme: any;
  borderColor: any;
  backgroundColor: any;
}) =>
  StyleSheet.create({
    container: {paddingTop: 0},
    button: {
      backgroundColor: props.alternate
        ? colors.ghostWhite
        : props.backgroundColor
        ? props.backgroundColor
        : props.theme.colors.primary,
      opacity: props.isSubmitting || props.hasError ? 0.7 : 1,
      alignItems: 'center',
      width: props.short ? '40%' : '100%',
      borderRadius: 5,
      justifyContent: 'center',
      textAlign: 'center',
      height: HP('6%'),
      borderColor: props.alternate ? props.borderColor : 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
    },
  });
