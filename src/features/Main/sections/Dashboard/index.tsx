'use client';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import joinRecyeco from '@/assets/imgs/joinRecyeco.svg';
import { CategoryItems } from '@/constants/menu';

const Dashboard: FC = () => {
  return (
    <div className="container mx-auto flex flex-col space-y-6 p-6">
      <div className="flex justify-center items-center rounded-md">
        <Link href="" className="w-full">
          <Image
            src={joinRecyeco}
            alt="Join Recyeco"
            className="w-full object-fill"
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col gap-3 mb-4">
        <h1 className="text-lg font-bold">Kategori</h1>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {CategoryItems.map(({ id, backgroundColor, borderColor, label }) => (
            <Button
              key={id}
              asChild
              variant="outline"
              className={`flex flex-col flex-auto justify-center items-center w-28 h-24 p-4 text-black hover:bg-[${backgroundColor}] ${backgroundColor} hover:border-2 ${borderColor} rounded-lg`}
            >
              <Link href="">
                <Icon type={label} />
                <h1 className="text-sm mt-2">{label}</h1>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
