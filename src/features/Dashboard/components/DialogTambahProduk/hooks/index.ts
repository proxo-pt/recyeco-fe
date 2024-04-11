import useToast from '@/hooks/useToast';
import { ProductDataService, ProductPostService } from '@/service/product';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useProductData = () => {
  return useQuery({
    queryKey: ['useProductData'],
    queryFn: async () => await ProductDataService()
  });
};

export const useProductPost = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: FormData) => await ProductPostService(values),
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
