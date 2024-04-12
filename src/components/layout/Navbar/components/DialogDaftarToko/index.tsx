'use client';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { MapPin, Store, BookUser } from 'lucide-react';
import { InputSuffix } from '@/components/ui/input-suffix';
import { useRegistShop } from './hooks';
import { useForm } from 'react-hook-form';
import { ShopResSchema, ShopResType } from '@/domains/shop';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';

export const DialogDaftarToko = ({ children }: { children: ReactNode }) => {
  const { mutate } = useRegistShop();
  const form = useForm<ShopResType>({
    resolver: zodResolver(ShopResSchema),
    defaultValues: { toko: '', kontak: '', lokasi: '', link_map: '' }
  });

  const onSubmit = (values: ShopResType) => {
    mutate(values);
  };

  return (
    <Dialog>
      {children}
      <DialogContent className="rounded-lg sm:max-w-2xl lg:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Daftar Toko Gratis</DialogTitle>
        </DialogHeader>
        <div className="gap-4 mt-2">
          <div className="flex flex-col items-center sm:flex-row gap-6">
            <div className="grid md:grid-cols-2 w-full gap-6">
              <Form {...form}>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="toko"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="shopName"
                          className="absolute -top-2 left-3 bg-white px-1 text-xs"
                        >
                          Nama Toko
                        </FormLabel>
                        <FormControl>
                          <InputSuffix
                            id="shop"
                            suffix={<Store className="text-gray-500" />}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="kontak"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="phone"
                          className="absolute -top-2 left-3 bg-white px-1 text-xs"
                        >
                          Nomor HP
                        </FormLabel>
                        <FormControl>
                          <InputSuffix
                            id="phone"
                            suffix={<BookUser className="text-gray-500" />}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="lokasi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="address"
                          className="absolute -top-2 left-3 bg-white px-1 text-xs"
                        >
                          Alamat
                        </FormLabel>
                        <FormControl>
                          <InputSuffix
                            id="address"
                            suffix={<MapPin className="text-gray-500" />}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="link_map"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="mapLink"
                          className="absolute -top-2 left-3 bg-white px-1 text-xs"
                        >
                          Link Google Maps Toko Anda
                        </FormLabel>
                        <FormControl>
                          <InputSuffix
                            id="maps"
                            suffix={<MapPin className="text-gray-500" />}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </Form>
            </div>
          </div>
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
            Daftar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
