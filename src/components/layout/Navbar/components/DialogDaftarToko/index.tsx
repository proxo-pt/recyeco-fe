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
import { getAssetUrl, handleFileChange } from '@/lib/utils';
import { InputSuffix } from '@/components/ui/input-suffix';

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
            <DropdownMenuItem disabled className="text-xs">
              Daftarkan Toko Kamu
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full text-white font-semibold bg-recyeco-primary focus:bg-recyeco-primary focus:text-white">
              <DialogTrigger className="w-full">
                Daftar Toko Gratis
              </DialogTrigger>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent className="rounded-lg sm:max-w-2xl lg:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Daftar Toko Gratis</DialogTitle>
        </DialogHeader>
        <div className="gap-4 ">
          <div className="flex flex-col items-center sm:flex-row gap-6">
            <div className="flex flex-col gap-3 min-w-64 items-center sm:items-start">
              <DialogDescription>Logo / Foto Toko Anda</DialogDescription>
              <label
                htmlFor="image"
                className="relative w-28 h-28 sm:w-full sm:h-64"
              >
                <Image
                  src={file || getAssetUrl('/imgs/gambarTokoPlaceholder.png')}
                  layout="fill"
                  objectFit="cover"
                  alt="foto toko"
                />
              </label>
              <Input
                accept="image/*"
                type="file"
                id="image"
                className={`hidden`}
                onChange={e => setFile(handleFileChange(e))}
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
                <InputSuffix
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
                <InputSuffix
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
                <InputSuffix
                  suffix={<MapPin className="text-gray-500" />}
                  id="address"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="mapLink"
                  className="absolute -top-2 left-3 bg-white px-1 text-xs"
                >
                  Link Google Maps Toko Anda
                </label>
                <InputSuffix
                  suffix={<MapPin className="text-gray-500" />}
                  id="mapLink"
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-row justify-end w-full gap-2">
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
