import React from 'react';

import { useTheme } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { borderRadius, colors, fontFamily, HP, spacing } from '../constants';

import { H5, Icon, Label, ErrorLabel } from './';

interface IProps {
  onPress: () => any;
  onValueChange: any;
  value: string;
  label: string;
  labelKey?: string;
  error?: string;
  iconSize?: number;
  iconColor?: string;
  iconName?: string;
}

export default function Picker(props: IProps) {
  const { onValueChange, label, value, labelKey, error, onPress, iconName, iconSize, iconColor } = props;

  const theme = useTheme();
  const styles = useStyles({ theme, error });

  // this effect enable add values to form controller
  React.useEffect(() => {
    onValueChange(value);
  }, [value]);

  return (
    <View style={styles.container}>
      {label && <Label>{label}</Label>}

      <View style={styles.textHolder}>
        <TouchableOpacity onPress={onPress} style={styles.picker}>
          <View style={styles.pickerContent}>
            <H5 color={theme.colors.primary}>{value}</H5>
            {iconName && (
              <Icon
                name={iconName}
                size={iconSize || HP('2%')}
                color={value.length > 1 ? colors.primaryColor : colors.greyAlternate}
              />
            )}
          </View>
        </TouchableOpacity>
        <ErrorLabel message={error || ''} />
      </View>
    </View>
  );
}

const useStyles = (props: { theme?: any; error?: string }) =>
  StyleSheet.create({
    container: {
      paddingVertical: spacing.mini,
      width: '100%',
    },
    picker: {
      backgroundColor: props.theme.dark ? colors.alternateBlack : colors.white,
      color: props.theme.colors.background,
      margin: 0,
      height: HP('5%'),
      borderColor: props.error
        ? colors.danger
        : props.theme.dark
        ? colors.alternateBlack
        : colors.inputBorderVarientOne,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: borderRadius.small,
      paddingLeft: spacing.xxsmall,
      paddingRight: spacing.xxxsmall,
      justifyContent: 'center',
    },
    pickerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textHolder: {
      width: '100%',
    },
  });
