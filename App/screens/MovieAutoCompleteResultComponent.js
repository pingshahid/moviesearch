import React from 'react';

import {FlatList, View} from 'react-native';
import MovieDetailsComponent from './MovieDetailsComponent';

const MovieAutoCompleteResultComponent = props => {
  const {books} = props;

  return (
    <View>
      {books?.data?.length > 0 && (
        <FlatList
          data={books?.data}
          renderItem={({index}) => (
            <MovieDetailsComponent book={books?.data[index]} />
          )}
        />
      )}
    </View>
  );
};

export default MovieAutoCompleteResultComponent;
