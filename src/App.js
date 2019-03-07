import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const activeState = {
  active: false,
};

const getActiveQuery = gql`
  {
    active @client
  }
`;

const toggleActive = ({ data, client }) => {
  client.writeData({ data: { active: !data.active } });
};

const client = new ApolloClient({
  clientState: {
    defaults: {
      ...activeState,
    },
  },
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={getActiveQuery}>
          {({ data, client }) => (
            <button
              type="button"
              onClick={() => toggleActive({ data, client })}
            >
              {data.active ? 'active' : 'inactive'}
            </button>
          )}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
