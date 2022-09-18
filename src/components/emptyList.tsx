import React from 'react';

import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

import { HP, spacing } from '../constants';

import { H6 } from './text';

interface IProps {
  subTitle?: string;
  img?: ImageSourcePropType;
}

export default function EmptyList(props: IProps) {
  const { subTitle, img } = props;

  return (
    <View style={style.addItem}>
      <View style={style.imgContaniner}>{img && <Image source={img} style={style.img} />}</View>
      {subTitle && (
        <View style={style.subtitle}>
          <H6 center>{subTitle}</H6>
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  addItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP('18%'),
  },
  imgContaniner: {
    width: HP('13%'),
    height: HP('13%'),
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  subtitle: {
    marginTop: spacing.xsmall,
    paddingHorizontal: spacing.xlarge,
  },
});
