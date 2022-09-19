import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, EmptyCard, FlatList} from '../../components';
import {formatFlatListGridData} from '../../constants';

const numColumns = 2;

function Characters({navigation}) {
  const [dataList, setDataList] = useState([
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      origin: 'Earth',
      status: 'Alive',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      origin: 'Earth',
      status: 'Dead',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      origin: 'Earth',
      status: 'Alive',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      origin: 'Earth',
      status: 'Alive',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      origin: 'Earth',
      status: 'Alive',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      origin: 'Earth',
      status: 'Alive',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      origin: 'Earth',
      status: 'Alive',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
  ]);

  const [grid, setGrid] = useState(true);

  const renderItem = ({item}: any) => {
    if (item.empty === true) {
      return <EmptyCard />;
    }
    return (
      <View style={styles.container}>
        <Card
          onPress={() => console.log('pressed')}
          onPressLike={() => console.log('onPressLike')}
          image={item.image}
          name={item.name}
          species={item.species}
          origin={item.origin}
          status={item.status}
          firstEpisode={item.firstEpisode}
          firstEpisodeDate={item.firstEpisodeDate}
          grid={grid}
          numColumns={numColumns}
        />
      </View>
    );
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

      <FlatList
        // data={dataList}
        data={formatFlatListGridData(dataList, numColumns)}
        numColumns={numColumns}
        renderItem={renderItem}
        emptyListText="No character have been added yet"
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
