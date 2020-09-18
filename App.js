import React from 'react';

import { Provider } from 'react-redux';
import generateStore from './redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import Navigator from './navigation/Navigator'

let store = generateStore()
let client = new ApolloClient({
    uri:"https://rickandmortyapi.com/graphql"
})


const App = () => {
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
    </ApolloProvider> 
    
  );
}
export default App
