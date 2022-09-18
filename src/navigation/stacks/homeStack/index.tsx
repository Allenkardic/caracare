import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import stack from '../../../constants/routes';

import {
  Characters,
  CharacterDetails,
  AddCharacter,
  Settings,
} from '../../../screens/home';

const {characters, characterDetails, addCharacter, settings} = stack.stack;

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
          title: 'Characters',
        })}
        name={characters}
        component={Characters}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: false,
        })}
        name={characterDetails}
        component={CharacterDetails}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          title: 'Add Characters',
        })}
        name={addCharacter}
        component={AddCharacter}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          title: 'Settings',
        })}
        name={settings}
        component={Settings}
      />
    </Stack.Navigator>
  );
}

export default OnboardingRoutes;
