import { FC } from 'react';
import Kategori from '../../components/Kategori';
import CarouselIklan from '../../components/Carousel';

const Dashboard: FC = () => {
  return (
    <div className="container mx-auto p-6">
      <CarouselIklan />
      <Kategori />
    </div>
  );
};

export default Dashboard;
