'use client';
import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';
import { InputSearch } from '@/components/ui/input-search';
import { Search } from 'lucide-react';
import recyecoLogo from '@/assets/recyeco-dark-logo.svg';
import HeaderMenu from './components/HeaderMenu';
import { UserMobileDefault, UserMobileLogin } from './components/UserMobile';
import { UserDesktopDefault, UserDesktopLogin } from './components/UserDesktop';
import { getToken } from '@/lib/storage';
import useNavigateProduct from '@/hooks/useNavigateProduct';

const Navbar: FC = () => {
  const [isLoggedIn, setLogin] = useState(false);

  const { setSearch } = useNavigateProduct();

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (getToken()) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  const screenSize = useWindowSize();

  return (
    <header className="w-full sticky top-0 z-10 flex-none transition-colors duration-500 shadow-sm border-b bg-white">
      <HeaderMenu />
      <div className="container mx-auto py-4 h-full">
        <div className="flex gap-2 sm:gap-0 items-center justify-between">
          <Link href="/" className="hidden sm:block">
            <Image
              src={recyecoLogo}
              width={0}
              height={0}
              alt="Logo"
              className="w-24 h-auto"
            />
          </Link>
          <div className="rounded-xl block w-full sm:w-6/12 lg:w-6/12">
            <InputSearch
              type="search"
              placeholder="Cari di RecyEco Mart..."
              className="rounded-2xl text-neutral-600 placeholder-neutral-600"
              suffix={<Search className="text-neutral-600" />}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex justify-center items-center">
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
