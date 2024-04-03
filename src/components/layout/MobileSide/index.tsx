import { useState } from 'react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import MenuSide from '../MenuSide';
import recyecoLogo from '@/assets/recyeco-logo.svg';
import useSidebar from '@/hooks/useSidebar';

const MobileSide = () => {
  const { isOpenResponsive, toggleSidebar } = useSidebar();

  return (
    <>
      <Sheet
        open={isOpenResponsive}
        onOpenChange={() => toggleSidebar('responsive')}
        modal={true}
      >
        <SheetTrigger asChild>
          <div className="flex items-center justify-center">
            <HamburgerMenuIcon
              width={45}
              height={25}
              className="md:hidden md:opacity-0 duration-200 text-primary mr-1 -ml-4 cursor-pointer"
            />
            <Image src={recyecoLogo} width={100} height={30} alt="Logo" />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <div className="px-2">
            <Image src={recyecoLogo} width={100} height={30} alt="Logo" />
          </div>
          <div className="mt-4">
            <MenuSide setOpen={() => toggleSidebar('responsive')} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileSide;
