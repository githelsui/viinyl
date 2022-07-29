import {applyMiddleware} from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './components/Reducers/RootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'main-root',
    storage,
}

// const persistedReducer=persistReducer(persistConfig, rootReducer);

// const store=configureStore(persistedReducer, applyMiddleware());

// const Persistor=persistStore(store);

// export {Persistor};
// export default store;