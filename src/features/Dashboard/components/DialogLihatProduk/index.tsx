import React, { FC } from 'react';
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
import { formatNumber, getAssetUrl } from '@/lib/utils';
import { Eye } from 'lucide-react';
import Image from 'next/image';

export const LihatProduk: FC = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Eye />
        </DialogTrigger>
        <DialogContent className="rounded-lg sm:max-w-3xl lg:max-w-5xl">
          <DialogHeader>
            <DialogTitle>Detail Produk</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-3 sm:min-w-36 lg:min-w-64 items-center sm:items-start">
              <DialogDescription>Foto Produk</DialogDescription>
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-full lg:h-64 rounded-xl">
                <Image
                  src={getAssetUrl('/imgs/gambarTokoPlaceholder.png')}
                  layout="fill"
                  objectFit="cover"
                  alt="foto toko"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              <div>
                <DialogDescription className="mb-1">
                  Nama Produk
                </DialogDescription>
                <h1 className="text-recyeco-primary text-xl sm:text-2xl font-semibold">
                  Ini Nanti Nama Produk
                </h1>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Harga
                  </div>
                  <div className="bg-[#FBF5D0] px-4 py-1 rounded-lg text-sm max-w-max">
                    Rp. {formatNumber(120000)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Jenis Sampah
                  </div>
                  <div className="bg-blue-500 px-4 py-1 rounded-lg text-sm text-white max-w-max">
                    Plastik
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Berat
                  </div>
                  <div className="bg-gray-400 px-4 py-1 rounded-lg text-sm text-white max-w-max">
                    18 kg
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Status
                  </div>
                  <div className="bg-recyeco-primary px-4 py-1 rounded-lg text-sm text-white max-w-max">
                    Tersedia
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Tgl diposting
                  </div>
                  <div className="text-sm">5 September 2024</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    Tgl Terjual
                  </div>
                  <div className="text-sm">12 Septemper 2024</div>
                </div>
              </div>
              <div>
                <DialogDescription className="mb-1">
                  Deskripsi Produk
                </DialogDescription>
                <p className="text-sm overflow-y-scroll max-h-14 sm:max-h-36">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  dicta harum ipsam nihil placeat dolores natus doloribus
                  beatae, ducimus excepturi omnis. Dolore commodi, dolor
                  repudiandae laudantium architecto autem est numquam deserunt
                  doloribus sit quaerat iure sed magnam unde consequatur alias
                  corporis atque ratione minus voluptas, totam officia
                  reiciendis quis libero. Eum iste facere nihil, deserunt vitae
                  necessitatibus laboriosam id saepe consectetur neque et
                  molestias minima eos voluptatum voluptatibus illo voluptate
                  soluta quas quasi quibusdam ullam nemo? Facere asperiores
                  deserunt in officiis quibusdam excepturi perferendis, beatae
                  rerum. Quas debitis nam nobis aspernatur sunt, ex placeat
                  asperiores itaque accusantium perferendis fugiat suscipit?
                </p>
              </div>
              <div>
                <DialogDescription className="mb-1">Lokasi</DialogDescription>
                <p className="text-sm">Desa Kutuh, Badung, Kuta, Bali</p>
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-row justify-end w-full gap-2">
            <DialogClose className="text-white text-sm bg-[#828282] hover:bg-gray-400 rounded-md h-10 px-4 py-2 ">
              Kembali
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
