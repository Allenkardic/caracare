import React from 'react';

import {useTheme} from '@react-navigation/native';
import {Text as RNText, TextProps, TextStyle, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {fontFamily, fontFamilyBold, fontFamilySemiBold} from '../constants';

interface IProps extends TextProps {
  children: any;
  style?: TextStyle;
  color?: string | any;
  bold?: boolean;
  semiBold?: boolean;
  underline?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
}

type UseStyles = {
  text?: TextStyle;
  h3?: TextStyle;
  h4?: TextStyle;
  h5?: TextStyle;
  h6?: TextStyle;
  center?: TextStyle;
};

export function Text(props: IProps) {
  const {
    center,
    style,
    children,
    color,
    bold,
    semiBold,
    underline,
    capitalize,
    uppercase,
    ...restProps
  } = props;
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <RNText
      style={[
        styles.text,
        {...style},
        color && {color},
        bold && {fontFamily: fontFamilyBold},
        semiBold && {fontFamily: fontFamilySemiBold},
        capitalize && {textTransform: 'capitalize'},
        uppercase && {textTransform: 'uppercase'},
        underline && {textDecorationLine: 'underline'},
      ]}
      {...restProps}>
      {children}
    </RNText>
  );
}

export function H3(props: IProps) {
  const {center, right, left, style, children, color, bold, ...restProps} =
    props;
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <Text
      color={color}
      bold={bold}
      style={{
        ...styles.h3,
        ...style,
        textAlign: center ? 'center' : right ? 'right' : 'left',
      }}
      {...restProps}>
      {children}
    </Text>
  );
}

export function H4(props: IProps) {
  const {center, right, left, style, children, color, bold, ...restProps} =
    props;
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <Text
      color={color}
      bold={bold}
      style={{
        ...styles.h4,
        ...style,
        textAlign: center ? 'center' : right ? 'right' : 'left',
      }}
      {...restProps}>
      {children}
    </Text>
  );
}

export function H5(props: IProps) {
  const {center, right, left, style, children, color, bold, ...restProps} =
    props;
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <Text
      color={color}
      bold={bold}
      style={{
        ...styles.h5,
        ...style,
        textAlign: center ? 'center' : right ? 'right' : 'left',
      }}
      {...restProps}>
      {children}
    </Text>
  );
}

export function H6(props: IProps) {
  // const { center = true, right = false, left = false, style, children, color, bold, ...restProps } = props;
  const {center, right, left, style, children, color, bold, ...restProps} =
    props;
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <Text
      color={color}
      bold={bold}
      style={{
        ...styles.h6,
        ...style,
        textAlign: center ? 'center' : right ? 'right' : 'left',
      }}
      {...restProps}>
      {children}
    </Text>
  );
}

export const fontSize = RFValue(14.5);

const useStyles = (props: {
  theme: any;
  center?: boolean;
  right?: boolean;
  left?: boolean;
}) =>
  StyleSheet.create<UseStyles>({
    text: {
      fontFamily,
      color: props.theme.colors.text,
      fontSize,
    },
    h3: {
      fontSize: fontSize + 3,
    },
    h4: {
      fontSize: fontSize,
    },
    h5: {
      fontSize: fontSize - 1,
    },
    h6: {
      fontSize: fontSize - 3,
    },
  });
