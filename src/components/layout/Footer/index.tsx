import { FC } from 'react';
import Image from 'next/image';
import recyecoLogo from '@/assets/recyeco-light-logo.svg';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Icon from '@/components/ui/icon';

const Footer: FC = () => {
  return (
    <>
      <div className="bg-recyeco-footer h-64">
        <div className="container flex justify-between px-6 py-12 text-white">
          <div className="hidden md:flex flex-col gap-2 max-w-64">
            <Image src={recyecoLogo} width={120} alt="Logo" />
            <Separator className="w-16 rounded-md" />
            <p className="text-xs">
              Ubah Sampah Menjadi Rupiah, Bersihkan Bumi!
            </p>
          </div>
          <div className="flex justify-between w-full md:w-auto space-x-16">
            <div className="flex flex-col gap-2">
              <strong className="text-sm md:text-lg">Jelajahi</strong>
              <Separator className="w-14 rounded-md" />
              <div className="flex flex-col gap-4 mt-2 text-xs">
                <Link href="/">Beranda</Link>
                <Link href="/about">Tentang Recyeco</Link>
                <Link href="">Mulai Berjualan</Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <strong className="text-sm md:text-lg">
                Terhubung Dengan Kami
              </strong>
              <Separator className="w-24 rounded-md" />
              <div className="flex gap-6 mt-2">
                <Link href="https://wa.me/6285348203913?text=Halo Bang">
                  <Icon type="Whatsapp" className="size-4" />
                </Link>
                <Link href="https://www.instagram.com/farhans711/">
                  <Icon type="Instagram" className="size-4" />
                </Link>
                <Link href="https://twitter.com/home">
                  <Icon type="Twitter" className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center items-center w-full h-10 text-xs text-center text-white bg-recyeco-primary">
           Copyright &copy; 2024 . Recyeco All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
