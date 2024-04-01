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

export const CategoryItems: CategoryItem[] = [
  {
    id: 1,
    backgroundColor: 'bg-[#3B97D326]',
    borderColor: 'hover:border-[#3B97D3]',
    label: 'Plastik'
  },
  {
    id: 2,
    backgroundColor: 'bg-[#35CC3326]',
    borderColor: 'hover:border-[#35CC33]',
    label: 'Kaca'
  },
  {
    id: 3,
    backgroundColor: 'bg-[#8A8B8E26]',
    borderColor: 'hover:border-[#8A8B8E]',
    label: 'Logam'
  },
  {
    id: 4,
    backgroundColor: 'bg-[#C43B3B26]',
    borderColor: 'hover:border-[#C43B3B]',
    label: 'Kertas'
  },
  {
    id: 5,
    backgroundColor: 'bg-[#A0CC0026]',
    borderColor: 'hover:border-[#A0CC00]',
    label: 'Organik'
  },
  {
    id: 6,
    backgroundColor: 'bg-[#FFB65526]',
    borderColor: 'hover:border-[#FFB655]',
    label: 'Tekstil'
  },
  {
    id: 7,
    backgroundColor: 'bg-[#61788126]',
    borderColor: 'hover:border-[#617881]',
    label: 'Elektronik'
  },
  {
    id: 8,
    backgroundColor: 'bg-[#C6A51A26]',
    borderColor: 'hover:border-[#C6A51A]',
    label: 'Baterai'
  }
];

export const IklanItems: IklanItem[] = [
  {
    id: 1,
    backgroundImage: 'carouselToko.svg',
    title: 'Iklan Toko'
  },
  {
    id: 2,
    backgroundImage: 'carouselDana.svg',
    title: 'Iklan Dana'
  },
  {
    id: 3,
    backgroundImage: 'carouselProduk.svg',
    title: 'Iklan Produk'
  }
];
