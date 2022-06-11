import React, { lazy, Suspense } from 'react';

const LazyInterviewHistoryQuestions = lazy(() => import('./InterviewHistoryQuestions'));

const InterviewHistoryQuestions = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInterviewHistoryQuestions {...props} />
  </Suspense>
);

export default InterviewHistoryQuestions;
