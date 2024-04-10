'use client';
import {
  ForgetPassType,
  LoginType,
  RegisterType,
  ResetPassType
} from '@/domains/auth';
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

export const useAuthForgetPass = () => {
  const { showToast } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: ForgetPassType) =>
      await AuthService.forgetPass(values),
    onSuccess: data => {
      router.push('/forget-resetpass');
      showToast({
        title: data?.message || 'Berhasil Mengirim',
        description: 'Silahkan cek email anda / cek di bagian spam',
        type: 'success'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Gagal Mengirim',
        description: err?.message || 'Ada Sesuatu Yang Salah!',
        type: 'error'
      });
    }
  });
};

export const useAuthResetPass = () => {
  const { showToast } = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: async (values: ResetPassType) =>
      await AuthService.resetPass(values),
    onSuccess: data => {
      router.push('/sign-in');
      showToast({
        title: data?.message || 'Berhasil Mengganti Password',
        description: 'Silahkan Login Kembali',
        type: 'success'
      });
    },
    onError: (err: AxiosError) => {
      showToast({
        title: 'Gagal Mengirim',
        description: err?.message || 'Ada Sesuatu Yang Salah!',
        type: 'error'
      });
    }
  });
};
