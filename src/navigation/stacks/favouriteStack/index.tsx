import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import stack from '../../../constants/routes';

import {Favourite} from '../../../screens/favourite';

const {favourite} = stack.stack;

const Stack = createNativeStackNavigator();
function OnboardingRoutes() {
  const theme = useTheme();
  const {onboarding} = stack.stack;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
      initialRouteName={onboarding}>
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          title: 'Favourites',
        })}
        name={favourite}
        component={Favourite}
      />
    </Stack.Navigator>
  );
}

export default OnboardingRoutes;
