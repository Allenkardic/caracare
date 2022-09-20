import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Card,
  EmptyCard,
  FlatList,
  SearchInput,
  Modal,
  H3,
  Checker,
  H6,
} from '../../components';
import {
  borderRadius,
  colors,
  formatFlatListGridData,
  routes,
  spacing,
  statusFilter,
} from '../../constants';
import {useAppDispatch, RootState} from '../../redux';
import {fetchCharacters, addFavouriteCharacters} from '../../redux/slice';
import stack from '../../constants/routes';

import {characterResultType} from '../../types';

function Characters({navigation}) {
  const {characterDetails} = stack.stack;

  const dispatch = useAppDispatch();
  const charactersState = useSelector((state: RootState) => state.characters);

  const [dataList, setDataList] = useState([]);
  const [grid, setGrid] = useState(true);
  const [page, setPage] = useState(1);
  const [numColumns, setNumColumns] = useState(2);
  const [searchNameValue, setSearchNameValue] = React.useState('');
  const [selectedStatusValue, setSelectedStatusValue] = React.useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [activateMultipleSearch, setActivateMultipleSearch] = useState(false);
  const [filterStatusData, setFilterStatusData] = useState([
    {name: 'Alive', isFiltering: false},
    {name: 'Dead', isFiltering: false},
    {name: 'unknown', isFiltering: false},
  ]);

  React.useEffect(() => {
    const payload = {
      page: 1,
      name: searchNameValue,
      status: '',
    };
    dispatch(fetchCharacters(payload));
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
      // dispatch(fetchCharacters(page + 1 ));
    }
  };

  const handleOnRefresh = () => {
    if (charactersState.status !== 'loading') {
      setPage(1);
      // dispatch(fetchCharacters(1));
    }
  };

  const handleOnchange = (el: any) => {
    setSearchNameValue(el);

    if (el.length > 1) {
      const updatedSearch = dataList.filter((item: any) =>
        item.name.toLowerCase().includes(el.toLowerCase()),
      );
      setDataList(updatedSearch);
    } else {
      setDataList(charactersState.data);
    }
  };

  const handleOnPressChecker = (item: any) => {
    const itemToEdit = item;
    const updatedData = [...filterStatusData].map(el => {
      if (el.name === itemToEdit.name) {
        el.isFiltering = !el.isFiltering;
        const payload = {
          page: 1,
          name: searchNameValue,
          status: itemToEdit.name,
        };
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
          setModalVisible(true), setActivateMultipleSearch(true);
        }}
        placeholder={'Search country'}
        value={searchNameValue}
        onChangeText={(text: string) => handleOnchange(text)}
        style={{marginHorizontal: spacing.xxsmall}}
      />

      <View style={{flexDirection: 'row', marginLeft: spacing.xxxsmall}}>
        {filterStatusData.map((item, index) => (
          <View key={index}>
            {item.isFiltering === true && (
              <View
                style={{
                  marginRight: spacing.xxsmall,
                  backgroundColor: colors.primaryColor,
                  borderRadius: 2,
                  paddingHorizontal: 2,
                }}>
                <H6 semiBold color={colors.white}>
                  {item.name}
                </H6>
              </View>
            )}
          </View>
        ))}
      </View>
      <FlatList
        data={formatFlatListGridData(dataList, numColumns)}
        numColumns={numColumns}
        renderItem={renderItem}
        emptyListText="No character have been added yet"
        onEndReached={handleOnEndReached}
        onRefresh={handleOnRefresh}
        refreshing={charactersState.status === 'loading'}
        keyExtractor={item => item.id.toString() ?? ''}
      />

      <Modal
        isVisible={modalVisible}
        title={'Filter by status'}
        onPressClose={() => {
          setModalVisible(false), setActivateMultipleSearch(false);
        }}>
        <View style={{paddingHorizontal: spacing.xsmall}}>
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
  },
});

export default Characters;
