import React from 'react';
import {StyleSheet, View} from 'react-native';
import {borderRadius, colors, spacing} from '../constants';
import {H6} from './text';

interface Props {
  text: 'Alive' | 'Dead' | 'unknown';
}
export default function ActivityLabel({text}: Props) {
  const styles = useStyles({text});
  return (
    <View style={styles.container}>
      <H6 bold color={colors.white}>
        {text}
      </H6>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xxxsmall,
    paddingVertical: 2,
    borderRadius: borderRadius.small,
  },
});

const useStyles = (props: {text: string}) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.text === 'Alive' ? colors.green : colors.grey,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.xxxsmall,
      paddingVertical: 2,
      borderRadius: borderRadius.small,
    },
  });
