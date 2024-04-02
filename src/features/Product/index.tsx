import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import TransactionPanel from './components/TransactionPanel';
import { getAssetUrl } from '@/lib/utils';
import ProfileCard from './components/ProfileCard';

const Product = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-2">
        <div className="my-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-recyeco-primary">
                  <Link href="/product">Detail Produk</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex gap-7">
          <div>
            <div className="relative w-full h-96">
              <Image
                src={getAssetUrl('/img/dummy-sampah.jpg')}
                layout="fill"
                objectFit="cover"
                alt="gambar sampah"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2 mb-6 mt-4">
              <h1 className="text-2xl font-medium">
                Tittle : Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </h1>
              <div className="flex gap-7 text-sm font-light">
                <ul>
                  <li>Jenis : Sampah pelastik</li>
                </ul>
                <ul className="list-disc">
                  <li>Berat : 12kg</li>
                </ul>
              </div>
              <div className="font-bold text-2xl text-recyeco-primary">
                Rp. 12000
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-medium">Detail Produk</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, veniam velit expedita error saepe nesciunt!
                Laboriosam quis libero provident eveniet aut doloribus quidem
                sequi praesentium sapiente accusantium vero, vitae quibusdam
                laudantium mollitia impedit quo unde repudiandae, hic nemo
                incidunt id illum velit quos. Nulla repellat aperiam repudiandae
                dolor obcaecati tempore consequuntur, distinctio quod. Aliquid
                est nam enim, odit ad esse, possimus fugiat beatae a nihil aut
                excepturi culpa? Ad deleniti laborum corrupti? Maiores unde
                totam architecto aliquam deserunt, libero quidem dolorem rem nam
                beatae, hic, harum debitis perferendis officia in reprehenderit
                delectus dolor nobis expedita ipsum. Architecto voluptatum animi
                nemo!
              </p>
            </div>
          </div>
          <div>
            <ProfileCard />
          </div>
        </div>
      </div>
      <TransactionPanel />
    </>
  );
};

export default Product;
