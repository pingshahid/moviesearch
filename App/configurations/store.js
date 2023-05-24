import {configureStore} from '@reduxjs/toolkit';
import MoviesSearchSlice from '../slices/MoviesSearchSlice';
export const store = configureStore({
  reducer: {
    movie_search: MoviesSearchSlice,
  },
});
