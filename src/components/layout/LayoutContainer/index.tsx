'use client';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import Wrapper from '../Wrapper';
import { SidebarProvider } from '@/providers/sidebarProvider';

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const routerPath = usePathname();
  const pathName = [
    '/',
    '/sign-in',
    '/sign-up',
    '/about',
    '/forget-pass',
    '/forget-newpass',
    '/forget-resetpass',
    '/profile'
  ];
  const isIndexPage = pathName.includes(routerPath);

  return (
    <SidebarProvider>
      {isIndexPage ? <>{children}</> : <Wrapper>{children}</Wrapper>}
    </SidebarProvider>
  );
};

export default LayoutContainer;
