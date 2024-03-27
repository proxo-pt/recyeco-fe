import { LucideIcon } from 'lucide-react';

export interface MainMenuType {
  id?: number;
  title?: string;
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
  id?: number;
  backgroundColor?: string;
  borderColor?: string;
  label?: string;
}

export interface IklanItem {
  id?: number;
  backgroundImage: string;
  title: string;
}

export interface ItemCardProps {
  title?: string;
  img?: string;
  price?: number;
  type: string;
  [key: string]: any;
}

export interface ItemsType {
  id: number;
  img?: string;
  title?: string;
  price?: number;
  weight?: number;
  location?: string;
}

export interface EventType {
  id: number;
  img?: string;
  title?: string;
  point?: number;
  date?: string;
  slot?: number;
  location?: string;
}
