import { DashProductVerifyType } from '@/domains/product';
import useToast from '@/hooks/useToast';
import { ProductVerifyService } from '@/service/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useVerifyProduct = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  return useMutation({
    mutationKey: ['useVerifiyProduct'],
    mutationFn: async ({
      id,
      action
    }: {
      id: number;
      action: DashProductVerifyType;
    }) => {
      console.log(id, action);
      return await ProductVerifyService(id, action);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['useProductData']
      });
      showToast({
        title: 'Verifikasi Produk Berhasil',
        description: 'Produk Telah Terjual',
        type: 'success'
      });
    }
  });
};
