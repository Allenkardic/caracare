import React from 'react';

import {StyleSheet, GestureResponderEvent, Pressable} from 'react-native';

import {Icon} from '../components';
import {HP, spacing} from '../constants';

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
  name?: string;
}

function RightNavigationIcon({onPress, name}: IProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon name={name ? name : 'arrow-forward-sharp'} size={HP('3%')} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingRight: spacing.xxsmall,
  },
});

export default RightNavigationIcon;
