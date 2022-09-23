import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, RefreshControl, View, ViewStyle} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';

import EmptyList from './emptyList';

interface IProps {
  data: any[] | [];
  onRefresh: any;
  onEndReached: any;
  renderItem: any;
  refreshing: boolean;
  showsVerticalScrollIndicator?: boolean;
  keyExtractor: (_: any, index: number) => any;
  emptyListText: string;
  listHeader?: any;
  numColumns?: number;
  style?: ViewStyle;
}

export default function SJFlatList(props: IProps) {
  const {
    data,
    onRefresh,
    onEndReached,
    refreshing,
    keyExtractor,
    emptyListText,
    renderItem,
    showsVerticalScrollIndicator,
    listHeader,
    numColumns,
    style,
    ...otherProps
  } = props;

  const theme = useTheme();
  const styles = useStyles({theme});

  return (
    <Animated.FlatList
      data={data}
      style={[styles.container, {...style}]}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      entering={FadeIn.duration(300)}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
      numColumns={numColumns}
      ListEmptyComponent={<EmptyList subTitle={emptyListText} />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          title=""
          tintColor={theme.colors.text}
          titleColor={theme.colors.text}
        />
      }
      ListHeaderComponent={listHeader || <View style={{height: 10}} />}
      {...otherProps}
    />
  );
}

const useStyles = (props: {theme: any}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.theme.colors.background,
    },
  });
