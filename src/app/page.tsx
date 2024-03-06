import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const MainPage = dynamic(() => import('../features/Main'), { ssr: false });

const Home: FC<NextPage> = () => {
  return <MainPage />;
};

export default Home;
