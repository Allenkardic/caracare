import React from 'react';

import {useTheme} from '@react-navigation/native';
import {StyleSheet, ViewStyle, View, Pressable, Dimensions} from 'react-native';

import {borderRadius, colors, HP, spacing, ellipsis} from '../constants';

import {H6, H4, H3, Image} from './';
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
  firstEpisode?: string;
  firstEpisodeDate?: string;
  status: 'Alive' | 'Dead' | 'unknown';
  grid: boolean;
  emptyGridCard?: boolean;
  numColumns: number;
  isFavourite?: boolean;
}

const cardBorderRadius = borderRadius.small;
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
    grid,
    emptyGridCard,
    numColumns,
    isFavourite,
  } = props;
  const theme = useTheme();
  const styles = useStyles({theme, grid, numColumns});

  if (grid) {
    return (
      <Pressable onPress={onPress} style={[styles.gridContainer, {...style}]}>
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
            <H4 semiBold>{name}</H4>
            <View style={styles.geneContainerGrid}>
              <View style={styles.geneContainerGridContentOne}>
                <H6>{ellipsis(species, 9)},</H6>
                <H6 style={styles.origin}>{ellipsis(origin, 9)}</H6>
              </View>
            </View>
          </View>
          <View style={styles.contentTwoGrid}>
            <Icon
              onPress={onPressLike}
              name={isFavourite ? 'heart' : 'heart-outline'}
              size={HP('4%')}
              color={colors.errorBackground}
            />
            <View>
              <ActivityLabel text={status} />
            </View>
          </View>
        </View>
      </Pressable>
    );
  } else if (emptyGridCard) {
    return <View style={[styles.item]} />;
  } else {
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
              name={isFavourite ? 'heart' : 'heart-outline'}
              size={HP('5%')}
              color={colors.errorBackground}
            />
          </View>
        </View>
      </Pressable>
    );
  }
}

const useStyles = (props: {theme: any; grid: boolean; numColumns: number}) =>
  StyleSheet.create({
    container: {
      marginBottom: spacing.xsmall,
    },
    imgContainer: {
      height: HP('20%'),
      width: '100%',
      borderTopLeftRadius: cardBorderRadius,
      borderTopRightRadius: cardBorderRadius,
    },

    content: {
      flexDirection: props.grid ? 'column' : 'row',
      justifyContent: 'space-between',
      paddingLeft: spacing.xxsmall,
      paddingTop: spacing.xxsmall,
    },
    contentOne: {
      width: props.grid ? '100%' : '70%',
    },
    geneContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: spacing.xxxsmall,
    },
    geneContainerGrid: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: spacing.xxxsmall,
      justifyContent: 'space-between',
      marginRight: spacing.xxsmall,
    },
    geneContainerGridContentOne: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    geneEpisodeContent: {
      flexDirection: 'row',
    },
    origin: {
      marginHorizontal: spacing.mini,
    },
    episodeContainer: {
      flexDirection: props.grid ? 'column' : 'row',
      alignItems: props.grid ? 'flex-start' : 'center',
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
    contentTwoGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: spacing.xxxsmall,
      paddingRight: spacing.xxsmall,
    },

    gridContainer: {
      borderColor: props.theme.dark ? colors.grey : colors.greyAlternate,
      borderWidth: 1,
      borderStyle: 'solid',
      paddingBottom: spacing.xxxsmall,
      marginBottom: spacing.xxsmall,
      marginHorizontal: spacing.mini,
      borderRadius: cardBorderRadius,
    },

    item: {
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / props.numColumns, // approximate a square
    },
  });
