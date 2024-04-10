import { ShopResType } from '@/domains/shop';
import useToast from '@/hooks/useToast';
import { ShopDataService, ShopRegisterService } from '@/service/shop';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
