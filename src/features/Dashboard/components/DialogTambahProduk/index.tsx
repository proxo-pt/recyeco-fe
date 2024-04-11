import { FC, useEffect, useState } from 'react';
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
import { useProductPost } from './hooks';
import { useForm } from 'react-hook-form';
import { DashProductResType } from '@/domains/product';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';

export const TambahProduk: FC = () => {
  const [formData, setFormData] = useState(new FormData());
  const [foto, setFoto] = useState('');
  const { mutate, isSuccess, isError } = useProductPost();

  const form = useForm();

  const onSubmit = (values: DashProductResType) => {
    formData.append('judul', values?.judul ?? '');
    formData.append('jenis', values?.jenis ?? '');
    formData.append('berat', values?.berat ?? '');
    formData.append('harga', values?.harga ?? '');
    formData.append('deskripsi', values?.deskripsi ?? '');
    mutate(formData);
  };

  const handleUploadedFile = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    formData.append('foto', uploadedImage);
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setFormData(new FormData());
    }
  }, [isSuccess, isError]);

  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-recyeco-green-500 px-4 py-2 rounded-lg font-semibold text-white text-base">
          + Tambah Produk
        </DialogTrigger>
        <DialogContent className="rounded-lg sm:max-w-3xl lg:max-w-5xl">
          <DialogHeader>
            <DialogTitle>Tambah Data Produk</DialogTitle>
          </DialogHeader>
          <div className="gap-4 ">
            <Form {...form}>
              <div className="flex flex-col sm:flex-row gap-6">
                <FormField
                  name="foto"
                  render={({ field: { onChange, ...field } }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex flex-col gap-3 sm:min-w-36 lg:min-w-64 items-center sm:items-start">
                          <DialogDescription>Foto Produk</DialogDescription>
                          <FormLabel
                            htmlFor="image"
                            className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-full lg:h-64 rounded-xl cursor-pointer"
                          >
                            <div className="absolute z-50 p-2 rounded-tl-xl rounded-br-xl text-recyeco-background bg-slate-500/50 right-0 bottom-0">
                              <PencilLine />
                            </div>
                            <Image
                              src={
                                foto ||
                                getAssetUrl('/imgs/gambarTokoPlaceholder.png')
                              }
                              layout="fill"
                              objectFit="cover"
                              alt="foto toko"
                              className="rounded-xl"
                            />
                          </FormLabel>
                          <Input
                            accept="image/*"
                            type="file"
                            id="image"
                            className={`hidden`}
                            onChange={e => {
                              setFoto(handleFileChange(e));
                              handleUploadedFile(e);
                            }}
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex flex-col w-full gap-4 sm:gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <FormField
                      name="judul"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative w-full">
                              <FormLabel
                                htmlFor="productName"
                                className="absolute -top-2 left-3 bg-white px-1 text-xs"
                              >
                                Nama Produk
                              </FormLabel>
                              <InputSuffix
                                suffix={
                                  <div>
                                    <Package className="text-gray-500" />
                                  </div>
                                }
                                id="productpName"
                                placeholder="Masukkan nama produk"
                                {...field}
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="jenis"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative w-full">
                            <FormLabel
                              htmlFor="typesProduct"
                              className="absolute -top-2 left-3 bg-white px-1 text-xs"
                            >
                              Jenis Produk
                            </FormLabel>
                            <Select {...field} onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger className="text-md h-14 w-full border border-black rounded-xl px-4">
                                  <div className="flex items-center gap-3">
                                    <div>
                                      <Boxes className="text-gray-500" />
                                    </div>
                                    <SelectValue placeholder="Jenis Sampah" />
                                  </div>
                                </SelectTrigger>
                              </FormControl>
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
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex gap-4 sm:gap-6">
                    <FormField
                      name="berat"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative w-full">
                              <FormLabel
                                htmlFor="weight"
                                className="absolute -top-2 left-3 bg-white px-1 text-xs"
                              >
                                Berat
                              </FormLabel>
                              <InputSuffix
                                suffix={
                                  <div>
                                    <Anvil className="text-gray-500" />
                                  </div>
                                }
                                id="weight"
                                placeholder="Masukkan berat produk (kg)"
                                {...field}
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="harga"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative w-full">
                              <FormLabel
                                htmlFor="price"
                                className="absolute -top-2 left-3 bg-white px-1 text-xs"
                              >
                                Harga
                              </FormLabel>
                              <InputSuffix
                                suffix={
                                  <div>
                                    <BadgePercent className="text-gray-500" />
                                  </div>
                                }
                                id="price"
                                placeholder="Masukkan harga produk"
                                {...field}
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    name="deskripsi"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative w-full">
                            <FormLabel
                              htmlFor="desc"
                              className="absolute -top-2 left-3 bg-white px-1 text-xs"
                            >
                              Deskripsi Produk
                            </FormLabel>
                            <Textarea
                              placeholder="Masukkan deskripsi produk"
                              className="text-md resize-none sm:min-h-48"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </Form>
          </div>
          <DialogFooter className="flex flex-row justify-end w-full gap-2">
            <DialogClose className="text-white text-sm bg-[#828282] hover:bg-gray-400 rounded-md h-10 px-4 py-2 ">
              Batal
            </DialogClose>
            <Button
              type="submit"
              className="bg-[#3DAA5F] hover:bg-gray-400"
              onClick={form.handleSubmit(onSubmit)}
            >
              Tambah
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
