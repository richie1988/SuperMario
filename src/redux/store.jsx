// store.js
import { configureStore } from '@reduxjs/toolkit';
import superheroReducer from './reducerSlice';

const store = configureStore({
  reducer: {
    superhero: superheroReducer,
  },
});

export default store;
