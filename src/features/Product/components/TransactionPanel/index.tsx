import React, { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getAssetUrl } from '@/lib/utils';

const TransactionPanel: FC = () => {
  return (
    <div className="border-t-2 sticky bottom-0 bg-white mt-2">
      <div className="flex justify-between items-center container mx-auto px-6 py-3">
        <div className="flex gap-3 items-center">
          <div className="relative w-12 h-12 rounded-xl border">
            <Image
              src={getAssetUrl('/img/dummy-sampah.jpg')}
              layout="fill"
              objectFit="cover"
              alt="gambar sampah"
              className="rounded-xl"
            />
          </div>
          <h2>
            Tittle : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
        <div>
          <div className="text-sm text-gray-500">Harga:</div>
          <div>Rp. 12000</div>
        </div>
        <div className="flex gap-3">
          <Button className="w-40 h-12 hover:bg-transparent text-recyeco-primary bg-transparent border-2 border-recyeco-primary rounded-xl">
            + Keranjang
          </Button>
          <Button className="w-40 h-12 hover:bg-recyeco-primary bg-recyeco-primary rounded-xl">
            Beli
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPanel;
