import React, { FC } from 'react';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { BookUser, MapPin } from 'lucide-react';

const ProfileCard: FC<{
  toko: string | undefined;
  kontak: string | undefined;
  lokasi: string | undefined;
  link_map: string | undefined;
}> = ({ toko, kontak, lokasi, link_map }) => {
  return (
    <Card className="w-full">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <div className="flex justify-center items-center w-12 h-12 rounded-xl border">
            <Icon type="Shop" className="size-8" />
          </div>
          <span>{toko}</span>
        </CardTitle>
      </CardHeader>
      <hr />
      <CardContent className="p-4 text-xs text-gray-600 flex flex-col gap-y-2">
        <div className="flex items-center gap-3">
          <div className="inline-block p-2 bg-[#E2F2E7] rounded-xl">
            <BookUser color="#3DAA5F" />
          </div>
          <Link href={`https://wa.me/${kontak?.replace(/^0/, '62')}`}>
            <div className="line-clamp-1">{kontak}</div>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-block p-2 bg-[#E2F2E7] rounded-xl">
            <MapPin color="#3DAA5F" />
          </div>
          <div className="line-clamp-1 hover:underline underline-offset-2">
            <Link href={`${link_map}`}>{lokasi}</Link>
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
