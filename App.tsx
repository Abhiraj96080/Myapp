/**

 * Sample React Native App

 * https://github.com/facebook/react-native

 *

 * @format

 */



import React from 'react';

import type { PropsWithChildren } from 'react';

import {

  SafeAreaView,

  ScrollView,

  StatusBar,

  StyleSheet,

  Text,

  useColorScheme,

  View,

} from 'react-native';

import Article from './Article';

const App = () => {
  return (
    <>
      <Article />
    </>
  );
};


const styles = StyleSheet.create({
  container: {},
});

export default App;