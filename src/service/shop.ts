import { BaseResponseType } from '@/domains/response';
import { ShopResType } from '@/domains/shop';
import { fetcher } from '@/service/instance';

export const ShopRegisterService = async (
  data: ShopResType
): Promise<BaseResponseType<ShopResType>> => {
  const res = await fetcher.post('daftartoko', data);
  return res.data;
};

export const ShopDataService = async (): Promise<ShopResType> => {
  const res = await fetcher.get('daftartoko');
  return res.data.dataToko;
};
