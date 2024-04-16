import React from 'react';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { getAssetUrl } from '@/lib/utils';
import { TransactionStepItem } from '@/constants/transactionStep';

const TransactionStep = () => {
  return (
    <div className="w-full container mx-auto px-6 py-2">
      <div className="my-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/product">Detail Produk</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tahap-tahap Transaksi</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-wrap justify-center gap-24 pt-6 pb-12">
        {TransactionStepItem.map(({ id, title, img, desc }) => (
          <div
            key={id}
            className="w-full flex flex-col justify-center items-center lg:max-w-sm"
          >
            <div className="self-start flex justify-center items-center space-x-2">
              <h1 className="flex justify-center items-center size-6 p-6 bg-[#B5BBC5] rounded-full">
                {id}
              </h1>
              <p className="font-semibold">{title}</p>
            </div>
            <Image
              src={getAssetUrl(`/imgs/${img}`)}
              width={125}
              height={125}
              alt={`Transaction Step ${id}`}
            />
            <p className="text-center">&quot;{desc}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionStep;
