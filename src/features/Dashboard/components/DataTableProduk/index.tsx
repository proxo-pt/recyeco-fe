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
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { LihatProduk } from '../DialogLihatProduk';
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
    id: 'select',
    header: ({ table }) => (
      <div className="w-10">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue('id')}</div>,
    enableHiding: false
  },
  {
    accessorKey: 'id_verify',
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('id_verify')}</div>
    ),
    enableHiding: false
  },
  {
    accessorKey: 'judul',
    header: () => <div className="md:mr-12 text-nowrap">Nama Produk</div>,
    cell: ({ row }) => (
      <div className="md:mr-12 text-nowrap">{row.getValue('judul')}</div>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('status')}</div>
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
    cell: ({ row }) => <div className="md:mx-12">{row.getValue('berat')}</div>
  },
  {
    accessorKey: 'harga',
    header: () => <div className="md:mx-12">Harga</div>,
    cell: ({ row }) => <div className="md:mx-10">{row.getValue('harga')}</div>
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
              <LihatProduk />
              <EditProduk />
              <HapusProduk />
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

  const [selectedStatus, setSelectedStatus] = React.useState<string | null>(
    null
  );

  const handleStatusFilter = (status: string | null) => {
    table.getColumn('status')?.setFilterValue(status);
    setSelectedStatus(status);
  };

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
    <div className="w-full">
      <div className="flex justify-between items-center py-4">
        <div className="space-x-2">
          <Input
            value={
              (table.getColumn('status')?.getFilterValue() as string) ?? ''
            }
            onChange={event =>
              table.getColumn('status')?.setFilterValue(event.target.value)
            }
            className="max-w-sm hidden"
          />
          <Button
            variant="outline"
            onClick={() => handleStatusFilter(null)}
            className={`max-w-sm ${selectedStatus === null && 'bg-recyeco-primary text-white'}`}
          >
            Semua
          </Button>
          <Button
            variant="outline"
            onClick={() => handleStatusFilter('Tersedia')}
            className={`max-w-sm ${selectedStatus === 'Tersedia' && 'bg-recyeco-primary text-white'}`}
          >
            Tersedia
          </Button>
          <Button
            variant="outline"
            onClick={() => handleStatusFilter('Menunggu')}
            className={`max-w-sm ${selectedStatus === 'Menunggu' && 'bg-recyeco-primary text-white'}`}
          >
            Menunggu
          </Button>
          <Button
            variant="outline"
            onClick={() => handleStatusFilter('Terjual')}
            className={`max-w-sm ${selectedStatus === 'Terjual' && 'bg-recyeco-primary text-white'}`}
          >
            Terjual
          </Button>
        </div>
        <TambahProduk />
      </div>
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
