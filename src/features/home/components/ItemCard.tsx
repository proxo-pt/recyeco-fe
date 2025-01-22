import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, IDRFormatter } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ItemCardProps {
  title: string;
  img: string;
  price: number;
  category: string;
  shopName: string;
  className?: string;
}

export default function ItemCard({ title, img, price, category, shopName, className }: ItemCardProps) {
  return (
    <Card
      className={cn(`group flex w-auto cursor-pointer flex-col overflow-hidden rounded-xl drop-shadow-md`, className)}
    >
      <div className="relative h-32 w-full overflow-hidden md:h-52">
        <div className="absolute right-0 top-0 z-50 rounded-bl-[2rem] rounded-tr-xl bg-[#222D33] p-4 pr-3 pt-3 text-recyeco-primary">
          <ShoppingCart />
        </div>
        <Image
          src={img ?? ""}
          alt={title}
          fill
          className="rounded-t-xl object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-1">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="line-clamp-1 text-lg font-black">{title}</CardTitle>
          <Badge>{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 p-4 pt-2 text-sm">
        <div className="text-sm font-bold text-[#3DAA5F]">{IDRFormatter(price)}</div>
        <div className="flex items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="line-clamp-1 font-semibold">{shopName}</div>
        </div>
      </CardContent>
    </Card>
  );
}
