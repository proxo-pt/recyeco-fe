'use client';
import { useState } from 'react';
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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn, handleFileChange } from '@/lib/utils';

const UserForm = () => {
  const [openName, setOpenName] = useState(false);
  const [file, setFile] = useState('');

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
            <div className="lg:basis-[40%] w-full">
              <Card className="border-2 shadow-lg rounded-2xl">
                <CardHeader className="justify-center items-center">
                  <Avatar className="w-full h-auto rounded-2xl">
                    <AvatarImage
                      src={file || 'https://github.com/shadcn.png'}
                    />
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center">
                    <Label
                      htmlFor="profile"
                      className="text-center text-recyeco-primary absolute"
                    >
                      Pilih Foto
                    </Label>
                    <Input
                      type="file"
                      accept="image/*"
                      name="profile"
                      className="p-0 rounded-xl border-recyeco-primary outline-recyeco-primary"
                      classInput="opacity-0"
                      onChange={e => setFile(handleFileChange(e))}
                    />
                  </div>
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
                <div className="flex items-center">
                  <span className="text-sm font-semibold">Anonymous</span>
                  <Button
                    variant="link"
                    className="text-recyeco-primary"
                    onClick={() => setOpenName(!openName)}
                  >
                    {openName ? 'Batal' : 'Ubah'}
                  </Button>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Masukkan Nama Anda"
                    className={cn(
                      openName ? `duration-300 origin-left` : `scale-0`,
                      ''
                    )}
                  />
                </div>
                <div>
                  <Label htmlFor="dob" className="text-sm">
                    Tanggal
                  </Label>
                  <Input type="date" id="dob" />
                </div>
                <div>
                  <Label htmlFor="gender" className="text-sm">
                    Jenis Kelamin
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Masukkan Jenis Kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="male">Laki-laki</SelectItem>
                        <SelectItem value="female">Perempuan</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="font-semibold">Ubah Kontak</h1>
                <div className="mt-2">
                  <Label htmlFor="email" className="text-sm">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Masukkan Email Anda"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end items-center py-4">
          <Button
            type="submit"
            variant="outline"
            className="border-recyeco-primary hover:text-recyeco-primary text-recyeco-primary rounded-xl"
          >
            Simpan Perubahan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserForm;
