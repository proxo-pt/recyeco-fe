import DashboardTotals from './sections/DashboardOverview/dashboardTotals';
import DashboardProduct from './sections/DashboardProduct';

const DashboardToko = () => {
  return (
    <div>
      <div className="text-2xl font-bold space-y-4">
        <DashboardTotals />
        <DashboardProduct />
      </div>
    </div>
  );
};

export default DashboardToko;
