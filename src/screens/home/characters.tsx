import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import stack from '../../constants/routes';
import {
  Card,
  EmptyCard,
  FlatList,
  SearchInput,
  Modal,
  Checker,
  H6,
} from '../../components';
import {colors, formatFlatListGridData, spacing} from '../../constants';
import {useAppDispatch, RootState} from '../../redux';
import {
  fetchCharacters,
  addFavouriteCharacters,
  resetCharacters,
} from '../../redux/slice';
import {CharacterResultType, AvailableStatusType} from '../../types';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

function Characters({navigation}: IProps) {
  const {characterDetails} = stack.stack;

  const dispatch = useAppDispatch();
  const charactersState = useSelector((state: RootState) => state.characters);
  const settingsState = useSelector((state: RootState) => state.settings);
  const [dataList, setDataList] = useState<CharacterResultType[]>([]);
  const [searchNameValue, setSearchNameValue] = useState('');
  const [selectedStatusValue, setSelectedStatusValue] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [filterStatusData, setFilterStatusData] = useState<
    AvailableStatusType[]
  >([
    {name: 'Alive', isFiltering: false},
    {name: 'Dead', isFiltering: false},
    {name: 'unknown', isFiltering: false},
  ]);

  useEffect(() => {
    const payload = {
      page: '1',
      name: searchNameValue,
      status: selectedStatusValue,
    };
    dispatch(resetCharacters());
    dispatch(fetchCharacters(payload));
  }, [searchNameValue]);

  useEffect(() => {
    if (charactersState.status === 'failed') {
      //  no rsult
    } else {
      setDataList(charactersState?.data);
    }
  }, [charactersState]);

  function number() {
    let number: number;
    if (settingsState.data.isCharacterScreenGrid) {
      number = 2;
    } else {
      number = 1;
    }
    return number;
  }

  const handleOnPressLiked = (item: CharacterResultType) => {
    const itemToEdit = item;
    // update the list array to the item that was liked
    const updatedProduct: any = [...dataList].map((el: any) => {
      if (el.id === itemToEdit.id) {
        el.isFavourite = !el.isFavourite;
      }
      return el;
    });
    setDataList(updatedProduct);
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
      <View style={styles.cardContainer}>
        <Card
          onPress={() => navigation.navigate(characterDetails, item.id)}
          onPressLike={() => handleOnPressLiked(item)}
          image={item.image}
          name={item.name}
          species={item.species}
          origin={item.origin.name}
          status={item.status}
          isFavourite={item.isFavourite}
          grid={settingsState.data.isCharacterScreenGrid}
          numColumns={number()}
        />
      </View>
    );
  };

  const handleOnEndReached = () => {
    if (charactersState.status !== 'loading') {
      const payload = {
        page: charactersState.data[0]?.nextScreenNav,
        name: searchNameValue,
        status: selectedStatusValue,
      };

      dispatch(fetchCharacters(payload));
    }
  };

  const handleOnRefresh = () => {
    if (charactersState.status !== 'loading') {
      const payload = {
        page: '1',
        name: searchNameValue,
        status: selectedStatusValue,
      };
      dispatch(fetchCharacters(payload));
    }
  };

  const handleOnchange = (el: string) => {
    setSearchNameValue(el);
    if (el.length > 1) {
      const updatedSearch = dataList.filter((item: CharacterResultType) =>
        item.name.toLowerCase().includes(el.toLowerCase()),
      );
      setDataList(updatedSearch);
    } else {
      setDataList(charactersState?.data);
    }
  };

  const handleOnPressChecker = (item: AvailableStatusType) => {
    const itemToEdit = item;
    const updatedData = [...filterStatusData].map(el => {
      if (el.name === itemToEdit.name) {
        el.isFiltering = !el.isFiltering;
        setSelectedStatusValue(itemToEdit.name);
        const payload = {
          page: '1',
          name: searchNameValue,
          status: el.isFiltering ? itemToEdit.name : '',
        };
        dispatch(resetCharacters());
        dispatch(fetchCharacters(payload));
      } else {
        el.isFiltering = false;
      }
      return el;
    });
    setFilterStatusData(updatedData);
  };

  return (
    <View style={styles.container}>
      <SearchInput
        iconOnPress={() => {
          setModalVisible(true);
        }}
        placeholder={'Search by name'}
        value={searchNameValue}
        onChangeText={(text: string) => handleOnchange(text)}
        returnKeyType="search"
        autoFocus={false}
        style={{marginHorizontal: spacing.xxsmall}}
      />

      <View style={styles.content}>
        {filterStatusData.map((item, index) => (
          <View key={index}>
            {item.isFiltering === true && (
              <View style={styles.searchTitle}>
                <H6 semiBold color={colors.white}>
                  {item.name}
                </H6>
              </View>
            )}
          </View>
        ))}
      </View>
      {settingsState.status !== 'loading' && (
        <FlatList
          data={formatFlatListGridData(dataList, number())}
          numColumns={number()}
          renderItem={renderItem}
          emptyListText="Your search was not found"
          onEndReached={handleOnEndReached}
          onRefresh={handleOnRefresh}
          refreshing={charactersState.status === 'loading'}
          keyExtractor={(_: any, index: number) => {
            return index.toString() ?? '';
          }}
        />
      )}

      <Modal
        isVisible={modalVisible}
        title={'Filter by status'}
        onPressClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContent}>
          {filterStatusData.map((item, index) => {
            return (
              <Checker
                onPressChecker={() => {
                  handleOnPressChecker(item), setSelectedStatusValue(item.name);
                }}
                key={index}
                checker={item.isFiltering}
                text={item.name}
              />
            );
          })}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? spacing.large : spacing.xxsmall,
  },
  cardContainer: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    marginLeft: spacing.xxxsmall,
  },
  searchTitle: {
    marginRight: spacing.xxsmall,
    backgroundColor: colors.primaryColor,
    borderRadius: 2,
    paddingHorizontal: 2,
  },
  modalContent: {
    paddingHorizontal: spacing.xsmall,
  },
});

export default Characters;
