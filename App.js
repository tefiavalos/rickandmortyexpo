import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import Navigator from './navigation/Navigator'


let store = generateStore()
let client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
})

const fetchFonts = () => {
  Font.loadAsync({
    'kufam': require('./assets/fonts/Kufam-Regular.ttf')
  })
}

const App = () => {
  let [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => {setFontLoaded(true)}}/>
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navigator></Navigator>
      </Provider>
    </ApolloProvider>

  );
}
export default App
