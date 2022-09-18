import React, {useState} from 'react';

import {useTheme} from '@react-navigation/native';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {reportError, uploadImage} from '../utils';

import {Icon, Image, H6} from './';

interface IProps {
  label: string;
  location: string;
  pickerOptions: {height: number; width: number};
  containerStyle?: ViewStyle;
  imageStyle?: ViewStyle;
  getFile: (url: string) => void;
}

export default function ImageUpload(props: IProps) {
  const {getFile, location, pickerOptions, containerStyle, imageStyle} = props;
  const theme = useTheme();

  const [selectedImage, setSelectedImage] = useState('');
  const [meta, setMeta] = useState({loading: false, error: '', success: ''});

  const styles = useStyles(theme);

  return (
    <TouchableOpacity
      style={{...styles.container, ...containerStyle}}
      onPress={() => {
        ImagePicker.openPicker({
          cropping: true,
          mediaType: 'photo',
          forceJpg: true,
          ...pickerOptions,
        })
          .then(data => {
            const file = Platform.select({
              android: {
                name: data.modificationDate,
                uri: data.path,
                type: data.mime,
              },
              ios: {name: data.filename, uri: data.path, type: data.mime},
            });

            setSelectedImage(file);

            setMeta({loading: true, error: '', success: ''});

            uploadImage(file, location)
              .then(res => {
                getFile(res.uploadImage.url);
                setMeta({loading: false, error: '', success: 'image uploaded'});
              })
              .catch(() => {
                setMeta({
                  loading: false,
                  error: 'Error in uploading image',
                  success: '',
                });
              });
          })
          .catch(err => {
            if (!err.code) {
              reportError(err);
            }
          });
      }}>
      {selectedImage ? (
        <View>
          <Image
            source={{uri: selectedImage.uri}}
            style={{...styles.image, ...imageStyle}}
          />
          {meta.loading && <H6>uploading ...</H6>}
        </View>
      ) : (
        <View style={styles.plus}>
          <Icon name="ios-add" color={theme.colors.primary} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const useStyles = theme =>
  StyleSheet.create({
    container: {
      padding: 2,
      marginRight: 10,
      marginBottom: 5,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      borderRadius: 4,
      borderStyle: Platform.select({ios: 'dashed', android: 'dotted'}),
      height: 200,
      width: 150,
    },
    image: {
      height: 200,
      width: 150,
    },
    plus: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
