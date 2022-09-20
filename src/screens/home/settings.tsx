import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Switch} from '../../components';
import {useAppDispatch, RootState} from '../../redux';
import {useSelector} from 'react-redux';
import {fetchSettings} from '../../redux/slice';
import {spacing} from '../../constants';

function Settings() {
  const dispatch = useAppDispatch();

  const settingsState = useSelector((state: RootState) => state.settings);
  const [isEnabled, setIsEnabled] = useState(
    settingsState.data.isCharacterScreenGrid,
  );

  const toggleSwitch = () =>
    setIsEnabled((previousState: boolean) => !previousState);

  useEffect(() => {
    let payload = {
      appMode: settingsState.data.appMode,
      isCharacterScreenGrid: isEnabled,
    };
    dispatch(fetchSettings(payload));
  }, [isEnabled]);

  return (
    <View style={styles.container}>
      <Switch
        label="Grid character screen"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.xxsmall,
    marginTop: spacing.small,
  },
});

export default Settings;
