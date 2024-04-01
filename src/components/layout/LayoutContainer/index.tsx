'use client';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import Wrapper from '../Wrapper';

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const routerPath = usePathname();
  const pathName = ['/sign-in', '/sign-up'];
  const isIndexPage = pathName.includes(routerPath);

  console.log(routerPath);
  return <>{isIndexPage ? <>{children}</> : <Wrapper>{children}</Wrapper>}</>;
};

export default LayoutContainer;
