import { combineReducers } from 'redux';

import bookingReducer from './slices/bookingSlice';

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
