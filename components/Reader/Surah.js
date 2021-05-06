import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AudioItem from './AudioItem';
import {useTheme} from '@react-navigation/native';
import Heart from '../../assets/svg/heart';
import FavHeart from '../../assets/svg/FavHeart';
import {AddSurahFav, RemoveSurahFav} from '../../store/actions';
import {useSelector, useDispatch} from 'react-redux';

const Surah = ({surah}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const surahsFavourites = useSelector(state => state.surahsFavourites);
  const [favourite, setFavourite] = React.useState(false);
  let isFav = surahsFavourites.map(item => item.id == surah.id);

  React.useEffect(() => {
    if(isFav.includes(true)){
      setFavourite(true);
    }
  },[]);

  const handleFavourite = () => {
    // remove from favourite
    if (favourite) {
      setFavourite(!favourite);
      dispatch(RemoveSurahFav(surah.id));

      // add to favourite
    } else {
      setFavourite(!favourite);

      if (isFav.includes(true)) {
        return;
      }
      dispatch(AddSurahFav(surah));
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondry,
        paddingTop: 20,
      }}>
      {/* start title  */}
      <View
        style={{
          flexDirection: 'row-reverse',
          marginVertical: 10,
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Tajawal-Medium',

            fontSize: 16,
            color: '#333',
          }}>
          {surah.name + ' - ' + surah.rewaya}
        </Text>
        <TouchableOpacity onPress={handleFavourite}>
          {favourite ? <FavHeart /> : <Heart />}
        </TouchableOpacity>
      </View>

      {/* start audio list  */}
      <FlatList
        data={surah.surasData}
        renderItem={({item, index}) => (
          <AudioItem
            key={item.id}
            index={index}
            surahData={item}
            name={surah.name}
            rewaya={surah.rewaya}
            uid={surah.id}
          />
        )}
      />
    </View>
  );
};

export default Surah;
