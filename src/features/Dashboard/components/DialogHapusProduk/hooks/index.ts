import useToast from '@/hooks/useToast';
import { ProductDeleteService } from '@/service/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useDeleteProduct = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['useDeleteProduct'],
    mutationFn: async (idPostingan: number) =>
      await ProductDeleteService(idPostingan),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['useProductData']
      });
      showToast({
        title: 'Hapus Data Berhasil',
        description: 'Produk Berhasil Dihapus',
        type: 'success'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Hapus Data Gagal',
        description: err?.message || 'Ada Sesuatu Yang Salah!',
        type: 'error'
      });
    }
  });
};
