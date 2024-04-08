'use client';
import { LoginType, RegisterType } from '@/domains/auth';
import useToast from '@/hooks/useToast';
import { AuthService } from '@/service/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export const useAuthRegister = () => {
  const { showToast } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: RegisterType) =>
      await AuthService.register(values),
    onSuccess: () => {
      router.push('/sign-in');
      showToast({
        title: 'Registrasi Berhasil',
        description: 'Dimohon untuk Login!',
        type: 'success'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Registrasi Gagal',
        description: err?.message || 'Ada Sesuatu Yang Salah!',
        type: 'error'
      });
    }
  });
};

export const useAuthLogin = () => {
  const { showToast } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: LoginType) => await AuthService.login(values),
    onSuccess: data => {
      router.push('/');
      showToast({
        title: data?.message || 'Login Berhasil',
        description: 'Selamat Datang di Recyeco!',
        type: 'success'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Login Gagal!',
        description: err?.message || 'Ada Sesuatu Yang Salah!',
        type: 'error'
      });
    }
  });
};
