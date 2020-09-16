import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

import Navigator from './navigation/Navigator'

let store = generateStore()
let client = new ApolloClient({
    uri:"https://rickandmortyapi.com/graphql"
})


export default function App() {
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
    </ApolloProvider> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
