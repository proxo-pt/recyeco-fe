'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { InputSuffix } from '@/components/ui/input-suffix';
import { InputPassword } from '@/components/ui/input-password';
import { zodResolver } from '@hookform/resolvers/zod';
import { getAssetUrl } from '@/lib/utils';
import { RegisterSchema, RegisterType } from '@/domains/auth';
import { useForm } from 'react-hook-form';
import { useAuthRegister } from './hooks';
import { Mail, Lock, CircleUserRound } from 'lucide-react';

const SignUp = () => {
  const { mutate } = useAuthRegister();
  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { username: '', email: '', password: '' }
  });

  const onSubmit = (values: RegisterType) => {
    mutate(values);
  };
  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:flex justify-center items-center w-full bg-gradient-to-b from-[#61C580] to-[#C7F7AE]">
        <Image
          priority
          src={getAssetUrl('/sign-up-image.svg')}
          height={0}
          width={0}
          className="xl:w-9/12 xl:h-9/12 md:w-11/12 md:h-11/12"
          alt="sign-in-image"
        />
      </div>
      <div className="flex flex-col gap-7 justify-center items-center w-full bg-recyeco-background">
        <div className="w-8/12">
          <h1 className="text-3xl font-medium mb-3 text-right">Register</h1>
          <p className="text-right font-medium">
            Masuk ke akun RecyEco Mart dan mulai ubah sampahmu menjadi rupiah!
          </p>
        </div>
        <div className="flex flex-col gap-5 w-8/12">
          <Form {...form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputSuffix
                      type="text"
                      placeholder="Masukkan Nama Pengguna..."
                      suffix={
                        <div className="w-6 h-6">
                          <CircleUserRound strokeWidth={'1'} />
                        </div>
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputSuffix
                      type="email"
                      placeholder="Masukkan Email..."
                      suffix={
                        <div className="w-6 h-6">
                          <Mail strokeWidth={'1'} />
                        </div>
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputPassword
                      type="password"
                      placeholder="Masukkan Kata Sandi..."
                      suffix={
                        <div className="w-6 h-6">
                          <Lock strokeWidth={'1'} />
                        </div>
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputPassword
                      type="password"
                      placeholder="Konfirmasi Kata Sandi..."
                      suffix={
                        <div className="w-6 h-6">
                          <Lock strokeWidth={'1'} />
                        </div>
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
          <Button
            size={'login'}
            className="text-base"
            onClick={form.handleSubmit(onSubmit)}
          >
            Register
          </Button>
          <Link href={'/sign-in'} className="self-center font-medium">
            Telah memiliki akun? <span className="text-[#3DAA5F]">Masuk</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
