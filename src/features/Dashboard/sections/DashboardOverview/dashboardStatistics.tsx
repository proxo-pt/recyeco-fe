'use client';
import { DataProductSales } from '@/constants/dashboard';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const DashboardStatistics = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-xl p-6">
      <div className="flex justify-center items-center self-end gap-2 mb-2">
        <div className="bg-[#FDD43D] size-4 rounded-full"></div>
        <h1 className="text-sm mr-2">Terjual</h1>
        <div className="bg-[#22CAAD] size-4 rounded-full"></div>
        <h1 className="text-sm">Belum Terjual</h1>
      </div>
      <ResponsiveContainer width="100%" aspect={4}>
        <AreaChart
          data={DataProductSales}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Terjual"
            stackId="1"
            stroke="#FDD43D"
            fill="#FDD43D66"
          />
          <Area
            type="monotone"
            dataKey="BelumTerjual"
            stackId="1"
            stroke="#22CAAD"
            fill="#22CAAD66"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardStatistics;
