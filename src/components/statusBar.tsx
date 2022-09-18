import React from 'react';

import { useTheme } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
function RNStatusBar() {
  const theme = useTheme();

  return (
    <View>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
      />
    </View>
  );
}

export default React.memo(RNStatusBar);
