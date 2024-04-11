import {
  ProductDetailDataService,
  ProductPostDataService
} from '@/service/product';
import { useQuery } from '@tanstack/react-query';

export const useProductPostData = (
  searchParam: string | undefined,
  typeParam: string | undefined,
  pageParam: number
) => {
  return useQuery({
    queryKey: ['useProductPostData', searchParam, typeParam, pageParam],
    queryFn: async () =>
      await ProductPostDataService(searchParam, typeParam, pageParam)
  });
};

export const useProductDetailData = (idParam: number) => {
  return useQuery({
    queryKey: ['useProductDetailData', idParam],
    queryFn: async () => await ProductDetailDataService(idParam)
  });
};
