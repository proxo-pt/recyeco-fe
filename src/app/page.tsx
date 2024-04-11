import dynamic from 'next/dynamic';

const MainPage = dynamic(() => import('../features/Main'), { ssr: false });

const Home = () => {
  return <MainPage />;
};

export default Home;
