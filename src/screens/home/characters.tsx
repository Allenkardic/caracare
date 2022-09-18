import React from 'react';
import {View} from 'react-native';
import {Text, Card, FlatList} from '../../components';

function Characters({navigation}) {
  const [dataList, setDataList] = React.useState([
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Dead',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive',
      firstEpisode: 'S01E01',
      firstEpisodeDate: 'December 2, 2013',
    },
  ]);

  const renderItem = ({item}: any) => (
    <Card
      onPress={() => console.log('pressed')}
      onPressLike={() => console.log('onPressLike')}
      image={item.image}
      name={item.name}
      species={item.species}
      origin={item.origin}
      status={item.status}
      firstEpisode={item.firstEpisode}
      firstEpisodeDate={item.firstEpisode}
    />
  );

  return (
    <View style={{flex: 1}}>
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
        data={dataList}
        renderItem={renderItem}
        emptyListText="No character have been added yet"
      />
    </View>
  );
}

export default Characters;
