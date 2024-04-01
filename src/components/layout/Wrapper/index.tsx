import React, { ReactNode } from 'react';
import Navbar from '../Navbar';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Wrapper;
