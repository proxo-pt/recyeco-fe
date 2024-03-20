import Navbar from '@/components/layout/Navbar';
import Footer from './components/Footer';
import Dashboard from './sections/Dashboard';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Main;
