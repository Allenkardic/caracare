import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import TabNavigator from './TabNavigator';
import OnboardingRoutes from '../navigation/stacks/onboardingStack';

// theme
import {LightTheme, DarkThemeSJ} from '../styles/theme';

export default function Entry() {
  const scheme = useColorScheme();

  const userAuth: boolean = false;
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkThemeSJ : LightTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
