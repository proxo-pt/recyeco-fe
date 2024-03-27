import Navbar from '@/components/layout/Navbar';
import Footer from './components/Footer';
import Dashboard from './sections/Dashboard';
import CarouselIklan from './components/Carousel';
import Market from './sections/Market';

const Main = () => {
  return (
    <div>
      <Navbar />
      <CarouselIklan />
      <Dashboard />
      <Market />
      <Footer />
    </div>
  );
};

export default Main;
