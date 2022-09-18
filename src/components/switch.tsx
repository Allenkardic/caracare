import React from 'react';

import { Switch as RNSwitch, SwitchProps, ViewStyle, StyleSheet, View } from 'react-native';

import { colors } from '../constants';

import ErrorLabel from './errorLabel';

import { Label } from './';
interface IProps extends SwitchProps {
  onChangeText: any;
  value: boolean;
  label?: string;
  error?: string;
  style?: ViewStyle;
}

export default function SwitchInput(props: IProps) {
  const { onChangeText, label, value, error, style, ...others } = props;

  return (
    <View style={styles.container}>
      {label && <Label>{label}</Label>}

      <RNSwitch
        style={{ ...style }}
        onValueChange={onChangeText}
        value={value}
        trackColor={{ false: colors.greyVariantThree, true: colors.primaryColor }}
        thumbColor={value == true ? colors.white : colors.white}
        {...others}
      />
      {error && <ErrorLabel message={error} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
});
