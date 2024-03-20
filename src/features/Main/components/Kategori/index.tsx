'use client';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { CategoryItems } from '@/constants/menu';
import Link from 'next/link';
import { FC } from 'react';

const CardKategori: FC = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center p-8 bg-white rounded-lg mt-6">
      <div className="basis-[65%] flex flex-col gap-6 justify-center">
        <h1 className="text-lg font-bold">Kategori</h1>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          {CategoryItems.map(({ id, backgroundColor, borderColor, label }) => (
            <Button
              key={id}
              asChild
              variant="outline"
              className={`flex flex-col flex-auto justify-center items-center w-28 h-24 p-4 ${backgroundColor} border-2 ${borderColor} rounded-lg`}
            >
              <Link href="">
                <Icon type={label} />
                <h1 className="text-sm mt-2">{label}</h1>
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="basis-[35%]">
        <h1 className="text-lg font-bold ml-2">My RecyEco</h1>
      </div>
    </div>
  );
};

export default CardKategori;
