import { AxiosError } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ShopResType } from '@/domains/shop';
import {
  ProductDetailDataService,
  ProductPostDataService
} from '@/service/product';
import { ShopDataService, ShopRegisterService } from '@/service/shop';
import useToast from '@/hooks/useToast';

export const useRegistShop = () => {
  const { showToast } = useToast();
  return useMutation({
    mutationFn: async (values: ShopResType) =>
      await ShopRegisterService(values),
    onSuccess: () => {
      showToast({
        title: 'Registrasi Toko Berhasil',
        description: 'Mulai Berjualan Sekarang!',
        type: 'success'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Registrasi Toko Gagal',
        description: err?.message || 'Ada Sesuatu Yang Salah!',
        type: 'error'
      });
    }
  });
};

export const useDataShop = () => {
  return useQuery({
    queryKey: ['useDataShop'],
    queryFn: async () => await ShopDataService()
  });
};

export const useProductPostData = (
  searchParam: string | undefined,
  typeParam: string | undefined,
  pageParam: number
) => {
  return useQuery({
    queryKey: ['useProductPostData', searchParam, typeParam, pageParam],
    queryFn: async () =>
      await ProductPostDataService(searchParam, typeParam, pageParam)
  });
};

export const useProductDetailData = (idParam: number) => {
  return useQuery({
    queryKey: ['useProductDetailData', idParam],
    queryFn: async () => await ProductDetailDataService(idParam)
  });
};
