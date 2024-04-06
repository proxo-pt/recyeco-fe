import Navbar from '@/components/layout/Navbar';
import VisiMisi from './sections/VisiMisi';
import Footer from '@/components/layout/Footer';
import AboutTeam from './sections/Team';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-recyeco-about">
      <Navbar />
      <VisiMisi />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default AboutPage;
