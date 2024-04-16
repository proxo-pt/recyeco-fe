'use client';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import WrapperDashboard from '../WrapperDashboard';
import { SidebarProvider } from '@/providers/sidebarProvider';
import Wrapper from '../Wrapper';

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const routerPath = usePathname();
  const pathName = [
    '/',
    '/about',
    '/forget-pass',
    '/forget-resetpass',
    '/new-pass',
    '/product',
    '/product/transaction-steps',
    '/profile',
    '/sign-in',
    '/sign-up'
  ];
  const navPathName = [
    '/',
    '/about',
    '/product',
    '/product/transaction-steps',
    '/profile'
  ];
  const isIndexPage = pathName.includes(routerPath);
  const isMainPage = navPathName.includes(routerPath);

  return (
    <SidebarProvider>
      {isIndexPage ? (
        isMainPage ? (
          <Wrapper>{children}</Wrapper>
        ) : (
          children
        )
      ) : (
        <WrapperDashboard>{children}</WrapperDashboard>
      )}
    </SidebarProvider>
  );
};

export default LayoutContainer;
