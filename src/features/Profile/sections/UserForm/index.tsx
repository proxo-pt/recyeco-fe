'use client';
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ProfileResType } from '@/domains/profile';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { useProfileData, useProfileUpdate } from '../../hooks';

const UserForm = () => {
  const [formData, setFormData] = useState(new FormData());
  const { data: profileData } = useProfileData();
  const { mutate, isSuccess, isError } = useProfileUpdate();
  const form = useForm();

  const onSubmit = (values: ProfileResType) => {
    formData.append('username', values?.username ?? '');
    formData.append('gender', values?.gender ?? '');
    formData.append('birthdate', values?.birthdate ?? '');
    formData.append('email', values?.email ?? '');
    mutate(formData);
  };

  const handleUploadedFile = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    formData.append('foto', uploadedImage);
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setFormData(new FormData());
    }
  }, [isSuccess, isError]);

  return (
    <div className="w-full xl:col-span-3 col-span-4">
      <Card className="h-auto rounded-2xl shadow-xl divide-y-2">
        <CardHeader className="p-4">
          <CardTitle className="text-recyeco-primary text-xs">
            Account
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-wrap justify-between">
            <Form {...form}>
              <div className="lg:basis-[40%] w-full">
                <Card className="border-2 shadow-lg rounded-2xl">
                  <CardHeader className="justify-center items-center">
                    <Avatar className="w-full h-auto rounded-2xl ">
                      <AvatarImage
                        src={
                          profileData?.foto || 'https://github.com/shadcn.png'
                        }
                      />
                    </Avatar>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      name="foto"
                      render={({ field: { onChange, ...field } }) => (
                        <FormItem className="h-auto">
                          <FormControl>
                            <div className="flex justify-center items-center">
                              <Label
                                htmlFor="foto"
                                className="text-center text-recyeco-primary absolute"
                              >
                                Pilih Foto
                              </Label>
                              <Input
                                type="file"
                                accept="image/*"
                                id="foto"
                                className="p-0 rounded-xl border-recyeco-primary outline-recyeco-primary"
                                classInput="opacity-0"
                                onChange={handleUploadedFile}
                                {...field}
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-recyeco-text-muted">
                      Besar file: maksimum 10.000.000 bytes (10 Megabytes).
                      Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG
                    </p>
                  </CardFooter>
                </Card>
              </div>

              <div className="lg:basis-[60%] w-full p-6">
                <h1 className="font-semibold">Ubah Biodata Diri</h1>
                <div className="grid lg:grid-rows-3 gap-y-4 mt-2">
                  <FormField
                    name="username"
                    render={({ field }) => (
                      <FormItem className="h-auto">
                        <div className="flex items-center gap-4">
                          <span className="text-sm">Nama: </span>
                          <h1 className="text-sm font-semibold">
                            {profileData?.username || 'Masukkan Nama'}
                          </h1>
                        </div>
                        <FormControl>
                          <Input
                            type="text"
                            id="username"
                            placeholder="Masukkan Nama Anda"
                            {...field}
                            // defaultValue={profileData?.username}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="birthdate"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">Tanggal Lahir: </span>
                          <h1 className="text-sm font-semibold">
                            {profileData?.birthdate || 'Masukkan Tanggal Lahir'}
                          </h1>
                        </div>
                        <FormControl>
                          <Input
                            type="date"
                            id="birthdate"
                            {...field}
                            // defaultValue={profileData?.birthdate}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">Jenis Kelamin: </span>
                          <h1 className="text-sm font-semibold">
                            {profileData?.gender || 'Masukkan Jenis Kelamin'}
                          </h1>
                        </div>
                        <Select
                          {...field}
                          onValueChange={field.onChange}
                          // defaultValue={profileData?.gender}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Masukkan Jenis Kelamin" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                            <SelectItem value="Perempuan">Perempuan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-6">
                  <h1 className="font-semibold">Ubah Kontak</h1>
                  <FormField
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <div className="flex items-center gap-4">
                          <span className="text-sm">Email: </span>
                          <h1 className="text-sm font-semibold">
                            {profileData?.email || 'Masukkan Email'}
                          </h1>
                        </div>
                        <FormControl>
                          <Input
                            type="email"
                            id="email"
                            placeholder="Masukkan Email Anda"
                            {...field}
                            // defaultValue={profileData?.email}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </Form>
          </div>
        </CardContent>
        <CardFooter className="justify-end items-center py-4">
          <Button
            type="submit"
            variant="outline"
            className="border-recyeco-primary hover:text-recyeco-primary text-recyeco-primary rounded-xl"
            onClick={form.handleSubmit(onSubmit)}
          >
            Simpan Perubahan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserForm;
