'use client';
import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { EditProduk } from '../DialogEditProduk';
import { HapusProduk } from '../DialogHapusProduk';
import { TambahProduk } from '../DialogTambahProduk';
import { ProductResType } from '@/domains/product';
import { useProductData } from '../DialogTambahProduk/hooks';
import { Skeleton } from '@/components/ui/skeleton';
import { useVerifyProduct } from './hooks';

export const columns = (
  mutate: any,
  refetch: any
): ColumnDef<ProductResType>[] => [
  {
    accessorKey: 'judul',
    header: () => <div className="md:mr-12 text-nowrap">Nama Produk</div>,
    cell: ({ row }) => (
      <div className="md:mr-12 text-nowrap">{row.getValue('judul')}</div>
    )
  },
  {
    accessorKey: 'jenis',
    header: () => <div className="md:mx-12">Jenis</div>,
    cell: ({ row }) => <div className="md:mx-12">{row.getValue('jenis')}</div>
  },
  {
    accessorKey: 'berat',
    header: () => <div className="md:mx-12">Berat</div>,
    cell: ({ row }) => (
      <div className="md:mx-12">{row.getValue('berat')} KG</div>
    )
  },
  {
    accessorKey: 'harga',
    header: () => <div className="md:mx-12">Harga</div>,
    cell: ({ row }) => <div className="md:mx-10">{row.getValue('harga')}</div>
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
    )
  },
  {
    accessorKey: 'id_verify',
    header: () => <div className="text-center"></div>,
    cell: ({ row }) => (
      <div className="text-center text-white">{row.getValue('id_verify')}</div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center items-center">
          {row.getValue('status') === 'menunggu' ? (
            <div className="flex gap-2">
              <Button
                className="hover:bg-green-700 bg-green-600"
                onClick={() => {
                  mutate({ id: row.getValue('id_verify'), action: 'Setujui' });
                  refetch();
                }}
              >
                Setujui
              </Button>
              <Button className="hover:bg-red-700 bg-red-600">Batalkan</Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <EditProduk id={row.original.id} />
              <HapusProduk id={row.original.id} />
            </div>
          )}
        </div>
      );
    }
  }
];

export const DataTableProducts = () => {
  const { data: productData, isLoading, refetch } = useProductData();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const { mutate } = useVerifyProduct();
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: productData,
    columns: columns(mutate, refetch),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  if (isLoading) {
    return (
      <>
        <Skeleton className="w-full h-[32rem]" />
      </>
    );
  }

  return (
    <div className="w-full mt-4 space-y-4">
      <TambahProduk />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
