import React from 'react';
import {
  View
} from 'react-native';

import Header from './src/components/Header';
import CarList from './src/components/CarList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Cars'}/>
      <CarList />
    </View>
  );
};

export default App;
