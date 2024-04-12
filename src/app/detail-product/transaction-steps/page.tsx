import TransactionStep from '@/features/DetailProduct/sections/TransactionSteps';
import { Suspense } from 'react';

const TransactionSteps = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransactionStep />;
    </Suspense>
  );
};
export default TransactionSteps;
