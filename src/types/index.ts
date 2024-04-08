import { LucideIcon } from 'lucide-react';

export interface MainMenuType {
  id?: number;
  title?: string;
  url: string;
}

export interface FooterImgType {
  id: number;
  alt?: string;
  src?: string;
}

export interface SocialMediaType {
  id: number;
  src: LucideIcon;
}

export interface CategoryItem {
  [key: string]: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    label?: string;
  };
}

export interface IklanItem {
  id?: number;
  backgroundImage: string;
  title: string;
}

export interface ItemCardProps {
  title?: string;
  img?: string;
  price: number;
  category?: string;
  shopName?: string;
  className?: string;
}

export interface ItemsType {
  id: number;
  img?: string;
  title?: string;
  price: number;
  weight?: number;
  location?: string;
  category?: string;
  shopName?: string;
}

export interface TransactionStepType {
  id: number;
  title?: string;
  img?: string;
  desc?: any;
}

export type DashboardMenuType = {
  id: number;
  title: string;
  icon: LucideIcon;
  path: string;
  isChildren: boolean;
};

export interface SidebarContextProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

export interface MenuSidebarProps {
  setOpen?: (open: boolean) => void;
}

export interface NavbarProps {
  isLoggedIn: boolean;
}

export interface TokoMenuType {
  id?: number;
  title?: string;
}

export interface AboutTeamType {
  id?: number;
  title?: string;
  description?: string;
  src?: string;
  alt?: string;
}

export interface ProductDashType {
  id?: number;
  title?: string;
}
export interface DashProductType {
  id?: number;
  number: number;
  description: string;
  user: string;
  weight: string;
  price: string;
  status: string;
  action: ActionType[];
}

type ActionType = 'Setujui' | 'Batalkan';