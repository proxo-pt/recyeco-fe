import {
  DashProductType,
  DashboardMenuType,
  DataDashboardTotal,
  ManageProductType,
  ProductDashType,
  ProductSalesType,
  TabManageType
} from '@/types';
import { LayoutDashboard, Package } from 'lucide-react';

export const DashboardMenu: DashboardMenuType[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
    isChildren: false
  },
  {
    id: 2,
    title: 'Manajemen Produk',
    icon: Package,
    path: '/dashboard/product',
    isChildren: false
  }
];

export const DashProduct: ProductDashType[] = [
  {
    id: 1,
    title: 'No'
  },
  {
    id: 2,
    title: 'Nama Produk'
  },
  {
    id: 3,
    title: 'Pembeli'
  },
  {
    id: 4,
    title: 'Berat'
  },
  {
    id: 5,
    title: 'Harga'
  },
  {
    id: 6,
    title: 'Status'
  },
  {
    id: 7,
    title: 'Aksi'
  }
];

export const DashProductMain: DashProductType[] = [
  {
    id: 1,
    name: 'Kertas Sampah',
    description: 'Kertas Sampah',
    type: 'Kertas',
    weight: '0.3 Kg',
    price: 'Rp. 8.000',
    status: 'Terjual'
  },
  {
    id: 2,
    name: 'Pensil Bekas',
    description: 'Pensil Bekas',
    type: 'Plastik',
    weight: '0.1 Kg',
    price: 'Rp. 5.000',
    status: 'Tersedia'
  },
  {
    id: 3,
    name: 'Botol Plastik',
    description: 'Botol Plastik',
    type: 'Plastik',
    weight: '0.05 Kg',
    price: 'Rp. 3.000',
    status: 'Menunggu'
  },
  {
    id: 4,
    name: 'Kardus Bekas',
    description: 'Kardus Bekas',
    type: 'Kertas',
    weight: '0.4 Kg',
    price: 'Rp. 9.000',
    status: 'Terjual'
  },
  {
    id: 5,
    name: 'Kertas Koran Lama',
    description: 'Kertas Koran Lama',
    type: 'Kertas',
    weight: '0.15 Kg',
    price: 'Rp. 4.000',
    status: 'Tersedia'
  },
  {
    id: 6,
    name: 'Botol Plastik Bekas',
    description: 'Botol Plastik Bekas',
    type: 'Plastik',
    weight: '0.2 Kg',
    price: 'Rp. 6.000',
    status: 'Tersedia'
  },
  {
    id: 7,
    name: 'Kertas Majalah Lama',
    description: 'Kertas Majalah Lama',
    type: 'Kertas',
    weight: '0.6 Kg',
    price: 'Rp. 12.000',
    status: 'Tersedia'
  },
  {
    id: 8,
    name: 'Kardus Bekas',
    description: 'Kardus Bekas',
    type: 'Kertas',
    weight: '0.25 Kg',
    price: 'Rp. 7.000',
    status: 'Tersedia'
  },
  {
    id: 9,
    name: 'Botol Plastik Bekas',
    description: 'Botol Plastik Bekas',
    type: 'Plastik',
    weight: '0.1 Kg',
    price: 'Rp. 2.000',
    status: 'Tersedia'
  },
  {
    id: 10,
    name: 'Kertas Karton',
    description: 'Kertas Karton',
    type: 'Kertas',
    weight: '0.2 Kg',
    price: 'Rp. 5.000',
    status: 'Tersedia'
  },
  {
    id: 11,
    name: 'Kertas HVS Bekas',
    description: 'Kertas HVS Bekas',
    type: 'Kertas',
    weight: '0.05 Kg',
    price: 'Rp. 3.000',
    status: 'Tersedia'
  }
];

export const ManageProductTitle: ProductDashType[] = [
  {
    id: 1,
    title: 'No'
  },
  {
    id: 2,
    title: 'Nama Produk'
  },
  {
    id: 3,
    title: 'Jenis'
  },
  {
    id: 4,
    title: 'Berat'
  },
  {
    id: 5,
    title: 'Harga'
  },
  {
    id: 6,
    title: 'Status'
  },
  {
    id: 7,
    title: 'Aksi'
  }
];

