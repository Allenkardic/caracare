// Use throughout your app instead of plain `useDispatch` and `useSelector`
import { useSelector } from 'react-redux';

import type { RootState } from '../redux/store';
import type { TypedUseSelectorHook } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
