'use client';
import { EditProduk } from '../components/DialogEditProduk';
import { HapusProduk } from '../components/DialogHapusProduk';
import { LihatProduk } from '../components/DialogLihatProduk';
import { TambahProduk } from '../components/DialogTambahProduk';
const Product = () => {
  return (
    <>
      <h1>Product Page</h1>
      <TambahProduk />
      <EditProduk />
      <HapusProduk />
      <LihatProduk />
    </>
  );
};

export default Product;
