import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getAssetUrl, formatNumber } from '@/lib/utils';

const TransactionPanel: FC<{
  harga: number | undefined;
  judul: string | undefined;
  foto: any;
}> = ({ harga, judul, foto }) => {
  return (
    <div className="border-t-2 sticky bottom-0 bg-white mt-2">
      <div className="flex justify-between items-center container gap-3 mx-auto px-6 py-3">
        <div className="hidden sm:flex gap-3 items-center">
          <div className="flex-none relative w-12 h-12 rounded-xl border">
            <Image
              src={foto || getAssetUrl('/img/dummy-sampah.jpg')}
              layout="fill"
              objectFit="cover"
              alt="gambar sampah"
              className="rounded-xl"
            />
          </div>
          <h2 className="line-clamp-1">{judul}</h2>
        </div>
        <div className="flex-none">
          <div className="text-sm text-gray-500">Harga:</div>
          <div>
            {harga?.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR'
            }) || 0}
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="lg:w-44 sm:h-12 hover:bg-recyeco-primary bg-recyeco-primary rounded-xl">
            Beli
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPanel;
