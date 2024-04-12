'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { InputPassword } from '@/components/ui/input-password';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Lock } from 'lucide-react';
import { ResetPassSchema, ResetPassType } from '@/domains/auth';
import { getAssetUrl } from '@/lib/utils';
import { setToken } from '@/lib/storage';
import { useAuthResetPass } from './hooks';

const NewPassword = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('param');
  if (search) {
    setToken(search);
  }

  const { mutate } = useAuthResetPass();
  const form = useForm<ResetPassType>({
    resolver: zodResolver(ResetPassSchema)
  });

  const onSubmit = (values: ResetPassType) => {
    mutate(values);
  };

  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:flex justify-center items-center w-full bg-gradient-to-b from-[#61C580] to-[#C7F7AE]">
        <Image
          priority
          src={getAssetUrl('/auth/forgetnewpass.svg')}
          height={0}
          width={0}
          className="xl:w-9/12 xl:h-9/12 md:w-11/12 md:h-11/12"
          alt="new-pass background"
        />
      </div>
      <div className="flex flex-col gap-7 justify-center items-center w-full bg-[#DCDCDC]">
        <div className="w-8/12">
          <div className="w-8/12">
            <h1 className="text-3xl font-semibold mb-3 text-right">
              Periksa Email Anda
            </h1>
            <p className="text-right font-medium">
              kami telah mengirimkan email berisi informasi pengaturan ulang
              kata sandi ke proxo@gmail.com
            </p>
            <p className="text-right mt-8">
              Tidak menerima emailnya? periksa folder spam
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-8/12">
          <Form {...form}>
            <FormField
              control={form.control}
              name="newpassword"
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
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputPassword
                      type="password"
                      placeholder="Konfirmasi Kata Sandi Baru"
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
            className="bg-[#DCDCDC] text-black border-black border-2 hover:bg-[#4F4F4F] hover:border-0 hover:text-white"
            onClick={form.handleSubmit(onSubmit)}
          >
            Simpan Kata Sandi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
