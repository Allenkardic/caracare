import React from 'react';

import {
  Image as RNImage,
  ImageStyle,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native';

interface IProps extends ImageProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
}

export default function Image(props: IProps) {
  const {source, style} = props;

  return <RNImage source={source} style={[styles.image, {...style}]} />;
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
