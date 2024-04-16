import {
  DashProductVerifyType,
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

export const ProductVerifyService = async (
  idPostingan: number,
  action: DashProductVerifyType
): Promise<any> => {
  const res = await fetcher.put(`dashboard/verifikasi/${idPostingan}`, {
    aksi: action
  });
  return res.data;
};

export const ProductDeleteService = async (
  idPostingan: number
): Promise<any> => {
  const res = await fetcher.delete(
    `manajemen/delete?idpostingan=${idPostingan}`
  );
  return res.data;
};

export const ProductUpdateService = async (data: FormData): Promise<any> => {
  const idPostingan = data.get('idPostingan');
  const res = await fetcher.put(
    `manajemen/edit?idpostingan=${idPostingan}`,
    data,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return res.data;
};
