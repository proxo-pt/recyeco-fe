'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import TransactionPanel from './components/TransactionPanel';
import { getAssetUrl } from '@/lib/utils';
import ProfileCard from './components/ProfileCard';
import { useProductDetailData } from '../Main/hooks';
import { useSearchParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const idParam = parseInt(searchParams.get('id') ?? '');

  return (
    <Suspense fallback={<Skeleton className='w-full h-96' />}>
      <ProductDetailContent idParam={idParam} />
    </Suspense>
  );
};

const ProductDetailContent = ({ idParam }: { idParam: number }) => {
  const { data: detailProduct } = useProductDetailData(idParam);

  return (
    <>
      <div className="container mx-auto px-6 py-2">
        <div className="my-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Detail Produk</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-center gap-7">
          <div className="lg:col-span-3 col-span-4">
            <div className="relative w-full h-96">
              <Image
                src={
                  detailProduct?.foto || getAssetUrl('/img/dummy-sampah.jpg')
                }
                layout="fill"
                objectFit="cover"
                alt="gambar sampah"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2 mb-6 mt-4">
              <h1 className="text-2xl font-medium">{detailProduct?.judul}</h1>
              <div className="flex gap-7 text-sm font-light">
                <ul>
                  <li>Jenis : {detailProduct?.jenis}</li>
                </ul>
                <ul className="list-disc">
                  <li>Berat : {detailProduct?.berat}kg</li>
                </ul>
              </div>
              <div className="font-bold text-2xl text-recyeco-primary">
                {detailProduct?.harga?.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR'
                }) || 0}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Detail Produk</h2>
              <p className="text-sm">{detailProduct?.deskripsi}</p>
            </div>
          </div>
          <div className='lg:col-span-1 col-span-4'>
            <ProfileCard
              toko={detailProduct?.toko.toko}
              kontak={detailProduct?.toko.kontak}
              link_map={detailProduct?.toko.link_map}
              lokasi={detailProduct?.toko.lokasi}
            />
          </div>
        </div>
      </div>
      <TransactionPanel
        judul={detailProduct?.judul}
        foto={detailProduct?.foto}
        harga={detailProduct?.harga}
      />
    </>
  );
};

export default ProductDetail;
