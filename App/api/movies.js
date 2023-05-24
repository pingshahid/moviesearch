import {createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL} from '../envs/movies.json';

export const searchMovies = createAsyncThunk(
  'searchMovies',
  async searchText => {
    console.log('searchText', searchText);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmEzOGM2MGZmY2FhYzIyNGM4YTEzZGJlNjExNDZiNCIsInN1YiI6IjY0NmNlZTBlNzA2YjlmMDE1NTcwMmEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7UYnmqCu74vX4fXNyqn5lnt6-TzXV-bRHGeBOfVl9iU',
    );
    console.log('searchText1', searchText);

    const url =
      API_URL +
      '?query=/' +
      searchText +
      '&include_adult=false&language=en-US&page=1';

    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    };
    console.log('searchText2', searchText);

    const res = await fetch(url, myInit);
    const final = await res.json();
    console.log('final', final);
    const array = final?.results;
    const parsedArray = [];
    array.forEach(element => {
      parsedArray.push({
        key: element?.backdrop_path,
        title: element?.title,
        poster_path: element?.poster_path,
      });
    });
    return parsedArray;
  },
);
