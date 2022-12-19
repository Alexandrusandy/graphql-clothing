import React from 'react';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items{
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsPageContainer = () => {
    const { collectionId } = useParams();
    const { loading, data } = useQuery(GET_COLLECTION_BY_TITLE, {
        variables: { title: collectionId }
    });
    if (loading) return <Spinner />;
    return <CollectionPage collections={data.getCollectionsByTitle} />;
};

export default CollectionsPageContainer;
