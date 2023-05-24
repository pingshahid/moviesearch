import {ActivityIndicator, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchMovies} from '../api/movies';
import {SearchBar} from 'react-native-elements';
import MovieAutoCompleteResultComponent from './MovieAutoCompleteResultComponent';

const MovieScreenSearchComponent = () => {
  const dispatch = useDispatch();
  const root = useSelector(state => state);
  const movie = root?.movie_search;
  const [search] = useState(null);

  const onTextChange = search => {
    dispatch(searchMovies(search));
  };

  const onClear = () => {
    console.log('event');
  };

  useEffect(() => {}, []);
  return (
    <View>
      <SearchBar
        placeholder="Search Movies"
        onClear={onClear}
        value={search}
        onChangeText={onTextChange}
      />
      {movie?.isLoader ? (
        <ActivityIndicator animating={movie?.isLoader} color="black" />
      ) : (
        <MovieAutoCompleteResultComponent movie={movie} />
      )}
    </View>
  );
};

export default MovieScreenSearchComponent;
