import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { BookUser, MapPin } from 'lucide-react';
import { getAssetUrl } from '@/lib/utils';

const ProfileCard: FC = () => {
  return (
    <Card className="lg:w-72">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <div className="relative w-12 h-12 rounded-xl border">
            <Image
              src={getAssetUrl('/img/dummy-sampah.jpg')}
              layout="fill"
              objectFit="cover"
              alt="gambar sampah"
              className="rounded-xl"
            />
          </div>
          <span>Nama Toko</span>
        </CardTitle>
      </CardHeader>
      <hr />
      <CardContent className="p-4 text-xs text-gray-600 flex flex-col gap-y-2">
        <div className="flex items-center gap-3">
          <div className="inline-block p-2 bg-[#E2F2E7] rounded-xl">
            <BookUser color="#3DAA5F" />
          </div>
          <div className="line-clamp-1">+6285348203913</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-block p-2 bg-[#E2F2E7] rounded-xl">
            <MapPin color="#3DAA5F" />
          </div>
          <div className="line-clamp-1 hover:underline underline-offset-2">
            <Link href={`#`}>
              Jln. Tara No. 183, Kab. Sigi, Kec. Sigi Biromaru, Desa Kalukubula
            </Link>
          </div>
        </div>
      </CardContent>
      <Link href="/product/transaction-steps">
        <CardFooter className="flex justify-center p-4 text-xs bg-gray-200 rounded-b-lg hover:bg-gray-300">
          Tahap-tahap transaksi
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProfileCard;
