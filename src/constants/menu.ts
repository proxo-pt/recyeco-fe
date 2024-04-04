import { CategoryItem, IklanItem, MainMenuType } from '@/types';

export const MainMenu: MainMenuType[] = [
  {
    id: 1,
    title: 'Tentang RecyEco'
  },
  {
    id: 2,
    title: 'Mulai Berjualan'
  },
  {
    id: 3,
    title: 'RecyEco Event'
  }
];

export const CategoryItems: CategoryItem = {
  Plastik: {
    backgroundColor: 'bg-[#3B97D326]',
    textColor: 'text-[#3B97D3]',
    borderColor: 'border-[#3B97D3]',
    label: 'Plastik'
  },
  Kaca: {
    backgroundColor: 'bg-[#35CC3326]',
    textColor: 'text-[#35CC33]',
    borderColor: 'border-[#35CC33]',
    label: 'Kaca'
  },
  Logam: {
    backgroundColor: 'bg-[#8A8B8E26]',
    textColor: 'text-[#8A8B8E]',
    borderColor: 'border-[#8A8B8E]',
    label: 'Logam'
  },
  Kertas: {
    backgroundColor: 'bg-[#C43B3B26]',
    textColor: 'text-[#C43B3B]',
    borderColor: 'border-[#C43B3B]',
    label: 'Kertas'
  },
  Organik: {
    backgroundColor: 'bg-[#A0CC0026]',
    textColor: 'text-[#A0CC00]',
    borderColor: 'border-[#A0CC00]',
    label: 'Organik'
  },
  Tekstil: {
    backgroundColor: 'bg-[#FFB65526]',
    textColor: 'text-[#FFB655]',
    borderColor: 'border-[#FFB655]',
    label: 'Tekstil'
  },
  Elektronik: {
    backgroundColor: 'bg-[#61788126]',
    textColor: 'text-[#617881]',
    borderColor: 'border-[#617881]',
    label: 'Elektronik'
  },
  Baterai: {
    backgroundColor: 'bg-[#C6A51A26]',
    textColor: 'text-[#C6A51A]',
    borderColor: 'border-[#C6A51A]',
    label: 'Baterai'
  }
};

export const IklanItems: IklanItem[] = [
  {
    id: 1,
    backgroundImage: 'carouselJoin.svg',
    title: 'Iklan Join'
  },
  {
    id: 2,
    backgroundImage: 'carouselToko.svg',
    title: 'Iklan Toko'
  },
  {
    id: 3,
    backgroundImage: 'carouselDana.svg',
    title: 'Iklan Dana'
  }
];
