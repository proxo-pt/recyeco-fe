'use client';
import Image from 'next/image';
import Link from 'next/link';
import { DialogDaftarToko } from '@/components/layout/Navbar/components/DialogDaftarToko';
import { DialogTrigger } from '@/components/ui/dialog';
import { useDataShop } from '@/components/layout/Navbar/components/DialogDaftarToko/hooks';
import Market from './sections/Market';
import mulaiRecyeco from '@/assets/imgs/mulaiRecyeco.svg';
import joinRecyeco from '@/assets/imgs/joinRecyeco.svg';

const Main = () => {
  const { data: shopData } = useDataShop();

  return (
    <>
      <div className="flex flex-col space-y-6 py-6">
        <div className="container flex justify-center items-center rounded-md">
          <DialogDaftarToko>
            {shopData ? (
              <Link href="/dashboard" className="w-full">
                <Image
                  src={mulaiRecyeco}
                  alt="Join Recyeco"
                  className="w-full object-fill cursor-pointer"
                />
              </Link>
            ) : (
              <DialogTrigger className="w-full">
                <Image
                  src={joinRecyeco}
                  alt="Join Recyeco"
                  className="w-full object-fill cursor-pointer"
                />
              </DialogTrigger>
            )}
          </DialogDaftarToko>
        </div>
        <Market />
      </div>
    </>
  );
};

export default Main;
