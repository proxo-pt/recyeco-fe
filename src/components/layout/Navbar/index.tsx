'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { InputSearch } from '@/components/ui/input-search';
import { MainMenu } from '@/constants/menu';
import { Bell, LogOut, MapPin, Search, ShoppingCart } from 'lucide-react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import recyecoLogo from '@/assets/recyeco-dark-logo.svg';

const Navbar: FC = () => {
  const isLoggedIn = false;
  const renderUserNav = (background: string) => {
    return (
      <div
        className={`w-36 h-12 flex md:flex-row flex-row-reverse items-center justify-between ${background} rounded-xl gap-2 px-2`}
      >
        <p className="hidden md:block font-normal">Anonymous</p>
        <Avatar className="rounded-full md:rounded-xl">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
    );
  };

  const renderDropdown = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          {!isLoggedIn ? (
            <HamburgerMenuIcon />
          ) : (
            renderUserNav('md:bg-[#E1F7E8]')
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 p-2">
          {!isLoggedIn ? (
            <div className="flex justify-center item-center">
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
            <Link href="/profile">
              <DropdownMenuItem className="flex items-center gap-4 cursor-pointer">
                <Avatar className="rounded-full md:rounded-xl">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <h1 className="text-sm text-recyeco-primary font-semibold">
                  Anonymous
                </h1>
              </DropdownMenuItem>
            </Link>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="block md:hidden">
            {MainMenu.map(item => (
              <DropdownMenuItem key={item.id}>
                <Link href="">{item.title}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          {!isLoggedIn ? (
            <></>
          ) : (
            <Link href="" className="font-semibold">
              <DropdownMenuItem className="flex justify-between items-center cursor-pointer">
                <span>Log Out</span>
                <div>
                  <LogOut className="text-red-600" />
                </div>
              </DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <header className="w-full sticky top-0 z-10 flex-none transition-colors duration-500 shadow-sm border-b bg-white">
      <div className="hidden md:block bg-[#E7E7E7]">
        <div className="container flex justify-between items-center py-2">
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
          <Link href="/">
            <Image
              src={recyecoLogo}
              width={0}
              height={0}
              alt="Logo"
              className="w-24 h-auto"
            />
          </Link>
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
            <div className="flex md:hidden text-xs">{renderDropdown()}</div>
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
                  <div className="w-22 h-12 flex items-center justify-between bg-[#E1F7E8] rounded-xl gap-2 px-2">
                    <p className="font-normal">Toko</p>
                    <div className="w-10 h-10 bg-black rounded-xl"></div>
                  </div>
                  {renderDropdown()}
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
