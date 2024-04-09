import { FC } from 'react';
import { TambahProduk } from '../../components/DialogTambahProduk';
import { DataTableProducts } from '../../components/DataTableProduk';

const ManageProduct: FC = () => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="flex items-center justify-end">
        <TambahProduk />
      </div>
      <div className="mt-8">
        <DataTableProducts />
      </div>
    </div>
  );
};

export default ManageProduct;
