import React from 'react';

import {FlatList, View} from 'react-native';
import MovieDetailsComponent from './MovieDetailsComponent';

const MovieAutoCompleteResultComponent = props => {
  const {movie} = props;

  return (
    <View>
      {movie?.data?.length > 0 && (
        <FlatList
          data={movie?.data}
          renderItem={({index}) => (
            <MovieDetailsComponent movie={movie?.data[index]} />
          )}
        />
      )}
    </View>
  );
};

export default MovieAutoCompleteResultComponent;
