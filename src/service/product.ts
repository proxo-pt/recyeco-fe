import {
  ProductBuyType,
  ProductPostResType,
  ProductResType
} from '@/domains/product';
import { fetcher } from './instance';

export const ProductDataService = async (): Promise<any> => {
  const res = await fetcher.get('manajemen');
  return res.data.produk;
};

export const ProductPostService = async (data: FormData): Promise<any> => {
  const res = await fetcher.post('addpostingan', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return res.data.postingan;
};

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

export const ProductBuyService = async (
  idPostingan: number
): Promise<ProductBuyType> => {
  const res = await fetcher.post(
    `postingan/detailPostingan/beli?idpostingan=${idPostingan}`
  );
  return res.data.users;
};
