import {createSlice} from '@reduxjs/toolkit';
import {searchMovies} from '../api/movies';

const MoviesSearchSlice = createSlice({
  name: 'movie_search',
  initialState: {
    data: [],
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(searchMovies.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default MoviesSearchSlice.reducer;
