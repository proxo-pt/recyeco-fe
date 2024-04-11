'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ItemCard from '../../components/ItemCard';
import { CategoryItems } from '@/constants/menu';
import { useProductPostData } from '../../hooks';
import { AlertCircle } from 'lucide-react';
import useNavigateProduct from '@/hooks/useNavigateProduct';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Market = () => {
  const router = useRouter();
  const { search, type, page, setType, setPage } = useNavigateProduct();

  const { data } = useProductPostData(search, type, page);

  const productPostData = data?.postingan;
  const productPostPage = data?.infoHalaman;
  const totalPage = productPostPage?.total_Halaman || 0;

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (productPostPage) {
      setActivePage(page);
    }
  }, [productPostPage, page]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto">
      <div className="flex-1 flex flex-col gap-3 mb-8">
        <h1
          className="text-lg font-bold cursor-pointer"
          onClick={() => setType('')}
        >
          Kategori
        </h1>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {Object.keys(CategoryItems).map(key => {
            const { backgroundColor, borderColor, label } = CategoryItems[key];
            return (
              <Button
                key={key}
                asChild
                variant="outline"
                className={`cursor-pointer flex flex-col flex-auto justify-center items-center w-28 h-24 p-4 text-black hover:bg-${backgroundColor} ${backgroundColor} hover:border-2 ${borderColor} rounded-lg`}
                onClick={() => {
                  setType(label);
                }}
              >
                <div>
                  <Icon type={label} />
                  <h1 className="text-sm mt-2">{label}</h1>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="mb-3">
        <h2 className="text-lg font-bold">Recyeco Belanja</h2>
        <h2 className="text-lg font-bold">{type}</h2>
      </div>
      {!productPostData || productPostData.length === 0 ? (
        <div className="flex justify-center items-center ">
          <div className="flex flex-col items-center gap-3">
            <AlertCircle size={64} />
            <h2 className="text-lg font-semibold">Data tidak ditemukan</h2>
          </div>
        </div>
      ) : (
        <div
          className={`grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 sm:justify-items-stretch`}
        >
          {productPostData?.map(item => (
            <ItemCard
              key={item.id}
              className="max-w-64 sm:max-w-full"
              price={item.harga}
              title={item.judul}
              category={`${item.jenis}`}
              shopName={`${item.penjual}`}
              img={item.foto}
              onClick={() => router.push(`/detail-product?id=${item.id}`)}
            />
          ))}
        </div>
      )}
      <Pagination className="mt-12">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => {
                if (activePage === 1) {
                  return;
                }
                handlePageChange(activePage - 1);
              }}
              isActive={activePage === 1}
            />
          </PaginationItem>
          {pageNumbers.map(pageNumber => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                className="cursor-pointer"
                onClick={() => handlePageChange(pageNumber)}
                isActive={pageNumber === activePage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() => {
                if (activePage === productPostPage?.total_Halaman) {
                  return;
                }
                handlePageChange(activePage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default Market;
