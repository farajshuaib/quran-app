import React from 'react';
import {View, Text, FlatList, ActivityIndicator, Touchable} from 'react-native';
import {loadReaders} from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import ReaderItem from '../components/Home/ReaderItem';
import Filter from '../components/Home/Filter';

const Home = props => {
  const dispatch = useDispatch();
  const namesOfReaders = useSelector(state => state.namesOfReaders);
  const [search, setSearch] = React.useState('');
  const [readers, setReaders] = React.useState([]);
  const [selected, setSelected] = React.useState('');
  const [isFetching, setisFetching] = React.useState(false);
  const {colors} = useTheme();

  React.useEffect(async () => {
    await dispatch(loadReaders());
  }, []);
  const onRefresh = async () => {
    setisFetching(true)
    await dispatch(loadReaders());
    setisFetching(false)
  };
  React.useEffect(async () => {
    let fillterReaders = namesOfReaders.filter(
      item => item.name.includes(search) && item.rewaya.includes(selected),
    );
    await setReaders(fillterReaders);
  }, [namesOfReaders, search, selected]);

  const handleSerachChange = value => {
    setSearch(value);
  };

  const handleSelected = value => {
    setSelected(value);
  };

  if (namesOfReaders.length > 0) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.secondry,
          paddingHorizontal: 20,
        }}>
        <Filter
          search={search}
          selected={selected}
          handleSerachChange={handleSerachChange}
          handleSelected={handleSelected}
        />
        {readers.length > 0 ? (
          <FlatList
            data={readers}
            showsVerticalScrollIndicator={false}
            onRefresh={() => onRefresh()}
            refreshing={isFetching}
            renderItem={({item}, index) => <ReaderItem key={index} {...props} item={item} />}
          />
        ) : (
          <Text
            style={{
              fontFamily: 'Tajawal-Medium',
              textAlign: 'center',
              marginTop: 15,
              color: '#6d6d6d',
            }}>
            لا يوجد نتائج
          </Text>
        )}
      </View>
    );
  } else {
    return (
      <ActivityIndicator
        size="large"
        style={{marginVertical: 40}}
        color={colors.primary}
      />
    );
  }
};

export default Home;
