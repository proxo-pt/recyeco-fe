import React, { FC } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';
import { SignUpItem } from '@/constants/signup';

const SignUp: FC = () => {
  return (
    <div className="w-screen h-screen p-4">
      <div>
        <Image src={`${getAssetUrl(`/auth/${SignUpItem.src}`)}`} alt="Sign Up Background" className='size-full' />
      </div>
    </div>
  );
};

export default SignUp;
