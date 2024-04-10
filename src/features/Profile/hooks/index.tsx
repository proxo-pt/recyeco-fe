import { ProfileResType } from '@/domains/profile';
import useToast from '@/hooks/useToast';
import { ProfileDataService, ProfileUpdateService } from '@/service/profile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useProfileData = () => {
  return useQuery({
    queryKey: ['useProfileData'],
    queryFn: async () => await ProfileDataService()
  });
};

export const useProfileUpdate = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (values: FormData) => await ProfileUpdateService(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['useProfileData']
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
