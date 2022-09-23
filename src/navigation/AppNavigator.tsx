import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import TabNavigator from './TabNavigator';
import {LightTheme, DarkThemeSJ} from '../styles/theme';

export default function Entry() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkThemeSJ : LightTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
