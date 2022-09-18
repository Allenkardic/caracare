import React from 'react';

import { useTheme } from '@react-navigation/native';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import Modal from 'react-native-modal';

import { colors, spacing, borderRadius } from '../constants';

import { H5 } from './';

interface IProps {
  isVisible: boolean;
  boldText: string;
  text: string;
}

export default function ModalLoader(props: IProps) {
  const theme = useTheme();
  const styles = useStyles({ theme });
  const { isVisible, text, boldText } = props;

  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#F54D25" />
          <View style={styles.text}>
            <H5 center style={styles.mainText}>
              {boldText}
            </H5>
            <H5 center>{text}</H5>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const useStyles = (props: { theme: any }) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: colors.white,
      margin: 0,
    },
    container: {
      backgroundColor: props.theme.colors.background,
      borderRadius: borderRadius.small,
      paddingVertical: spacing.xlarge,
    },
    text: {
      marginTop: spacing.small,
    },
    mainText: {
      marginBottom: spacing.xxsmall,
    },
  });