export const ManageProductMain: ManageProductType[] = [
  {
    id: 1,
    number: 1,
    description: 'Kertas Sampah',
    type: 'Kertas',
    weight: '0.3 Kg',
    price: 'Rp. 8.000',
    status: 'Terjual'
  },
  {
    id: 2,
    number: 2,
    description: 'Pensil Bekas',
    type: 'Plastik',
    weight: '0.1 Kg',
    price: 'Rp. 5.000',
    status: 'Tersedia'
  },
  {
    id: 3,
    number: 3,
    description: 'Botol Plastik',
    type: 'Plastik',
    weight: '0.05 Kg',
    price: 'Rp. 3.000',
    status: 'Menunggu'
  },
  {
    id: 4,
    number: 4,
    description: 'Kardus Bekas',
    type: 'Kertas',
    weight: '0.4 Kg',
    price: 'Rp. 9.000',
    status: 'Terjual'
  },
  {
    id: 5,
    number: 5,
    description: 'Kertas Koran Lama',
    type: 'Kertas',
    weight: '0.15 Kg',
    price: 'Rp. 4.000',
    status: 'Tersedia'
  },
  {
    id: 6,
    number: 6,
    description: 'Botol Plastik Bekas',
    type: 'Plastik',
    weight: '0.2 Kg',
    price: 'Rp. 6.000',
    status: 'Tersedia'
  },
  {
    id: 7,
    number: 7,
    description: 'Kertas Majalah Lama',
    type: 'Kertas',
    weight: '0.6 Kg',
    price: 'Rp. 12.000',
    status: 'Tersedia'
  },
  {
    id: 8,
    number: 8,
    description: 'Kardus Bekas',
    type: 'Kertas',
    weight: '0.25 Kg',
    price: 'Rp. 7.000',
    status: 'Tersedia'
  },
  {
    id: 9,
    number: 9,
    description: 'Botol Plastik Bekas',
    type: 'Plastik',
    weight: '0.1 Kg',
    price: 'Rp. 2.000',
    status: 'Tersedia'
  },
  {
    id: 10,
    number: 10,
    description: 'Kertas Karton',
    type: 'Kertas',
    weight: '0.2 Kg',
    price: 'Rp. 5.000',
    status: 'Tersedia'
  },
  {
    id: 11,
    number: 11,
    description: 'Kertas HVS Bekas',
    type: 'Kertas',
    weight: '0.05 Kg',
    price: 'Rp. 3.000',
    status: 'Tersedia'
  },
  {
    id: 12,
    number: 12,
    description: 'Kertas Buram',
    type: 'Kertas',
    weight: '0.1 Kg',
    price: 'Rp. 4.000',
    status: 'Tersedia'
  },
  {
    id: 13,
    number: 13,
    description: 'Kertas Majalah Lama',
    type: 'Kertas',
    weight: '0.5 Kg',
    price: 'Rp. 10.000',
    status: 'Tersedia'
  },
  {
    id: 14,
    number: 14,
    description: 'Botol Plastik Bekas',
    type: 'Plastik',
    weight: '0.3 Kg',
    price: 'Rp. 6.000',
    status: 'Tersedia'
  },
  {
    id: 15,
    number: 15,
    description: 'Kertas Bekas',
    type: 'Kertas',
    weight: '0.4 Kg',
    price: 'Rp. 15.000',
    status: 'Tersedia'
  }
];

export const TabManage: TabManageType[] = [
  {
    id: 1,
    title: 'Semua',
    total: 420
  },
  {
    id: 2,
    title: 'Tersedia',
    total: 69
  },
  {
    id: 3,
    title: 'Menunggu',
    total: 69
  },
  {
    id: 4,
    title: 'Terjual',
    total: 69
  }
];

export const dataDashboardTotals: DataDashboardTotal[] = [
  {
    id: 1,
    title: 'Total Produk'
  },
  {
    id: 2,
    title: 'Total Pendapatan'
  },
  {
    id: 3,
    title: 'Total Produk Terjual'
  }
];

export const DataProductSales: ProductSalesType[] = [
  {
    name: 'Januari',
    Terjual: 400,
    BelumTerjual: 240
  },
  {
    name: 'Februari',
    Terjual: 300,
    BelumTerjual: 139
  },
  {
    name: 'Maret',
    Terjual: 200,
    BelumTerjual: 980
  },
  {
    name: 'April',
    Terjual: 278,
    BelumTerjual: 390
  }
];
