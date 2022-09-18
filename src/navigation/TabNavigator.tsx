import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute, useTheme} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {Icon, Text} from '../components';
import {HP, fontSize, colors as conColors} from '../constants';

import HomeRoutes from './stacks/homeStack';
import FavouriteRoutes from './stacks/favouriteStack';

const Tab = createBottomTabNavigator();

function CustomeIcon(props: any) {
  const {colors} = useTheme();
  const {
    onPress,
    item: {label, activeIcon, inactiveIcon},

    accessibilityState: {selected},
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        ...styles.customeIconContainer,
      }}
      onPress={onPress}>
      <View style={{alignItems: 'center'}}>
        <Icon
          name={selected ? activeIcon : inactiveIcon}
          color={selected ? colors.primary : conColors.lightText}
          size={HP('3%')}
        />
        <Text
          color={selected ? colors.primary : conColors.lightText}
          style={{fontSize: RFValue(fontSize.base)}}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function BottomTab() {
  // this function decides at what screen bottom tabs are no longer visible
  const theme = useTheme();
  const bottomTabList = [
    {
      route: 'HomeRoutes',
      label: 'Home',
      component: HomeRoutes,
      inactiveIcon: 'home-outline',
      activeIcon: 'home',
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
    },
    {
      route: 'FavouriteRoutes',
      label: 'Favourite',
      inactiveIcon: 'wallet-outline',
      activeIcon: 'wallet',
      component: FavouriteRoutes,
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
    },
  ];

  //   the bottom tab bars will only be visible on these routes
  function getTabBarVisibility(route: any) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    if (routeName === 'Home' || routeName === 'Favourite') {
      return 'flex';
    }
    return 'none';
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {bottomTabList.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={({route}) => ({
              tabBarShowLabel: false,
              tabBarButton: props => <CustomeIcon {...props} item={item} />,
              tabBarStyle: {
                display: getTabBarVisibility(route),
                height: Platform.OS === 'android' ? HP('8%') : HP('10%'),
                backgroundColor: theme.colors.background,
              },
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  customeIconContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});
