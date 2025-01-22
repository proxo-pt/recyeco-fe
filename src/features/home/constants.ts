interface MarketCategory {
  id: number;
  name: string;
  image: string;
  color: string;
}

interface MarketItem {
  title: string;
  img: string;
  price: number;
  category: string;
  shopName: string;
}

export const MARKET_CATEGORIES: MarketCategory[] = [
  {
    id: 1,
    name: "Baterai",
    image: "/assets/icons/categories/baterai.svg",
    color: "#C6A51A26",
  },
  {
    id: 2,
    name: "Elektronik",
    image: "/assets/icons/categories/elektronik.svg",
    color: "#61908826",
  },
  {
    id: 3,
    name: "Kaca",
    image: "/assets/icons/categories/kaca.svg",
    color: "#35C73326",
  },
  {
    id: 4,
    name: "Kertas",
    image: "/assets/icons/categories/kertas.svg",
    color: "#C53B3B26",
  },
  {
    id: 5,
    name: "Logam",
    image: "/assets/icons/categories/logam.svg",
    color: "#8A8B8E26",
  },
  {
    id: 6,
    name: "Organik",
    image: "/assets/icons/categories/organik.svg",
    color: "#A0C00026",
  },
  {
    id: 7,
    name: "Plastik",
    image: "/assets/icons/categories/plastik.svg",
    color: "#3B973126",
  },
  {
    id: 8,
    name: "Tekstil",
    image: "/assets/icons/categories/tekstil.svg",
    color: "#FFB65526",
  },
];

export const MARKET_ITEMS: MarketItem[] = [
  {
    title: "Item 1",
    img: "https://github.com/shadcn.png",
    price: 1000,
    category: "Baterai",
    shopName: "Shop A",
  },
  {
    title: "Item 2",
    img: "https://github.com/shadcn.png",
    price: 2000,
    category: "Elektronik",
    shopName: "Shop B",
  },
  {
    title: "Item 3",
    img: "https://github.com/shadcn.png",
    price: 3000,
    category: "Kaca",
    shopName: "Shop C",
  },
  {
    title: "Item 4",
    img: "https://github.com/shadcn.png",
    price: 4000,
    category: "Kertas",
    shopName: "Shop D",
  },
  {
    title: "Item 5",
    img: "https://github.com/shadcn.png",
    price: 5000,
    category: "Logam",
    shopName: "Shop E",
  },
  {
    title: "Item 6",
    img: "https://github.com/shadcn.png",
    price: 6000,
    category: "Organik",
    shopName: "Shop F",
  },
  {
    title: "Item 7",
    img: "https://github.com/shadcn.png",
    price: 7000,
    category: "Plastik",
    shopName: "Shop G",
  },
  {
    title: "Item 8",
    img: "https://github.com/shadcn.png",
    price: 8000,
    category: "Tekstil",
    shopName: "Shop H",
  },
];
