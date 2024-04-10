import { TotalResType } from '@/domains/product';
import { fetcher } from './instance';
import { z } from 'zod';

export const TotalProductService = async (): Promise<number> => {
  const res = await fetcher.get('dashboard/totalproduk');
  return res.data.total_produk;
};

export const TotalSoldService = async (): Promise<number> => {
  const res = await fetcher.get('dashboard/totalprodukterjual');
  return res.data.total_produk;
};

export const TotalIncomeService = async (): Promise<number> => {
  const res = await fetcher.get('dashboard/totalpendapatan');
  return res.data.total;
};
