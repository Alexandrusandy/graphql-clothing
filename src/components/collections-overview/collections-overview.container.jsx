import React from 'react';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';
import { gql, useQuery } from '@apollo/client';

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => {
  const { loading, data } = useQuery(GET_COLLECTIONS);

  if (loading) return <Spinner />;
  return <CollectionsOverview collections={data.collections} />;
};

export default CollectionsOverviewContainer;
