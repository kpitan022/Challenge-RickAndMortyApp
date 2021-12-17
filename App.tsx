/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './src/provider';
import MyStack from './src/navigator/Stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const App = () => {


  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <MyStack />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
