'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell, MapPin, Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { InputSearch } from '@/components/ui/input-search';
import { MainMenu } from '@/constants/menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import recyecoLogo from '@/assets/recyeco-dark-logo.svg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar: FC = () => {
  const isLoggedIn = false;
  return (
    <header className="w-full sticky top-0 z-10 flex-none transition-colors duration-500 shadow-sm border-b bg-white">
      <div className="hidden md:block bg-[#E7E7E7]">
        <div className="container flex justify-between items-center mx-auto  py-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4" />
            <Link href="" className="text-xs">
              Pilih Alamat Pengirimanmu
            </Link>
          </div>
          <div>
            <ul className="flex gap-6">
              {MainMenu.map(menu => (
                <li key={menu.id} className="text-xs text-black">
                  <Link href="">{menu.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 h-full">
        <div className="flex items-center justify-between">
          <Image
            src={recyecoLogo}
            width={0}
            height={0}
            alt="Logo"
            className="w-24 h-auto"
          />
          <div className="hidden lg:block w-6/12">
            <InputSearch
              type="search"
              placeholder="Cari di RecyEco Mart..."
              className="text-neutral-600 placeholder-neutral-600"
              suffix={<Search className="text-neutral-600" />}
            />
          </div>
          <div className="flex justify-center items-center">
            {!isLoggedIn ? (
              <Link href="">
                <ShoppingCart className="h-4 w-4 mr-4" />
              </Link>
            ) : (
              <div className="flex">
                <Link href="">
                  <Bell className="h-4 w-4 mr-4" />
                </Link>
                <Link href="">
                  <ShoppingCart className="h-4 w-4 mr-4" />
                </Link>
              </div>
            )}
            <div className="flex md:hidden text-xs">
              <DropdownMenu>
                <DropdownMenuTrigger className="border px-4 py-3 rounded-lg bg-background hover:bg-accent hover:text-accent-foreground">
                  <HamburgerMenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-6">
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="flex items-center gap-2">
                      <MapPin className="w-4" />
                      <Link href="" className="text-xs">
                        Pilih Alamat Pengirimanmu
                      </Link>
                    </DropdownMenuSubTrigger>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {MainMenu.map(item => (
                      <DropdownMenuItem key={item.id}>
                        <Link href="">{item.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden md:flex items-center font-semibold text-xs border-l border-neutral-400 pl-4">
              {!isLoggedIn ? (
                <div>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-lg px-6 text-xs bg-transparent text-black border-black hover:text-black"
                  >
                    <Link href="/sign-up">Daftar</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-lg ml-2 px-6 text-xs"
                  >
                    <Link href="/sign-in">Masuk</Link>
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="w-22 h-12 flex items-center justify-between bg-[#E1F7E8] rounded-xl flex-row-reverse gap-2 px-2">
                    <div className="w-10 h-10 bg-black rounded-xl"></div>
                    <p className="font-normal">Toko</p>
                  </div>
                  <div className="w-36 h-12 flex items-center justify-between bg-[#E1F7E8] rounded-xl flex-row-reverse gap-2 px-2">
                    <Avatar className="rounded-xl ">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="font-normal">Anonymous</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
