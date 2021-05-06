import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {HandleMedia, ChangeMedia} from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';

import Surah from '../components/Reader/Surah';

const Reader = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  let { Reader_id } = route.params;

  const [reader, setReader] = React.useState(null);

  // fetch the surah data
  React.useEffect(() => {
    axios
      .get(`https://qurani-api.herokuapp.com/api/reciters/${Reader_id}`)
      .then(response => {
        setReader(response.data);
        dispatch(ChangeMedia(0));
        dispatch(HandleMedia(response.data.surasData));
      })
  }, [Reader_id, HandleMedia, ChangeMedia]);

  return (
    <React.Fragment>
      {reader !== null ? (
          <Surah surah={reader} />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.secondry,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
    </React.Fragment>
  );
};
export default Reader