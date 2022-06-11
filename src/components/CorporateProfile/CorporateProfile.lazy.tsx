import React, { lazy, Suspense } from 'react';

const LazyCorporateProfile = lazy(() => import('./CorporateProfile'));

const CorporateProfile = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCorporateProfile {...props} />
  </Suspense>
);

export default CorporateProfile;
