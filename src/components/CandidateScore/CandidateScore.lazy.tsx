import React, { lazy, Suspense } from 'react';

const LazyCandidateScore = lazy(() => import('./CandidateScore'));

const CandidateScore = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCandidateScore {...props} />
  </Suspense>
);

export default CandidateScore;
