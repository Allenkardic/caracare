import React from 'react';
import {View} from 'react-native';
import {Text, Card} from '../../components';

function Characters({navigation}) {
  return (
    <View>
      {/* <Text onPress={() => navigation.navigate('CharacterDetails')}>
        Characters
      </Text>
      <Text onPress={() => navigation.navigate('Settings')}>Sttings</Text>
      <Text>Characters</Text>
      <Text onPress={() => navigation.navigate('CharacterDetails')}>
        settings
      </Text>
      <Text>Characters</Text> */}
      <Card
        onPress={() => console.log('pressed')}
        onPressLike={() => console.log('onPressLike')}
        image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        name={'Rick Sanchez'}
        species={'Human'}
        origin={'Earth'}
        status={'Alive'}
        firstEpisode={'S01E01'}
        firstEpisodeDate={'December 2, 2013'}
      />
      <Card
        onPress={() => console.log('pressed')}
        onPressLike={() => console.log('onPressLike')}
        image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        name={'Rick Sanchez'}
        species={'Human'}
        origin={'Earth'}
        status={'Dead'}
        firstEpisode={'S01E01'}
        firstEpisodeDate={'December 2, 2013'}
      />
      <Card
        onPress={() => console.log('pressed')}
        onPressLike={() => console.log('onPressLike')}
        image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        name={'Rick Sanchez'}
        species={'Human'}
        origin={'Earth'}
        status={'Dead'}
        firstEpisode={'S01E01'}
        firstEpisodeDate={'December 2, 2013'}
      />
    </View>
  );
}

export default Characters;
