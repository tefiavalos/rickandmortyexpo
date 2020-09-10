/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

let store = generateStore()
let client = new ApolloClient({
    uri:"https://rickandmortyapi.com/graphql"
})

let WithStore = () => <Provider store={store}><App /></Provider>
let WithApollo = () => <ApolloProvider client={client}><WithStore></WithStore></ApolloProvider>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

AppRegistry.registerComponent(appName, () => WithApollo);
