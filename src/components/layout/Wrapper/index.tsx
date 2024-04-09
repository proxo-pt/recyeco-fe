import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
