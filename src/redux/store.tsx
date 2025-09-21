import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import financesSlice from './reducers/financesSlice';

const reducers = combineReducers({
    finances: financesSlice
});

const persistConfig = {
    key: 'primary',
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;

console.log('Initial state', store.getState());

store.subscribe(() => {
    console.log('Updated state', store.getState());
});