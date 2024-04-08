'use client';
import { FC, SetStateAction } from 'react';
import { InputSearch } from '@/components/ui/input-search';
import { Search } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { DashProduct, DashProductMain } from '@/constants/dashboard';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import React from 'react';

const DashboardProduct: FC = () => {
  return (
    <div className="bg-white m-8 p-5 rounded">
      <div className="flex items-center justify-between">
        <strong>Verifikasi Produk</strong>
        <div className="hidden lg:block w-4/12">
          <InputSearch
            type="search"
            placeholder="Cari disini..."
            className="text-neutral-600 placeholder-neutral-600"
            suffix={<Search className="text-neutral-600" />}
          />
        </div>
      </div>
      <div className="my-8">
        <Table>
          <TableHeader>
            <TableRow>
              {DashProduct.map(item => (
                <TableHead key={item.id} className="text-center">
                  {item.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {DashProductMain.map(item => (
              <TableRow key={item.id}>
                <TableCell className="text-center">{item.number}</TableCell>
                <TableCell className="text-center">
                  {item.description}
                </TableCell>
                <TableCell className="text-center">{item.user}</TableCell>
                <TableCell className="text-center">{item.weight}</TableCell>
                <TableCell className="text-center">{item.price}</TableCell>
                <TableCell className="text-center">
                  <button className="bg-yellow-100 p-2 rounded-md">
                    {item.status}
                  </button>
                </TableCell>
                <TableCell className="flex justify-center gap-3">
                  {item.action.map((action, id) => (
                    <Button
                      key={id}
                      className={`${
                        action === 'Setujui' ? 'bg-green-600' : 'bg-red-600'
                      } flex items-center`}
                    >
                      {action}
                    </Button>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink></PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default DashboardProduct;
