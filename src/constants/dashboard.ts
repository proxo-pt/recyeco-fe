import { DashboardMenuType } from '@/types';
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
