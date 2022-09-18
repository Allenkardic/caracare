import React from 'react';

import {useTheme} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

import {colors, spacing, borderRadius} from '../constants';
import {type RadioPickerModalType} from '../types';

import {RadioPicker} from './';

interface IProps {
  isVisible: boolean;
  onSelect: () => any;
  toggleModal: () => any;
  height?: number | string;
  containerMarginTop?: number;
  containerMarginBottom?: number;
  data: any;
}

export default function SJModal(props: IProps) {
  const {
    isVisible,
    toggleModal,
    containerMarginTop,
    containerMarginBottom,
    onSelect,
    data,
  } = props;
  const theme = useTheme();
  const styles = useStyles({theme, containerMarginTop, containerMarginBottom});
  const [revampedData, setRevampedData] = React.useState(data);

  const handleSelect = (item: RadioPickerModalType) => {
    const updatedValues: RadioPickerModalType[] = [...revampedData].map(
      (el, index) => {
        if (el.label === item.label) {
          el.isSelected = true;
        } else {
          el.isSelected = false;
        }

        return el;
      },
    );

    setRevampedData(updatedValues);
    onSelect(updatedValues);
  };

  return (
    <View>
      <Modal
        coverScreen={true}
        isVisible={isVisible}
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        backdropOpacity={0.8}
        onBackdropPress={() => toggleModal()}
        style={[styles.modalContainer]}>
        <View style={styles.container}>
          {data.map((item: RadioPickerModalType, index: number) => (
            <RadioPicker
              key={index}
              onPress={() => {
                onSelect;
                handleSelect(item);
              }}
              isSelected={item.isSelected}
              text={item.label}
            />
          ))}
        </View>
      </Modal>
    </View>
  );
}

const useStyles = (props: {
  theme: any;
  containerMarginTop?: number;
  containerMarginBottom?: number;
}) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: 'transparent',
      marginHorizontal: spacing.small,
    },
    container: {
      backgroundColor: colors.white,
      borderRadius: borderRadius.small,
      paddingHorizontal: spacing.xxsmall,
      marginTop: props.containerMarginTop ? props.containerMarginTop : 0,
      marginBottom: props.containerMarginBottom
        ? props.containerMarginBottom
        : 0,
    },
  });
