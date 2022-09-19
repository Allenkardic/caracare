import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Card, FlatList} from '../../components';
import {formatFlatListGridData} from '../../constants';
import {useAppDispatch, RootState} from '../../redux';
import {addFavouriteCharacters} from '../../redux/slice';

function Favourite() {
  const dispatch = useAppDispatch();
  const {data, status} = useSelector(
    (state: RootState) => state.favouriteCharacters,
  );

  const grid = false;

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.container}>
        <Card
          onPress={() => {}}
          onPressLike={() => {}}
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
        data={formatFlatListGridData(data, 1)}
        renderItem={renderItem}
        emptyListText="You do not have favourite character yet"
        onEndReached={handleOnEndReached}
        onRefresh={handleOnRefresh}
        refreshing={status === 'loading'}
        keyExtractor={item => item.id.toString() ?? ''}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favourite;
