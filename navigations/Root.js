import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {
  NavigationContainer,
  DefaultTheme,
  useTheme,
  useNavigation
} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native'

import HomeScreen from '../screens/Home';
import QuranBookScreen from '../screens/QuranBook';
import ReaderScreen from '../screens/Reader';
import FavScreen from '../screens/fav';

import Player from '../components/trackPlayer';

import Logo from '../assets/svg/logo';
import Heart from '../assets/svg/heart';
import Book from '../assets/svg/book';
import Muslem from '../assets/svg/muslem';
import Microphone from '../assets/svg/microphone';

import {useSelector, useDispatch} from 'react-redux';

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00B06E',
    secondry: '#ECF1F4',
    white: '#fff',
  },
};

const Stack = createStackNavigator();

const HomeStack = () => {
  const media = useSelector(state => state.media);
  const navigation = useNavigation();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#00B06E',
          headerTitle: () => <Logo />,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('FavScreen')}>
              <Heart />
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reader" component={ReaderScreen} />
        <Stack.Screen name="FavScreen" component={FavScreen} />
      </Stack.Navigator>
      {media.length > 0 && <Player />}
    </>
  );
};
const QuranBookStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#00B06E',
        headerTitle: () => <Logo />,
        headerRight: () => <Heart />,
      }}>
      <Stack.Screen name="QuranBook" component={QuranBookScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Bar = () => {
  const {colors} = useTheme();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#00B06E',
          inactiveTintColor: '#9D9D9D',
        }}>
        <Tab.Screen
          name="الرئيسية"
          component={HomeStack}
          options={{
            title: '',
            tabBarIcon: ({size, focused, color}) => {
              return <Microphone color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="المصحف"
          component={QuranBookStack}
          options={{
            title: '',
            tabBarIcon: ({size, focused, color}) => {
              return <Book color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default () => {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={light}>
          <Bar />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppearanceProvider>
  );
};
