import { create } from 'zustand';
import { NavigateProductStore } from './types/SearchType';

const useNavigateProduct = create<NavigateProductStore>(set => ({
  search: '',
  type: '',
  page: 1,
  setSearch: (searchString: string | undefined) =>
    set({ search: searchString }),
  setType: (typeString: string | undefined) => set({ type: typeString }),
  setPage: (pageNumber: number) => set({ page: pageNumber })
}));

export default useNavigateProduct;
