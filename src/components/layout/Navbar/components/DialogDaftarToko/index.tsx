import React, { FC, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MapPin, Store, BookUser } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getAssetUrl, handleChange } from '@/lib/utils';

const DialogDaftarToko: FC = () => {
  const [file, setFile] = useState('');

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className=" h-12 flex items-center justify-between bg-[#E1F7E8] rounded-xl flex-row-reverse gap-2 px-2">
            <div className="w-10 h-10 bg-black rounded-xl"></div>
            <p className="font-normal">Toko</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 rounded-b-lg">
          <DropdownMenuGroup className="flex flex-col items-center rounded-b-lg">
            <DropdownMenuItem disabled>Daftarkan Toko Kamu</DropdownMenuItem>
            <DropdownMenuItem className="w-full text-white font-semibold bg-recyeco-primary focus:bg-recyeco-primary focus:text-white">
              <DialogTrigger className="w-full">
                Daftar Toko Gratis
              </DialogTrigger>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              Kamu Bisa Membuat Event
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Daftar Toko Gratis</DialogTitle>
        </DialogHeader>
        <div className="gap-4 ">
          <div className="flex gap-6">
            <div className="flex flex-col gap-3 min-w-64">
              <DialogDescription>Logo Toko Anda</DialogDescription>
              <label htmlFor="image" className="bg-red-300">
                <Image
                  src={file || getAssetUrl('/imgs/placeholder.svg')}
                  width={250}
                  height={250}
                  alt="foto toko"
                  id="shopImage"
                />
              </label>
              <Input
                accept="image/*"
                type="file"
                id="image"
                className={`hidden`}
                onChange={e => setFile(handleChange(e))}
              />
            </div>
            <div className="flex flex-col w-full gap-6">
              <div className="relative">
                <label
                  htmlFor="shopName"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs"
                >
                  Nama Toko
                </label>
                <Input
                  suffix={<Store className="text-gray-500" />}
                  id="shopName"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs"
                >
                  Nomor HP
                </label>
                <Input
                  suffix={<BookUser className="text-gray-500" />}
                  id="phone"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="address"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs"
                >
                  Alamat
                </label>
                <Input
                  suffix={<MapPin className="text-gray-500" />}
                  id="address"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="mapLink"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs"
                >
                  Link Google Maps Lokasi Anda
                </label>
                <Input
                  suffix={<MapPin className="text-gray-500" />}
                  id="mapLink"
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="gap-2">
          <DialogClose className="text-white text-sm bg-[#828282] hover:bg-gray-400 rounded-md h-10 px-4 py-2 ">
            Batal
          </DialogClose>
          <Button type="submit" className="bg-[#3DAA5F] hover:bg-gray-400">
            Daftar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDaftarToko;
