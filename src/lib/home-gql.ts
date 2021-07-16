import { createClient } from '../../generated/homeGql/createClient';
import { request } from 'graphql-request';

export const IotexClient = createClient({
  fetcher: ({ query, variables }) => request('https://nsv3-hasura.iotex.io/v1/graphql', query, variables).then((data) => ({ data }))
});
