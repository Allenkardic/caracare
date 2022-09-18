import React, { ReactNode } from 'react';

import { useTheme } from '@react-navigation/native';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

interface IProps {
  children: ReactNode;
}
function KeyboardAvoidingView({ children }: IProps) {
  const theme = useTheme();
  const styles = useStyles({ theme });
  return (
    <RNKeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 45 : -300}>
      {children}
    </RNKeyboardAvoidingView>
  );
}

const useStyles = (props: { theme: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.theme.colors.background,
    },
  });

export default React.memo(KeyboardAvoidingView);
