import useToast from '@/hooks/useToast';
import { ProductUpdateService } from '@/service/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useUpdateProduct = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: FormData) => await ProductUpdateService(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['useProductData']
      });
      showToast({
        title: 'Perbarui Data Berhasil',
        description: 'Data Telah Dikirim Ke Server',
        type: 'success'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Perbarui Data Gagal',
        description: err?.message || 'Ada Sesuatu Yang Salah!',
        type: 'error'
      });
    }
  });
};
