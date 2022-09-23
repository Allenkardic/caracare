import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors, spacing, borderRadius} from '../constants';
import {H5, Icon} from './';

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
              style={styles.iconContent}
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
    container: {
      backgroundColor: props.theme.colors.background,
      borderRadius: borderRadius.small,
      paddingBottom: spacing.small,
      paddingTop: spacing.xxsmall,
    },
    content: {
      marginBottom: spacing.xsmall,
    },
    iconContent: {
      position: 'absolute',
      right: 10,
    },
  });
