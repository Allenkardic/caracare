import {RadioPickerModalType} from '../types';

export function selectedRadioValue(data: RadioPickerModalType[]) {
  const manipulatedData = data.filter(el => el.isSelected === true);
  return manipulatedData[0].label;
}
