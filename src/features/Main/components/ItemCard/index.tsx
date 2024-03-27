import { FC } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import Image from 'next/image';
import { Bookmark, ShoppingCart } from 'lucide-react';
import { ItemCardProps } from '@/types';
import { ItemAttribute, EventAttribute } from '@/constants/itemCardAttribute';
import clsx from 'clsx';

const ItemCard: FC<ItemCardProps> = ({ title, img, price, type, ...props }) => {
  const AttributeMap =
    type === 'item' ? ItemAttribute : type === 'event' ? EventAttribute : [];

  return (
    <Card className="max-w-64 drop-shadow-md max-h-96 rounded-tl-3xl cursor-pointer">
      <div className="relative w-full h-28">
        <Image
          src={img ? `${img}` : ''}
          layout="fill"
          objectFit="cover"
          alt="gambar sampah"
          className="rounded-tl-3xl"
        />
      </div>
      <div
        className={clsx(
          'flex items-center w-full h-8 px-3 rounded-br-3xl text-white text-xs ',
          {
            'bg-[#3DAA5F]': type === 'item',
            'bg-[#00674E]': type === 'event'
          }
        )}
      >
        {type === 'item'
          ? 'Recyeco Belanja'
          : type === 'event'
            ? 'Recyco Event'
            : ''}
      </div>
      <CardHeader className="p-3">
        <CardTitle className="text-sm font-normal line-clamp-2">
          {title}
        </CardTitle>
        {type === 'item' ? (
          <div className="font-bold text-[#3DAA5F]">Rp {price}</div>
        ) : (
          ''
        )}
      </CardHeader>
      <CardContent className="px-3 py-0 text-sm flex flex-col gap-1">
        {AttributeMap.map(item => (
          <div key={item.id} className="flex items-center gap-3">
            <div>
              <item.Icon className={item.iconColor} />
            </div>
            <span className="truncate">{props[item.propsName]}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="px-3 py-4 flex justify-end">
        <div>{type === 'item' ? <ShoppingCart /> : <Bookmark />}</div>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
