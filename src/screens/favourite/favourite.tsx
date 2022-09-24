import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Card, FlatList, EmptyCard} from '../../components';
import {formatFlatListGridData, spacing} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../redux/redux-hooks';
import {addFavouriteCharacters} from '../../redux/slice';

function Favourite() {
  const dispatch = useAppDispatch();
  const {data, status} = useAppSelector(state => state.favouriteCharacters);

  const grid = false;

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.container}>
        <Card
          onPress={() => {}}
          image={item.image}
          name={item.name}
          species={item.species}
          origin={item.origin.name}
          status={item.status}
          isFavourite={item.isFavourite}
          grid={grid}
          numColumns={1}
        />
      </View>
    );
  };

  const handleOnEndReached = () => {
    if (status !== 'loading') {
      dispatch(addFavouriteCharacters(data));
    }
  };

  const handleOnRefresh = () => {
    if (status !== 'loading') {
      dispatch(addFavouriteCharacters(data));
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={1}
        renderItem={renderItem}
        emptyListText="You do not have favourite character yet"
        onEndReached={handleOnEndReached}
        onRefresh={handleOnRefresh}
        refreshing={status === 'loading'}
        keyExtractor={(_: any, index: number) => {
          return index.toString() ?? '';
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
  },
});

export default Favourite;
