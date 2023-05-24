import {Provider} from 'react-redux';

import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './store';
import {styles} from '../styleSheet/BookInfoStylesheet';
import MovieScreenSearchComponent from '../screens/MovieScreenSearchComponent';

export const Root = () => {
  return (
    <SafeAreaView style={styles.rootStyle}>
      <Provider store={store}>
        <MovieScreenSearchComponent />
      </Provider>
    </SafeAreaView>
  );
};
