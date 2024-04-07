import React, { FC } from 'react';
import Link from 'next/link';
import { MainMenu } from '@/constants/menu';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { DialogDaftarToko } from '../DialogDaftarToko';
import { DialogTrigger } from '@/components/ui/dialog';

export const UserMobileLogin: FC = () => {
  return (
    <DialogDaftarToko>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div
            className={`w-auto h-12 flex flex-row-reverse items-center justify-between rounded-xl gap-2 px-2`}
          >
            <Avatar className="rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 p-2 ">
          <DropdownMenuItem>
            <Link
              href="/profile"
              className="flex items-center gap-4 cursor-pointer"
            >
              <Avatar className="rounded-full md:rounded-xl">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <h1 className="text-sm text-recyeco-primary font-semibold">
                Anonymous
              </h1>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <DialogTrigger className="w-full text-left">Toko</DialogTrigger>
            </DropdownMenuItem>
            {MainMenu.map(item => (
              <DropdownMenuItem key={item.id}>
                <Link href={item.url}>{item.title}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <Link href="" className="font-semibold">
            <DropdownMenuItem className="flex justify-between items-center cursor-pointer">
              <span>Log Out</span>
              <div>
                <LogOut className="text-red-600" />
              </div>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </DialogDaftarToko>
  );
};

export const UserMobileDefault: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="border px-4 py-3 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground">
          <HamburgerMenuIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-3">
        <DropdownMenuGroup className="flex flex-col gap-1">
          {MainMenu.map(item => (
            <DropdownMenuItem key={item.id}>
              <Link href={item.url}>{item.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-slate-400  my-2" />
        <DropdownMenuGroup className="flex flex-col gap-1">
          <DropdownMenuItem className="text-recyeco-primary focus:text-recyeco-primary font-semibold">
            <Link href="/sign-up">Daftar</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-recyeco-primary focus:bg-recyeco-primary text-white focus:text-white">
            <Link href="/sign-in">Masuk</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
