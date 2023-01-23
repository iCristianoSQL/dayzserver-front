import {configureStore} from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userName from "./userName/reducer";

const persistConfig = {
    key: 'userName',
    storage,
  };

const persistedReducer = persistReducer(persistConfig, userName);


const store = configureStore({
    reducer: {
        user: persistedReducer,
    }
})

const persistor = persistStore(store);

export {store, persistor}
