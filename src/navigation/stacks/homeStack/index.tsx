import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import stack from '../../../constants/routes';
import {RightNavigationIcon} from '../../../components';
import {Characters, CharacterDetails, Settings} from '../../../screens/home';

const Stack = createNativeStackNavigator();
function HomeRoutes() {
  const theme = useTheme();
  const {home, characterDetails, settings} = stack.stack;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
      initialRouteName={home}>
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          title: 'Characters',
          headerRight: () => (
            <RightNavigationIcon
              name="settings-outline"
              onPress={() => navigation.navigate(settings)}
            />
          ),
        })}
        name={home}
        component={Characters}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerShown: true,
          title: 'Character Details',
        })}
        name={characterDetails}
        component={CharacterDetails}
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

export default HomeRoutes;
