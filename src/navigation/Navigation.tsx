import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/NavigationUtils';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../features/auth/SplashScreen';
import MoodScanerScreen from '../features/moodscaner/MoodScanerScreen';
import UserBottomTab from '../features/tabs/UserBottomTab';
import SharedTransition from '../features/tabs/SharedTransition';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MoodScanner" component={MoodScanerScreen} />
        <Stack.Screen name="UserBottomTab" component={SharedTransition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
