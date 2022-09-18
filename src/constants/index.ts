import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export {default as colors} from './colors';

export {default as layout} from './layout';
export {default as routes} from './routes';

export {default as spacing} from './spacing';
export {default as borderRadius} from './borderRadius';
export {default as boxWithSmallShadow} from './boxWithSmallShadow';
export {default as boxWithShadow} from './boxWithShadow';
export {default as boxWithBigShadow} from './boxWithBigShadow';
export {default as fontSize} from './fontSize';

export const fontFamily = 'Montserrat-Regular';
export const fontFamilyLight = 'Montserrat-Light';
export const fontFamilyBold = 'Montserrat-Bold';
export const fontFamilySemiBold = 'Montserrat-SemiBold';

export const HP = hp;
export const WP = wp;