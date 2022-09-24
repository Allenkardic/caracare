import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Switch} from '../../components';
import {useAppDispatch, RootState} from '../../redux';
import {fetchSettings} from '../../redux/slice';
import {spacing} from '../../constants';

function Settings() {
  const dispatch = useAppDispatch();

  const settingsState = useSelector((state: RootState) => state.settings);
  const [isEnabled, setIsEnabled] = useState(
    settingsState.data.isCharacterScreenGrid,
  );
  const [isDarkMode, setIsDarkMode] = useState(
    settingsState.data.theme === 'dark' ? true : false,
  );

  const toggleSwitch = () =>
    setIsEnabled((previousState: boolean) => !previousState);

  const toggleSwitchTheme = () =>
    setIsDarkMode((previousState: boolean) => !previousState);

  useEffect(() => {
    let payload = {
      theme: isDarkMode ? 'dark' : 'light',
      isCharacterScreenGrid: isEnabled,
    };
    dispatch(fetchSettings(payload));
  }, [isEnabled, isDarkMode]);

  return (
    <View style={styles.container}>
      <Switch
        label="Grid character screen"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Switch
        label="Enable dark mode"
        onValueChange={toggleSwitchTheme}
        value={isDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.xxsmall,
    marginTop: Platform.OS === 'android' ? spacing.medium : spacing.small,
  },
});

export default Settings;
