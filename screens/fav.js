import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RemoveSurahFav} from '../store/actions';
import {useTheme} from '@react-navigation/native';
import Muslem from '../assets/svg/muslem';

export default ({navigation}) => {
  const sorah = useSelector(state => state.surahsFavourites);
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.secondry,
        paddingHorizontal: 20,
        justifyContent: 'center',
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row-reverse',
            marginTop: 10,
            justifyContent: 'space-around',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          {sorah.map(item => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Reader', {Reader_id: item.id});
              }}
              style={{
                backgroundColor: colors.white,
                elevation: 7,
                padding: 15,
                borderRadius: 15,
                marginVertical: 10,
                alignItems: 'center',
                shadowColor: 'rgba(0,0,0,.8)',
              }}>
              <View
                style={{
                  borderRadius: 50,
                  borderColor: 'rgb(222, 240, 233)',
                  borderWidth: 6,
                  padding: 5,
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Muslem color={colors.primary} />
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'Tajawal-Medium',
                    textAlign: 'center',
                    color: '#6d6d6d',
                    fontSize: 17,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Tajawal-Regular',
                    textAlign: 'center',
                    color: '#9e9e9e',
                  }}>
                  {item.rewaya}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
