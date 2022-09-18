import React, { ReactNode } from 'react';

import { StyleSheet } from 'react-native';

import { fontFamilySemiBold } from '../constants';

import { H6 } from './text';

interface Props {
  children: ReactNode;
}
export default function Label({ children }: Props) {
  return <H6 style={styles.label}>{children}</H6>;
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 7,
    fontFamily: fontFamilySemiBold,
  },
});
