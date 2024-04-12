import ProductDetail from '@/features/DetailProduct';
import { Suspense } from 'react';

const Product = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetail />;
    </Suspense>
  );
};

export default Product;
