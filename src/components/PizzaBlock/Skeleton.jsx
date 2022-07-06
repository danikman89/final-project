import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="134" cy="136" r="125" />
    <rect x="1" y="279" rx="10" ry="10" width="280" height="19" />
    <rect x="0" y="312" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="410" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="408" rx="21" ry="21" width="152" height="45" />
  </ContentLoader>
);
