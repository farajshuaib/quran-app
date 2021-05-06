import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {useColorScheme} from 'react-native-appearance';

import SearchIcon from '../../assets/svg/Search';
import { colors } from 'react-native-elements';

export default ({search, handleSerachChange, selected, handleSelected}) => {
  const readers = useSelector(state => state.namesOfReaders);
  const scheme = useColorScheme();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let optionsName = readers !== null && [
      ...new Set(readers.map(item => item.rewaya)),
    ];

    let finalOptionsName = optionsName.map(item => {
      return {
        label: item,
        value: item,
      };
    });

    finalOptionsName.unshift({
      label: 'الكل',
      value: '',
    });

    setOptions(finalOptionsName);
  }, [readers]);

  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          fontFamily: 'Tajawal-Regular',
          paddingHorizontal: 10,
          color: '#333',
        }}>
        اختر الرواية / نوع المصحف
      </Text>
      <View style={{...styles.input, paddingHorizontal: 0}}>
        <Picker
          selectedValue={selected}
          mode="dropdown"
          style={{color: '#999', marginTop: -8, marginRight: -35}}
          onValueChange={(itemValue, itemIndex) => handleSelected(itemValue)}>
          {options.map(item => (
            <Picker.Item
              fontFamily="Tajawal-Regular"
              color='#333'
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
      <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          onChangeText={handleSerachChange}
          value={search}
          placeholder="بحث بأسم القارئ"
          keyboardType="default"
          placeholderTextColor="#999"
        />
        <View  style={{marginRight: -33}}>
          <SearchIcon />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    direction: 'rtl',
    color: '#666',
    fontFamily: 'Tajawal-Regular',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
});
