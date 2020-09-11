import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main'

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

let store = generateStore()
let client = new ApolloClient({
    uri:"https://rickandmortyapi.com/graphql"
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/* AppRegistry.registerComponent(appName, () => WithApollo);
 */
export default function App() {
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <Main></Main>
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
