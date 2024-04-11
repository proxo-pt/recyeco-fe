import { FC } from 'react';
import { DataTableProducts } from '../../components/DataTableProduk';

const ManageProduct: FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <h1 className="font-semibold mb-2">Manajemen Produk</h1>
      <DataTableProducts />
    </div>
  );
};

export default ManageProduct;
