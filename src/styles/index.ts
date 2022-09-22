import {StyleSheet, Platform} from 'react-native';

import {colors, fontFamily, fontFamilySemiBold, layout} from '../constants';

export default StyleSheet.create({
  textInput: {
    color: colors.black,
    backgroundColor: colors.ghostWhite,
    padding: 10,
    margin: 0,
    height: 40,
    width: '100%',
    fontFamily,
    borderColor: colors.ghostWhite,
    borderWidth: 0.3,
    borderRadius: 4,
    fontSize: 16,
  },
  formWithHeader: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  w170: {
    width: layout.width / 2.3,
  },
  headerBackTitleStyle: {fontFamily: fontFamilySemiBold},
  headerTitleStyle: {fontFamily: fontFamilySemiBold},
  tabBarInfoContainer: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  /** styles for image and banner forms */
  images: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  imageCard: {
    margin: 5,
    borderColor: colors.primaryColor,
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 200,
    height: 200,
    position: 'relative',
  },
  image: {
    width: 200,
    height: 200,
  },
  cancel: {
    position: 'absolute',
    zIndex: 10,
    top: -10,
    right: -10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /** styles for image and banner forms */
});
