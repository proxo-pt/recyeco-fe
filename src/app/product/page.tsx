import { Suspense } from 'react';
import ProductPage from '@/features/Product';

const Product = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPage />;
    </Suspense>
  );
};

export default Product;
