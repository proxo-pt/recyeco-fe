import React, { ReactNode } from 'react';
import DashboardSide from '../DashboardSide';
import DashboardNav from '../DashboardNav';

const WrapperDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <DashboardNav />
        <div className="flex">
          <DashboardSide />
          <div className="flex min-h-screen bg-[#E7E7E7] overflow-hidden w-full">
            <main className="flex-1 overflow-y-auto overflow-x-hidden pt-14">
              <div className="py-6 px-8">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapperDashboard;
