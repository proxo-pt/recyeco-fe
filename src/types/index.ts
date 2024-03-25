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
