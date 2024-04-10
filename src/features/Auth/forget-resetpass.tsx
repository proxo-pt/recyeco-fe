import { Button } from '@/components/ui/button';
import { getAssetUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const ForgetResetPass: FC = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:flex justify-center items-center w-full bg-gradient-to-b from-[#61C580] to-[#C7F7AE]">
        <Image
          priority
          src={getAssetUrl('/auth/forgetnewpass.svg')}
          height={0}
          width={0}
          className="xl:w-9/12 xl:h-9/12 md:w-11/12 md:h-11/12"
          alt="forget-pass background"
        />
      </div>
      <div className="flex flex-col gap-7 justify-center items-center w-full bg-[#DCDCDC]">
        <div className="w-8/12 text-right">
          <h1 className="text-3xl font-semibold mb-3">Periksa email Anda</h1>
          <p className=" font-medium">
            Kami telah mengirimkan email berisi informasi pengaturan ulang kata
            sandi ke proxo@gmail.com
          </p>
          <p className="text-right mt-8">
            Tidak menerima emailnya? periksa folder spam atau
          </p>
        </div>
        <div className="flex flex-col gap-5 w-8/12">
          <Link href="/forget-pass">
            <Button
              size={'login'}
              className="w-full bg-[#4F4F4F] hover:bg-neutral-500"
            >
              Kirim Ulang
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button
              size={'login'}
              className="w-full bg-[#DCDCDC] text-black border-black border-2 hover:bg-[#4F4F4F] hover:border-0 hover:text-white"
            >
              Kembali ke halaman Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetResetPass;
