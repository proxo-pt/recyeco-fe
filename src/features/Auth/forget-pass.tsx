import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getAssetUrl } from '@/lib/utils';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const ForgetPass: FC = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="flex flex-col gap-7 justify-center items-center w-full bg-[#DCDCDC]">
        <div className="w-8/12">
          <h1 className="text-3xl font-semibold mb-3">Forget Password🤔</h1>
          <p className="text-justify font-medium">
            Untuk melakukan pemulihan, Masukkan Alamat Email yang terhubung
          </p>
        </div>
        <div className="flex flex-col gap-5 w-8/12">
          <Input
            type="email"
            placeholder="Masukkan email..."
            suffix={
              <div className="w-6 h-6">
                <Mail strokeWidth={'1'} />
              </div>
            }
          />

          <Button size={'login'}>Reset Kata Sandi</Button>

          <Link href={'/sign-up'} className="self-center font-medium">
            Belum memiliki akun? <span className="text-[#3DAA5F]">Daftar</span>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center w-full bg-gradient-to-b from-[#61C580] to-[#C7F7AE]">
        <Image
          priority
          src={getAssetUrl('/auth/forgetpass.svg')}
          height={0}
          width={0}
          className="xl:w-9/12 xl:h-9/12 md:w-11/12 md:h-11/12 mt-20"
          alt="sign-in-image"
        />
      </div>
    </div>
  );
};

export default ForgetPass;
