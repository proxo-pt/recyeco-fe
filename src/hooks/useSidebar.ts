import { create } from 'zustand';
import { SidebarStore } from './types/SidebarType';

const useSidebar = create<SidebarStore>(set => ({
  isOpen: false,
  isOpenResponsive: false,
  toggleSidebar: check =>
    set(state => {
      return check === 'responsive'
        ? { isOpenResponsive: !state.isOpenResponsive }
        : { isOpen: !state.isOpen };
    })
}));

export default useSidebar;
