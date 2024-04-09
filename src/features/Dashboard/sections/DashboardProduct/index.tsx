import { FC } from 'react';
import React from 'react';
import { DataTableProducts } from '../../components/DataTableProduk';

const DashboardProduct: FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h1 className="text-xl font-bold">Verifikasi Produk</h1>
      <DataTableProducts />
    </div>
  );
};

export default DashboardProduct;
