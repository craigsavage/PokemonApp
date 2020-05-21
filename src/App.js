import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { PokemonContainer } from './containers/PokemonContainer';


function App() {
  // Pass your GraphQL endpoint to uri
  const client = new ApolloClient({ uri: 'https://graphql-pokemon.now.sh/' });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>

  );
}

export default App;

/*
Notes ~~

Apollo esentially allows us to hit a Graphql server
*/