import React, { lazy, Suspense } from 'react';

const LazyCandidates = lazy(() => import('./Candidates'));

const Candidates = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCandidates {...props} />
  </Suspense>
);

export default Candidates;
