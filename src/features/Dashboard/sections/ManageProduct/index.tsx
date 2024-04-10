import { FC } from 'react';
import { DataTableProducts } from '../../components/DataTableProduk';

const ManageProduct: FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <DataTableProducts />
    </div>
  );
};

export default ManageProduct;
