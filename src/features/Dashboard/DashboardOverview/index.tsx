'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { getToken } from '@/lib/storage';
import DashboardTotals from './sections/DashboardTotals';
import DashboardStatistics from './sections/DashboardStatistics';

const DashboardOverview = () => {
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
      </div>
    </div>
  );
};

export default DashboardOverview;
