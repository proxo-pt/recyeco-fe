import {
  TotalIncomeService,
  TotalProductService,
  TotalSoldService
} from '@/service/product';
import { useQuery } from '@tanstack/react-query';

export const useTotalData = () => {
  return useQuery({
    queryKey: ['useTotalData'],
    queryFn: async () => {
      const [totalProduct, totalSold, totalIncome] = await Promise.all([
        TotalProductService(),
        TotalSoldService(),
        TotalIncomeService()
      ]);
      return { totalProduct, totalSold, totalIncome };
    }
  });
};
