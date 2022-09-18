import React from 'react';

import { useTheme } from '@react-navigation/native';
import { StyleSheet, RefreshControl, View, ImageSourcePropType, ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import EmptyList from './emptyList';

interface IProps {
  data: any[] | [];
  onRefresh: any;
  renderItem: any;
  refreshing: boolean;
  showsVerticalScrollIndicator?: boolean;
  keyExtractor: (item: any) => any;
  emptyListText: string;
  emptyListImage?: ImageSourcePropType;
  listHeader?: any;
  style?: ViewStyle;
}

export default function SJFlatList(props: IProps) {
  const {
    data,
    onRefresh,
    refreshing,
    keyExtractor,
    emptyListText,
    emptyListImage,
    renderItem,
    showsVerticalScrollIndicator,
    listHeader,

    style,
    ...otherProps
  } = props;

  const theme = useTheme();
  const styles = useStyles({ theme });

  return (
    <Animated.FlatList
      data={data}
      style={[styles.container, { ...style }]}
      refreshing={refreshing}
      onRefresh={onRefresh}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      entering={FadeIn.duration(300)}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
      ListEmptyComponent={<EmptyList subTitle={emptyListText} img={emptyListImage} />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          title=""
          tintColor={theme.colors.text}
          titleColor={theme.colors.text}
        />
      }
      ListHeaderComponent={listHeader || <View style={{ height: 10 }} />}
      {...otherProps}
    />
  );
}

const useStyles = (props: { theme: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.theme.colors.background,
    },
  });