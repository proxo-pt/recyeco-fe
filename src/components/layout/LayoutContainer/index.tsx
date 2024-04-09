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
    '/sign-in',
    '/sign-up',
    '/about',
    '/forget-pass',
    '/forget-newpass',
    '/forget-resetpass',
    '/profile',
    '/detail-product',
    '/detail-product/transaction-steps'
  ];
  const navPathName = [
    '/',
    '/about',
    '/profile',
    '/detail-product',
    '/detail-product/transaction-steps'
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
