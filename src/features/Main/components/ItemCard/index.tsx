import { FC } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { ItemCardProps } from '@/types';
import { cn, formatNumber } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import LabelCategory from '@/components/common/labelCategory';

const ItemCard: FC<ItemCardProps> = ({
  title,
  img,
  price,
  category,
  shopName,
  className,
  onClick
}) => {
  return (
    <Card
      className={cn(
        `flex flex-col w-auto drop-shadow-md rounded-xl cursor-pointer`,
        className
      )}
      onClick={onClick}
    >
      <div className="relative w-full h-32 md:h-52">
        <div className="absolute top-0 right-0 z-50 p-4 pr-3 pt-3 rounded-tr-xl rounded-bl-[2rem] bg-[#222D33] text-recyeco-primary">
          <ShoppingCart />
        </div>
        <Image
          src={img ? `${img}` : ''}
          layout="fill"
          alt="gambar sampah"
          className="rounded-t-xl object-cover"
        />
      </div>
      <CardHeader className="block p-3 pb-1">
        <LabelCategory category={category} />
        <CardTitle className="text-sm font-normal line-clamp-1">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 pb-3 text-sm flex flex-col gap-3">
        <div className="text-sm font-bold text-[#3DAA5F]">
          Rp {formatNumber(price)}
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="line-clamp-1">{shopName}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
