import React, {Fragment} from 'react';

import {useTheme} from '@react-navigation/native';
import {StyleSheet, ViewStyle, View, Pressable} from 'react-native';

import {borderRadius, colors, HP, spacing, fontSize, WP} from '../constants';

import {Text, H6, H4, H5, H3, Image} from './';
import Icon from './icon';
import ActivityLabel from './activityLabel';

interface IProps {
  style?: ViewStyle;
  onPress: () => any;
  onPressLike?: () => any;
  image: string;
  name: string;
  species: string;
  origin: string;
  firstEpisode: string;
  firstEpisodeDate: string;
  status: 'Alive' | 'Dead' | 'unknown';
}
export default function Card(props: IProps) {
  const {
    style,
    onPress,
    onPressLike,
    image,
    name,
    species,
    origin,
    firstEpisode,
    firstEpisodeDate,
    status,
  } = props;
  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <Pressable onPress={onPress} style={[styles.container, {...style}]}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri:
              image ||
              'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentOne}>
          <H3 semiBold>{name}</H3>
          <View style={styles.geneContainer}>
            <H6>{species},</H6>
            <H6 style={styles.origin}>{origin}</H6>
            <ActivityLabel text={status} />
          </View>
          <View style={styles.episodeContainer}>
            <H6>Episode: </H6>
            <H6>{firstEpisode}</H6>
            <View style={styles.dot} />
            <H6>{firstEpisodeDate}</H6>
          </View>
        </View>
        <View style={styles.contentTwo}>
          <Icon
            onPress={onPressLike}
            name={'heart-outline'}
            size={HP('5%')}
            color={colors.errorBackground}
          />
        </View>
      </View>
    </Pressable>
  );
}

const useStyles = (props: {
  theme: any;
  backgroundColor?: string;
  cardTintColor?: string;
}) =>
  StyleSheet.create({
    container: {
      marginBottom: spacing.xsmall,
    },
    imgContainer: {
      height: HP('20%'),
      width: '100%',
    },

    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: spacing.xxsmall,
      paddingTop: spacing.xxsmall,
    },
    contentOne: {
      width: '70%',
    },
    geneContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: spacing.xxxsmall,
    },
    origin: {
      marginHorizontal: spacing.mini,
    },
    episodeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dot: {
      backgroundColor: colors.grey,
      width: 5,
      height: 5,
      borderRadius: 5 / 2,
      marginHorizontal: spacing.mini,
    },
    contentTwo: {
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
