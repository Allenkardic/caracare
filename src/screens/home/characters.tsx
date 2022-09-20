import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {Card, EmptyCard, FlatList, SearchInput, H3} from '../../components';
import {formatFlatListGridData, routes} from '../../constants';
import {useAppDispatch, RootState} from '../../redux';
import {fetchCharacters, addFavouriteCharacters} from '../../redux/slice';
import stack from '../../constants/routes';

import {characterResultType} from '../../types';

function Characters({navigation}) {
  const {characterDetails} = stack.stack;
  // const [dataList, setDataList] = useState([
  //   {
  //     id: 1,
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //     origin: 'Earth',
  //     status: 'Alive',
  //     firstEpisode: 'S01E01',
  //     firstEpisodeDate: 'December 2, 2013',
  //   },
  //   {
  //     id: 2,
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //     origin: 'Earth',
  //     status: 'Dead',
  //     firstEpisode: 'S01E01',
  //     firstEpisodeDate: 'December 2, 2013',
  //   },
  //   {
  //     id: 3,
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //     origin: 'Earth',
  //     status: 'Alive',
  //     firstEpisode: 'S01E01',
  //     firstEpisodeDate: 'December 2, 2013',
  //   },
  //   {
  //     id: 4,
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //     origin: 'Earth',
  //     status: 'Alive',
  //     firstEpisode: 'S01E01',
  //     firstEpisodeDate: 'December 2, 2013',
  //   },
  //   {
  //     id: 5,
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //     origin: 'Earth',
  //     status: 'Alive',
  //     firstEpisode: 'S01E01',
  //     firstEpisodeDate: 'December 2, 2013',
  //   },
  //   {
  //     id: 6,
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //     origin: 'Earth',
  //     status: 'Alive',
  //     firstEpisode: 'S01E01',
  //     firstEpisodeDate: 'December 2, 2013',
  //   },
  //   {
  //     id: 7,
  //     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //     name: 'Rick Sanchez',
  //     species: 'Human',
  //     origin: 'Earth',
  //     status: 'Alive',
  //     firstEpisode: 'S01E01',
  //     firstEpisodeDate: 'December 2, 2013',
  //   },
  // ]);

  const dispatch = useAppDispatch();
  const charactersState = useSelector((state: RootState) => state.characters);
  // console.log(charactersState.data?.results?.length, 'toget the data' ==20);
  // console.log(charactersState.data, 'toget');
  // console.log(charactersState.data, 'toget the data');

  const [dataList, setDataList] = useState([]);
  const [grid, setGrid] = useState(true);
  const [page, setPage] = useState(1);
  const [numColumns, setNumColumns] = useState(2);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    dispatch(fetchCharacters(page));
  }, []);

  React.useEffect(() => {
    if (charactersState.error !== null) {
      Alert.alert(charactersState.error);
    } else {
      setDataList(charactersState.data);
    }
  }, [charactersState]);

  const handleOnPressLiked = (item: any) => {
    const itemToEdit = item;

    const updatedProduct: any = [...dataList].map((el: any) => {
      if (el.id === itemToEdit.id) {
        el.isFavourite = !el.isFavourite;
      }
      return el;
    });

    setDataList(updatedProduct);

    // now store all characters that there count is equal 2 because it takes 2 times press to like a data
    const allLikedCharacters = updatedProduct.filter((item: any) => {
      return item.isFavourite === true;
    });

    dispatch(addFavouriteCharacters(allLikedCharacters));
  };

  const renderItem = ({item}: any) => {
    if (item.empty === true) {
      return <EmptyCard />;
    }

    return (
      <View style={styles.container}>
        <Card
          onPress={() => navigation.navigate(characterDetails, item.id)}
          onPressLike={() => handleOnPressLiked(item)}
          image={item.image}
          name={item.name}
          species={item.species}
          origin={item.origin.name}
          status={item.status}
          isFavourite={item.isFavourite}
          grid={grid}
          numColumns={numColumns}
        />
      </View>
    );
  };

  const handleOnEndReached = () => {
    if (charactersState.status !== 'loading') {
      setPage(page + 1);
      dispatch(fetchCharacters(page + 1));
    }
  };

  const handleOnRefresh = () => {
    if (charactersState.status !== 'loading') {
      setPage(1);
      dispatch(fetchCharacters(1));
    }
  };

  const handleOnchange = (el: any) => {
    setSearchValue(el);
    if (el.length > 1) {
      console.log('search');
    } else {
      console.log('all');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text onPress={() => navigation.navigate('CharacterDetails')}>
        Characters
      </Text>
      <Text onPress={() => navigation.navigate('Settings')}>Sttings</Text>
      <Text>Characters</Text>
      <Text onPress={() => navigation.navigate('CharacterDetails')}>
        settings
      </Text>
      <Text>Characters</Text> */}

      <View>
        <SearchInput
          placeholder={'Search country'}
          value={searchValue}
          onChangeText={(text: string) => handleOnchange(text)}
        />
      </View>

      <FlatList
        // data={dataList}
        data={formatFlatListGridData(dataList, numColumns)}
        numColumns={numColumns}
        renderItem={renderItem}
        emptyListText="No character have been added yet"
        onEndReached={handleOnEndReached}
        onRefresh={handleOnRefresh}
        refreshing={charactersState.status === 'loading'}
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

export default Characters;
