import DashboardStatistics from './sections/DashboardOverview/dashboardStatistics';
import DashboardTotals from './sections/DashboardOverview/dashboardTotals';
import DashboardProduct from './sections/DashboardProduct';

const DashboardToko = () => {
  return (
    <div className="h-full">
      <div className="text-2xl font-bold space-y-4">
        <DashboardTotals />
        <DashboardStatistics />
        <DashboardProduct />
      </div>
    </div>
  );
};

export default DashboardToko;
