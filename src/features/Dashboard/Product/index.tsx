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
  return <ManageProduct />;
};

export default Product;
