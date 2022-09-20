import React from 'react';

import {
  Switch as RNSwitch,
  SwitchProps,
  ViewStyle,
  StyleSheet,
  View,
} from 'react-native';

import {colors, spacing} from '../constants';
import {H3} from './';
interface IProps extends SwitchProps {
  onValueChange: any;
  value: boolean;
  label?: string;
  error?: string;
  style?: ViewStyle;
}

export default function SwitchInput(props: IProps) {
  const {onValueChange, label, value, error, style, ...others} = props;

  return (
    <View style={styles.container}>
      <H3>{label}</H3>
      <RNSwitch
        style={{...style}}
        onValueChange={onValueChange}
        value={value}
        trackColor={{false: colors.greyVariantThree, true: colors.primaryColor}}
        thumbColor={value == true ? colors.white : colors.white}
        {...others}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xxsmall,
  },
});
