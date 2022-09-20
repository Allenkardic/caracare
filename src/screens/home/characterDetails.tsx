import React, {useEffect, useState} from 'react';
import {Text, ScrollView, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {Card, H3} from '../../components';
import {useAppDispatch, RootState} from '../../redux';
import {fetchSingleCharacter} from '../../redux/slice';
import stack from '../../constants/routes';
const {characterDetails} = stack.stack;

interface IProps {
  route?: any;
}

function CharacterDetails({route: {params}}: IProps) {
  const dispatch = useAppDispatch();
  const singleCharacterState = useSelector(
    (state: RootState) => state.singleCharacter,
  );

  const [singleCharacterData, setSingleCharacterData] = useState({});

  useEffect(() => {
    dispatch(fetchSingleCharacter(params));
  }, []);

  useEffect(() => {
    if (singleCharacterState.error !== null) {
      Alert.alert(singleCharacterState.error);
    } else {
      setSingleCharacterData(singleCharacterState.data);
    }
  }, [singleCharacterState]);

  // console.log(singleCharacterData?.image, 'image');
  // console.log(singleCharacterData?.name, 'name');
  // console.log(singleCharacterData?.species, 'species');
  // console.log(singleCharacterData?.origin?.name, 'origin');
  // console.log(singleCharacterData?.status, 'status');
  // console.log(
  //   singleCharacterData?.status &&
  //     singleCharacterData?.episode[0]?.firstEpisode?.episode,
  //   'first episode',
  // );

  return (
    <ScrollView>
      <Card
        onPress={() => {}}
        characterDetailScreen
        image={singleCharacterData?.image}
        name={singleCharacterData?.name}
        species={singleCharacterData?.species}
        origin={singleCharacterData?.origin?.name}
        status={singleCharacterData?.status}
        firstEpisode={
          singleCharacterData?.episode &&
          singleCharacterData?.episode[0]?.firstEpisode?.episode
        }
        firstEpisodeDate={
          singleCharacterData?.episode &&
          singleCharacterData?.episode[0]?.firstEpisode?.air_date
        }
        lastEpisode={
          singleCharacterData?.episode &&
          singleCharacterData?.episode[0]?.lastEpisode?.episode
        }
        lastEpisodeDate={
          singleCharacterData?.episode &&
          singleCharacterData?.episode[0]?.lastEpisode?.air_date
        }
        numberOfEpisode={singleCharacterData?.numberOfEpisode}
        grid={false}
        numColumns={1}
      />
    </ScrollView>
  );
}

export default CharacterDetails;
