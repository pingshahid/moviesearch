import React, {useMemo} from 'react';

import {View, Text} from 'react-native';
import {styles} from '../styleSheet/BookInfoStylesheet';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../envs/movies.json';

const MovieDetailsComponent = props => {
  const {movie} = props;
  const url = useMemo(() => IMAGE_BASE_URL + movie.poster_path, [movie]);

  return (
    <View style={styles.alingCenter}>
      <View style={styles.container}>
        <View>
          <FastImage
            source={require('../../assets/placeholder.png')}
            style={styles.placeHolderimage}
          />

          <FastImage
            style={styles.image}
            source={{
              uri: url,
            }}
          />
        </View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
          {movie.title || 'Not found'}
        </Text>
      </View>
    </View>
  );
};

export default MovieDetailsComponent;
