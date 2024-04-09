import React, { ReactNode } from 'react';
import DashboardSide from '../DashboardSide';
import Footer from '../Footer';
import DashboardNav from '../DashboardNav';

const WrapperDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <DashboardNav />
        <div className="flex">
          <DashboardSide />
          <div className="flex h-screen border-collapse overflow-hidden w-full">
            <main className="flex-1 overflow-y-auto overflow-x-hidden pt-14">
              <div className="pt-6 pl-8">{children}</div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default WrapperDashboard;
