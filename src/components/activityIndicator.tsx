import React from 'react';

import { useTheme } from '@react-navigation/native';
import { ActivityIndicator as RNActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { colors } from '../constants';

interface IProps extends ActivityIndicatorProps {
  color?: string;
}

export default function ActivityIndicator(props: IProps) {
  const { color, ...otherProps } = props;

  const theme = useTheme();

  return (
    <RNActivityIndicator {...otherProps} color={color || (theme.dark ? colors.primaryColor : colors.secondaryColor)} />
  );
}
