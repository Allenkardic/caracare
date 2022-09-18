import React from 'react';
import {View} from 'react-native';
import {Text} from '../../components';

function Characters({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('CharacterDetails')}>
        Characters
      </Text>
      <Text onPress={() => navigation.navigate('Settings')}>Sttings</Text>
      <Text>Characters</Text>
      <Text onPress={() => navigation.navigate('CharacterDetails')}>
        settings
      </Text>
      <Text>Characters</Text>
    </View>
  );
}

export default Characters;
