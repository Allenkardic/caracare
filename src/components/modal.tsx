import React from 'react';

import {useTheme} from '@react-navigation/native';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import Modal from 'react-native-modal';

import {colors, spacing, borderRadius} from '../constants';

import {H5} from '.';
import Icon from './icon';

interface IProps {
  isVisible: boolean;
  children: JSX.Element;
  title: string;
  onPressClose: () => void;
}

export default function RNModal(props: IProps) {
  const theme = useTheme();
  const styles = useStyles({theme});
  const {isVisible, children, title, onPressClose} = props;

  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View style={styles.container}>
          <View style={styles.content}>
            <H5 center>{title}</H5>
            <Icon
              onPress={onPressClose}
              style={{position: 'absolute', right: 10}}
              name={'close'}
              color={colors.grey}
              size={20}
            />
          </View>
          <View>{children}</View>
        </View>
      </Modal>
    </View>
  );
}

const useStyles = (props: {theme: any}) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: colors.white,
      margin: 0,
    },
    container: {
      backgroundColor: props.theme.colors.background,
      borderRadius: borderRadius.small,
      paddingBottom: spacing.small,
      paddingTop: spacing.xxsmall,
    },
    content: {
      marginBottom: spacing.xsmall,
    },
    text: {
      marginTop: spacing.small,
    },
    mainText: {
      marginBottom: spacing.xxsmall,
    },
  });
