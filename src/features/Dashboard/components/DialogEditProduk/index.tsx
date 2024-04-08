import React, { FC, useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { InputSuffix } from '@/components/ui/input-suffix';
import { getAssetUrl, handleFileChange } from '@/lib/utils';
import { Anvil, BadgePercent, Boxes, Package, PencilLine } from 'lucide-react';
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { CategoryItems } from '@/constants/menu';

export const EditProduk: FC = () => {
  const [file, setFile] = useState('');
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <PencilLine />
        </DialogTrigger>
        <DialogContent className="rounded-lg sm:max-w-2xl lg:max-w-5xl">
          <DialogHeader>
            <DialogTitle>Edit Data Produk</DialogTitle>
          </DialogHeader>
          <div className="gap-4 ">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-3 sm:min-w-36 lg:min-w-64 items-center sm:items-start">
                <DialogDescription>Foto Produk</DialogDescription>
                <label
                  htmlFor="image"
                  className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-full lg:h-64 rounded-xl cursor-pointer"
                >
                  <div className="absolute z-50 p-2 rounded-tl-xl rounded-br-xl text-recyeco-background bg-slate-500/50 right-0 bottom-0">
                    <PencilLine />
                  </div>
                  <Image
                    src={file || getAssetUrl('/imgs/gambarTokoPlaceholder.png')}
                    layout="fill"
                    objectFit="cover"
                    alt="foto toko"
                    className="rounded-xl"
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
              <div className="flex flex-col w-full gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="relative w-full">
                    <label
                      htmlFor="productName"
                      className="absolute -top-2 left-3 bg-white px-1 text-xs"
                    >
                      Nama Produk
                    </label>
                    <InputSuffix
                      suffix={
                        <div>
                          <Package className="text-gray-500" />
                        </div>
                      }
                      id="productpName"
                      placeholder="Masukkan nama produk"
                    />
                  </div>
                  <div className="relative w-full">
                    <label
                      htmlFor="typesProduct"
                      className="absolute -top-2 left-3 bg-white px-1 text-xs"
                    >
                      Jenis Produk
                    </label>
                    <Select>
                      <SelectTrigger className="text-md h-14 w-full border border-black rounded-xl px-4">
                        <div className="flex items-center gap-3">
                          <div>
                            <Boxes className="text-gray-500" />
                          </div>
                          <SelectValue placeholder="Jenis Sampah" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Jenis Sampah</SelectLabel>
                          {Object.keys(CategoryItems).map(key => {
                            const { label } = CategoryItems[key];
                            return (
                              <SelectItem value={`${label}`} key={key}>
                                {label}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-6">
                  <div className="relative w-full">
                    <label
                      htmlFor="weight"
                      className="absolute -top-2 left-3 bg-white px-1 text-xs"
                    >
                      Berat
                    </label>
                    <InputSuffix
                      suffix={
                        <div>
                          <Anvil className="text-gray-500" />
                        </div>
                      }
                      id="weight"
                      placeholder="Masukkan berat produk (kg)"
                    />
                  </div>
                  <div className="relative w-full">
                    <label
                      htmlFor="price"
                      className="absolute -top-2 left-3 bg-white px-1 text-xs"
                    >
                      Harga
                    </label>
                    <InputSuffix
                      suffix={
                        <div>
                          <BadgePercent className="text-gray-500" />
                        </div>
                      }
                      id="price"
                      placeholder="Masukkan harga produk"
                    />
                  </div>
                </div>
                <div className="relative w-full">
                  <label
                    htmlFor="desc"
                    className="absolute -top-2 left-3 bg-white px-1 text-xs"
                  >
                    Deskripsi Produk
                  </label>
                  <Textarea
                    placeholder="Masukkan deskripsi produk"
                    className="text-md resize-none sm:min-h-48 "
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
              Tambah
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
