'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';
import { InputSearch } from '@/components/ui/input-search';
import { Bell, Search, ShoppingCart } from 'lucide-react';
import recyecoLogo from '@/assets/recyeco-dark-logo.svg';
import HeaderMenu from './components/HeaderMenu';
import { UserMobileDefault, UserMobileLogin } from './components/UserMobile';
import { UserDesktopDefault, UserDesktopLogin } from './components/UserDesktop';

const Navbar: FC = () => {
  const isLoggedIn = true;
  const screenSize = useWindowSize();

  return (
    <header className="w-full sticky top-0 z-10 flex-none transition-colors duration-500 shadow-sm border-b bg-white">
      <HeaderMenu />
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
            {screenSize.width < 768 ? (
              <div className="flex text-xs">
                {!isLoggedIn ? <UserMobileDefault /> : <UserMobileLogin />}
              </div>
            ) : (
              <div className="flex items-center font-semibold text-xs border-l border-neutral-400 pl-4">
                {!isLoggedIn ? <UserDesktopDefault /> : <UserDesktopLogin />}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
