import React, {useEffect, useState} from 'react';
import {ScrollView, Alert, StyleSheet, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {Card} from '../../components';
import {spacing} from '../../constants';
import {useAppDispatch, RootState} from '../../redux';
import {fetchSingleCharacter} from '../../redux/slice';
import {CharacterResultType} from '../../types';

interface IProps {
  route?: any;
}

function CharacterDetails({route: {params}}: IProps) {
  const dispatch = useAppDispatch();
  const singleCharacterState = useSelector(
    (state: RootState) => state.singleCharacter,
  );

  const [singleCharacterData, setSingleCharacterData] =
    useState<CharacterResultType>({});

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

  return (
    <ScrollView style={styles.container}>
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
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
  },
});

export default CharacterDetails;
