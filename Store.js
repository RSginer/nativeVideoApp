import { createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';

import reducer from './reducers/videos';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };
