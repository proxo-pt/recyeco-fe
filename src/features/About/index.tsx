import Navbar from '@/components/layout/Navbar';
import VisiMisi from './sections/VisiMisi';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-recyeco-about">
      <Navbar />
      <VisiMisi />
      <Footer />
    </div>
  );
};

export default AboutPage;
