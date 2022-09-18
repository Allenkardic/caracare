import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IProps {
  numColumns: number;
}

export default function EmptyCard(props: IProps) {
  const {numColumns} = props;
  const styles = useStyles({numColumns});

  return <View style={styles.container} />;
}

const useStyles = (props: {numColumns: number}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
