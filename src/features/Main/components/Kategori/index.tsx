'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CategoryItems } from '@/constants/menu';
import Link from 'next/link';
import { FC } from 'react';

const CardKategori: FC = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-4 items-start justify-center p-8 bg-white rounded-lg mt-6">
      <div className="flex-1 flex flex-col gap-6 mb-4">
        <h1 className="text-lg font-bold">Kategori</h1>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {CategoryItems.map(({ id, backgroundColor, borderColor, label }) => (
            <Button
              key={id}
              asChild
              variant="outline"
              className={`flex flex-col flex-auto justify-center items-center w-28 h-24 p-4 text-black hover:bg-[${backgroundColor}] ${backgroundColor} hover:border-2 ${borderColor} rounded-lg`}
            >
              <Link href="">
                <Icon type={label} />
                <h1 className="text-sm mt-2">{label}</h1>
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="basis-[45%] flex flex-col gap-6 w-full justify-center">
        <h1 className="text-lg font-bold ml-2">My RecyEco</h1>
        <div className="rounded-md">
          <Tabs defaultValue="poin" className="w-full">
            <TabsList className="w-full flex">
              <TabsTrigger value="poin">Poin</TabsTrigger>
              <TabsTrigger value="jualproduk">Jual Produk</TabsTrigger>
            </TabsList>
            <TabsContent value="poin">
              <Card className="py-4 rounded-t-none">
                <CardContent>
                  <div className="flex md:flex-row flex-col gap-4 justify-center items-center py-4">
                    <div className="flex-1 space-y-2 md:border-r border-recyeco-text-muted md:pr-4">
                      <p className="text-xs text-recyeco-text-muted font-medium">
                        Poin Ku
                      </p>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 justify-between items-center">
                        <h1 className="text-3xl">25.000</h1>
                        <Button
                          variant="outline"
                          className="flex-1 border-recyeco-primary text-recyeco-primary hover:text-recyeco-secondary"
                        >
                          Tukar Poin
                        </Button>
                      </div>
                      <h1 className="text-base">Gold Member</h1>
                      <p className="text-xs text-recyeco-text-muted font-medium">
                        Kumpulkan 25.000 Poin untuk ke platinum
                      </p>
                    </div>
                    <div className="basis-[35%] flex flex-col space-y-2 justify-center items-center">
                      <h1 className="text-3xl">28</h1>
                      <p className="text-xs font-light">Misi Tersedia</p>
                    </div>
                  </div>
                  <Progress value={33} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="jualproduk">Jual Produk Tabs.</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CardKategori;
