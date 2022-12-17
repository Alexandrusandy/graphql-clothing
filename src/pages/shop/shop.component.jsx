import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route exact path={``} element={<CollectionsOverviewContainer />} />
      <Route path={`/:collectionId`} element={<CollectionPage />} />
    </Routes>
  </div>
);

export default ShopPage;
