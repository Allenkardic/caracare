import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, HP, spacing} from '../constants';
import {H6, Icon} from './';
interface IProps {
  subTitle?: string;
}

export default function EmptyList(props: IProps) {
  const {subTitle} = props;

  return (
    <View style={style.addItem}>
      <Icon
        name={'reader-outline'}
        size={HP('20%')}
        color={colors.greyVariantThree}
      />
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

  subtitle: {
    marginTop: spacing.xsmall,
    paddingHorizontal: spacing.xlarge,
  },
});
