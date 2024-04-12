import NewPass from '@/features/Auth/new-pass';
import { Suspense } from 'react';

const NewPassPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewPass />;
    </Suspense>
  );
};
export default NewPassPage;
