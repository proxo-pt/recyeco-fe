import useToast from '@/hooks/useToast';
import { ProductBuyService } from '@/service/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useProductBuy = (idPostingan: number) => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => await ProductBuyService(idPostingan),
    onSuccess: () => {
      showToast({
        title: 'Berhasil Memesan Produk',
        description: 'Silahkan Hubungi Penjual',
        type: 'success'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Gagal Memesan Produk',
        description: err?.message || 'Ada Sesuatu Yang Salah!',
        type: 'error'
      });
    }
  });
};
