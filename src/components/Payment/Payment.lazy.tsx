import React, { lazy, Suspense } from 'react';

const LazyPayment = lazy(() => import('./Payment'));

const Payment = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPayment {...props} />
  </Suspense>
);

export default Payment;
