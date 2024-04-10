import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { removeCookie } from './storage';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAssetUrl = (url: string) => `/assets${url}`;

export const formatNumber = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const handleFileChange = (e: any) => {
  if (e.target.files && e.target.files.length > 0) {
    return URL.createObjectURL(e.target.files[0]);
  }
  return '';
};

export const handleLogout = () => {
  removeCookie('token');
  location.reload();
};
