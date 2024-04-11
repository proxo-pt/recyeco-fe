import { fetcher } from './instance';

export const ProductDataService = async (): Promise<any> => {
  const res = await fetcher.get('postingan');
  return res.data.postingan;
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
