import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import SearchScreen from '../search/SearchScreen';
import LibraryScreen from '../library/LibraryScreen';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const UserBottomTab: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default UserBottomTab;
