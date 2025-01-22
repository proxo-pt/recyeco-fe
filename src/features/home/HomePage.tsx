import Image from "next/image";
import CategoryCard from "./components/CategoryCard";
import ItemCard from "./components/ItemCard";
import { MARKET_CATEGORIES, MARKET_ITEMS } from "./constants";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen p-7">
      <Image src="/assets/images/advertise-banner.png" alt="Advertise Banner" width={1500} height={1000} />

      {/* Market Category */}
      <div className="py-4">
        <h3 className="text-lg font-semibold">Kategori</h3>
        <div className="mt-2 grid grid-cols-4 gap-2 lg:grid-cols-8">
          {MARKET_CATEGORIES.map(({ name, image, color }) => (
            <CategoryCard key={name} src={image} alt={name} title={name} color={color} />
          ))}
        </div>
      </div>

      {/* Recyeco Market */}
      <div className="py-4">
        <h3 className="text-lg font-semibold">Recyeco Belanja</h3>
        <div className="mt-2 grid gap-4 lg:grid-cols-4">
          {MARKET_ITEMS.map(({ title, img, price, category, shopName }) => (
            <ItemCard key={title} title={title} img={img} price={price} category={category} shopName={shopName} />
          ))}
        </div>
      </div>
    </main>
  );
}
