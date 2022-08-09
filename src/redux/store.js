import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './contacts/reducer';
import { persistConfig, middleware } from './middleware';

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, reducer),
  },
  middleware,
});

export const persistor = persistStore(store);
