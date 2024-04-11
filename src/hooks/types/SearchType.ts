export interface NavigateProductStore {
  search: string | undefined;
  type: string | undefined;
  page: number;
  setSearch: (searchString: string | undefined) => void;
  setType: (typeString: string | undefined) => void;
  setPage: (typeString: number) => void;
}
