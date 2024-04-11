import { FC } from 'react';
import { DataTableProducts } from '../../components/DataTableProduk';
import { useProductData } from '../../components/DialogTambahProduk/hooks';

const ManageProduct: FC = () => {
  const { data: productData, isLoading } = useProductData();
  if (!isLoading) {
    console.log('Yuhu', productData);
  }

  return (
    <div className="bg-white p-4 rounded-xl">
      <DataTableProducts />
    </div>
  );
};

export default ManageProduct;
