import {
  ProductPostResType,
  ProductResType,
  TotalResType
} from '@/domains/product';
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

export const ProductDetailDataService = async (
  idParam: number
): Promise<ProductResType> => {
  const res = await fetcher.get(`postingan/detail?id=${idParam}`);
  return res.data.postingan;
};

export const ProductPostDataService = async (
  searchParam: string | undefined,
  typeParam: string | undefined,
  pageParam: number
): Promise<ProductPostResType> => {
  try {
    const res = await fetcher.get(
      `postingan?search=${searchParam}&jenis=${typeParam}&page=${pageParam}`
    );
    return res.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
