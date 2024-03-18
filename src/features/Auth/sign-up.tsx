import React from 'react';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/ui/input-password';
import { Mail, Lock, CircleUserRound } from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const SignUp = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:flex justify-center items-center w-full bg-gradient-to-b from-[#61C580] to-[#C7F7AE]">
        <Image
          priority
          src={getAssetUrl('/sign-up-image.svg')}
          height={0}
          width={0}
          className="xl:w-9/12 xl:h-9/12 md:w-11/12 md:h-11/12"
          alt="sign-in-image"
        />
      </div>
      <div className="flex flex-col gap-7 justify-center items-center w-full bg-[#DCDCDC]">
        <div className="w-8/12">
          <h1 className="text-3xl font-medium mb-3 text-right">Register</h1>
          <p className="text-right font-medium">
            Masuk ke akun RecyEco Mart dan mulai ubah sampahmu menjadi rupiah!
          </p>
        </div>
        <div className="flex flex-col gap-5 w-8/12">
          <Input
            type="text"
            placeholder="Masukkan Nama Pengguna..."
            suffix={
              <div className="w-6 h-6">
                <CircleUserRound strokeWidth={'1'} />
              </div>
            }
          />
          <Input
            type="email"
            placeholder="Masukkan Email..."
            suffix={
              <div className="w-6 h-6">
                <Mail strokeWidth={'1'} />
              </div>
            }
          />
          <InputPassword
            type="password"
            placeholder="Masukkan Kata Sandi..."
            suffix={
              <div className="w-6 h-6">
                <Lock strokeWidth={'1'} />
              </div>
            }
          />
          <InputPassword
            type="password"
            placeholder="Konfirmasi Kata Sandi..."
            suffix={
              <div className="w-6 h-6">
                <Lock strokeWidth={'1'} />
              </div>
            }
          />
          <Button size={'login'} className="text-base">
            Register
          </Button>
          <Link href={'/sign-in'} className="self-center font-medium">
            Telah memiliki akun? <span className="text-[#3DAA5F]">Masuk</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
