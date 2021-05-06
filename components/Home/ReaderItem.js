import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Left from '../../assets/svg/Left';
import {useTheme} from '@react-navigation/native';

export default ({navigation, item}) => {
    const {colors} = useTheme();
    return (
        <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Reader', {Reader_id: item.id})
                }}
              style={{
                backgroundColor: colors.white,
                padding: 15,
                marginVertical: 10,
                borderRadius: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                <View>
                  <Text style={{fontFamily: 'Tajawal-Medium', fontSize: 18}}>
                    {item.name}
                  </Text>
                  <Text style={{fontFamily: 'Tajawal-Medium', fontSize: 12, color: '#8d8d8d'}}>
                    {item.rewaya}
                  </Text>
                </View>
                <Left />
              </View>
            </TouchableOpacity>
    )
}