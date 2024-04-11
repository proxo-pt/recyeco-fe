'use client'
import { getToken } from '@/lib/storage';
import DashboardStatistics from './sections/DashboardOverview/dashboardStatistics';
import DashboardTotals from './sections/DashboardOverview/dashboardTotals';
import DashboardProduct from './sections/DashboardProduct';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const DashboardToko = () => {
  const token = getToken();

  useEffect(() => {
    if (!token) {
      redirect('/');
    }
  });
  return (
    <div className="h-full">
      <div className="text-2xl font-bold space-y-4">
        <DashboardTotals />
        <DashboardStatistics />
        <DashboardProduct />
      </div>
    </div>
  );
};

export default DashboardToko;
