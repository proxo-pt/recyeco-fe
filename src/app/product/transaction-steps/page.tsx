import { Suspense } from 'react';
import TransactionStep from '@/features/Product/sections/TransactionSteps';

const TransactionSteps = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransactionStep />;
    </Suspense>
  );
};
export default TransactionSteps;
