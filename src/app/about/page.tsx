import { FC } from 'react';
import { NextPage } from 'next';
import AboutPage from '@/features/About';

const About: FC<NextPage> = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default About;
