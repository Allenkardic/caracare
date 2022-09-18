import React, {Fragment} from 'react';

import {useTheme} from '@react-navigation/native';
import {
  StyleSheet,
  TouchableHighlight,
  ViewStyle,
  View,
  Image,
  Pressable,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {borderRadius, colors, HP, spacing, fontSize, WP} from '../constants';

import {Text, H6, H4, H5} from './';

interface IProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => any;
}
export default function Card(props: IProps) {
  const {children, style, onPress} = props;
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <TouchableHighlight
      underlayColor={theme.dark ? colors.alternateBlack : colors.lightGrey}
      onPress={onPress}
      style={[styles.container, {...style}]}>
      <Fragment>{children}</Fragment>
    </TouchableHighlight>
  );
}

const useStyles = (props: {
  theme: any;
  backgroundColor?: string;
  cardTintColor?: string;
}) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: props.theme.dark ? colors.alternateBlack : colors.white,
      marginBottom: 10,
    },
  });
