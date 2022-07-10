import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './reducers/UserSlice';

const rootReducers = combineReducers({
  UserReducer
})


export const store = configureStore({
  reducer: rootReducers
})

// export type AppStore = typeof store.getState 
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch