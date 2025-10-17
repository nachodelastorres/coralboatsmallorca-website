// Importing necessary hooks from react-redux
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Importing types from the redux store and root reducer
import { AppDispatch } from '../redux/store';
import { RootState } from '../redux/rootReducer';

// Custom hook for dispatching actions with the correct AppDispatch type
export const useAppDispatch: () => AppDispatch = useDispatch;

// Custom hook for selecting state from the store with the correct RootState type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
