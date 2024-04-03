export interface SidebarStore {
  isOpen: boolean;
  isOpenResponsive: boolean;
  toggleSidebar: (check: string) => void;
}
