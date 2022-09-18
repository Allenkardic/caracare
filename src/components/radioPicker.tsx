import React, { useCallback } from 'react';

import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, ViewStyle, TouchableOpacity } from 'react-native';
// import debounce from 'lodash.debounce';

import { colors, spacing, colors as colorConstant, HP } from '../constants';

import ActivityIndicator from './activityIndicator';
import { H5, H4, H6, H3 } from './text';

interface IProps {
  onPress: any;
  text: string;
  isSelected: boolean;
  colorPicker?: boolean;
  backgroundColor?: string;
}

export default function RadioPicker(props: IProps) {
  const { onPress, text, isSelected, colorPicker, backgroundColor } = props;
  const theme = useTheme();

  const styles = useStyles({ theme, isSelected, backgroundColor });

  if (colorPicker) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.colorPickerContainer}>
          <View style={styles.colorPickerContent}>
            <View style={styles.colorPickerBackground} />
            <H5>{text}</H5>
          </View>
          <View style={styles.radioContainer}>
            <View style={styles.radioBackground} />
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <H5>{text}</H5>
          <View style={styles.radioContainer}>
            <View style={styles.radioBackground} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const useStyles = (props: { theme: any; isSelected: boolean; backgroundColor?: string }) =>
  StyleSheet.create({
    colorPickerContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: spacing.xxsmall,
    },
    colorPickerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    colorPickerBackground: {
      backgroundColor: props.backgroundColor,
      width: HP('3%'),
      height: HP('3%'),
      borderRadius: HP('3%') / 2,
      marginRight: spacing.xxsmall,
    },
    container: {
      paddingHorizontal: spacing.xxsmall,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomColor: colorConstant.grey,
      borderBottomWidth: 0.25,
      elevation: 0.2,
      borderStyle: 'solid',
      paddingVertical: spacing.xxsmall,
    },
    radioContainer: {
      borderColor: props.isSelected ? colors.green : colors.grey,
      borderWidth: 1,
      borderStyle: 'solid',
      width: HP('2%'),
      height: HP('2%'),
      borderRadius: HP('2%') / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioBackground: {
      backgroundColor: props.isSelected ? colors.green : 'transparent',
      width: HP('1.4%'),
      height: HP('1.4%'),
      borderRadius: HP('1.4%') / 2,
    },
  });
