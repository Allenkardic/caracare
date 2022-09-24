import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';

import TabNavigator from './TabNavigator';
import {LightTheme, DarkThemeSJ} from '../styles/theme';

export default function Entry() {
  const {theme} = useSelector((state: RootState) => state.settings.data);
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkThemeSJ : LightTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
