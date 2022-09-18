import React from 'react';

import colors from '../constants/colors';

import { H6 } from './text';

interface IProps {
  message: string;
  style?: any;
}

export default function ErrorLabel(props: IProps) {
  const { message, style } = props;

  return (
    <H6 style={{ ...style }} color={colors.errorText}>
      {message}
    </H6>
  );
}
