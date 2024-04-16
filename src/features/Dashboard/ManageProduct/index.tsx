'use client';
import { FC, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { getToken } from '@/lib/storage';
import { DataTableProducts } from '../components/DataTableProduk';

const ManageProductPage: FC = () => {
  const token = getToken();

  useEffect(() => {
    if (!token) {
      redirect('/');
    }
  });
  return (
    <div className="bg-white p-4 rounded-xl">
      <h1 className="font-semibold mb-2">Manajemen Produk</h1>
      <DataTableProducts />
    </div>
  );
};

export default ManageProductPage;
