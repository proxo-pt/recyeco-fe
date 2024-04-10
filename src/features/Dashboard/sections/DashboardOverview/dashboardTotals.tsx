'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { dataDashboardTotals } from '@/constants/dashboard';
import { PackageOpen, ShoppingCart, Wallet } from 'lucide-react';
import { useTotalData } from '../hooks';

const DashboardTotals = () => {
  const renderContent = (title: string | undefined, totalData: any) => {
    let icon;
    let value;

    switch (title) {
      case 'Total Produk':
        icon = (
          <ShoppingCart className="text-recyeco-green-500 bg-recyeco-green-100 rounded-full size-10 p-2" />
        );
        value = totalData?.totalProduct;
        break;
      case 'Total Pendapatan':
        icon = (
          <Wallet className="text-recyeco-blue-500 bg-recyeco-blue-100 rounded-full size-10 p-2" />
        );
        value =
          totalData?.totalIncome?.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR'
          }) || 0;
        break;
      case 'Total Produk Terjual':
        icon = (
          <PackageOpen className="text-recyeco-green-400 bg-recyeco-green-200 rounded-full size-10 p-2" />
        );
        value = totalData?.totalSold;
        break;
      default:
        icon = 0;
        value = 0;
    }

    return { icon, value };
  };

  const { data: totalData } = useTotalData();
  console.log(totalData);

  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-5">
      {dataDashboardTotals.map(({ id, title }) => {
        const { icon, value } = renderContent(title, totalData);

        return (
          <Card
            key={id}
            className="w-full border shadow-[0px_0px_20px_0px_#F1F5F9]"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="md:text-xl font-medium text-recyeco-text-600">
                  {title}
                </h2>
                <div className="p-3 rounded-full">{icon}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-recyeco-text-600">{value}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardTotals;
