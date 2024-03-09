import React, { FC } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';
import { SignUpItem } from '@/constants/signup';
import { Input } from '@/components/ui/input';
import { CircleUser, Lock, LockKeyhole, Mail } from 'lucide-react';
import { InputPassword } from '@/components/ui/input-password';
// import registerSignUp from '@/assets/auth/registerpage-bg.svg'

const SignUp: FC = () => {
  return (
    <div className=" flex items-center gap-44">
      <div className="w-1/2">
        <Image
          src={`${getAssetUrl(`/auth/${SignUpItem.src}`)}`}
          alt="Sign Up Background"
          width={750}
          height={750}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-end gap-4">
          <h1 className="font-bold">Register👋</h1>
          <p>Daftar akun dan mulai berkontribusi untuk lingkungan!</p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            suffix={<CircleUser className="text-black" />}
            placeholder="Masukkan Nama Pengguna"
            className="text-black"
          />
          <Input
            type="email"
            suffix={<Mail className="text-black" />}
            placeholder="Masukkan Email"
            className="text-black"
          />
          <InputPassword
            type="password"
            suffix={<Lock className="text-black" />}
            placeholder="Masukkan Password"
            className="text-black"
          />
          <InputPassword
            type="password"
            suffix={<LockKeyhole className="text-black" />}
            placeholder="Konfirmasi Password"
            className="text-black"
          />
          <button className="w-[445px] h-[60px] bg-[#232323] text-white rounded-xl ">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
