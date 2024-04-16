import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { DashProductVerifyType } from '@/domains/product';
import {
  ProductDataService,
  ProductDeleteService,
  ProductPostService,
  ProductUpdateService
} from '@/service/product';
import { ProductVerifyService } from '@/service/product';
import useToast from '@/hooks/useToast';

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
