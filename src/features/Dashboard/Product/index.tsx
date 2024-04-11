'use client';
import { getToken } from '@/lib/storage';
import ManageProduct from '../sections/ManageProduct';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const Product = () => {
  const token = getToken();

  useEffect(() => {
    if (!token) {
      redirect('/');
    }
  });
  return (
    <>
      <h1 className="text-2xl font-bold mb-7">Product Page</h1>
      <ManageProduct />
    </>
  );
};

export default Product;
