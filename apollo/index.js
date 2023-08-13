import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { REACT_APP_BACKEND_URL, REACT_APP_ACCESS_TOKEN } from '@env';

const httpLink = createHttpLink({
  uri: REACT_APP_BACKEND_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = REACT_APP_ACCESS_TOKEN;

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
