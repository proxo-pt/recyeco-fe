import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ItemCard from '../../components/ItemCard';
import { getAssetUrl } from '@/lib/utils';
import { Items } from '@/constants/items';
import { CategoryItems } from '@/constants/menu';

const Market = () => {
  return (
    <div className="container min-h-screen mx-auto">
      <div className="flex-1 flex flex-col gap-3 mb-8">
        <h1 className="text-lg font-bold">Kategori</h1>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {Object.keys(CategoryItems).map(key => {
            const { backgroundColor, borderColor, label } = CategoryItems[key];
            return (
              <Button
                key={key}
                asChild
                variant="outline"
                className={`flex flex-col flex-auto justify-center items-center w-28 h-24 p-4 text-black hover:bg-${backgroundColor} ${backgroundColor} hover:border-2 ${borderColor} rounded-lg`}
              >
                <Link href="">
                  <Icon type={label} />
                  <h1 className="text-sm mt-2">{label}</h1>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="mb-3">
        <h2 className="text-lg font-bold">Recyeco Belanja</h2>
      </div>
      <div
        className={`grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 sm:justify-items-stretch`}
      >
        {Items.map(item => (
          <ItemCard
            key={item.id}
            className="max-w-64 sm:max-w-full"
            price={item.price}
            title={item.title}
            category={`${item.category}`}
            shopName={`${item.shopName}`}
            img={getAssetUrl(`/imgs/${item.img}`)}
          />
        ))}
      </div>
    </div>
  );
};
export default Market;
