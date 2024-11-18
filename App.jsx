import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RootStack from './screens/RootStack';
import {store} from './store/store';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import analytics from '@react-native-firebase/analytics';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
