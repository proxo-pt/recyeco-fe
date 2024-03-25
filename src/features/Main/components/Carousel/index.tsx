'use client';
import { FC } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { getAssetUrl } from '@/lib/utils';
import { IklanItems } from '@/constants/menu';

const CarouselIklan: FC = () => {
  return (
    <div className="px-20">
      <Carousel
        opts={{
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
      >
        <CarouselContent>
          {IklanItems.map(({ id, backgroundImage, title }) => (
            <CarouselItem key={id}>
              <div className={`flex justify-end`}>
                <Image
                  src={getAssetUrl(`/imgs/${backgroundImage}`)}
                  alt={title}
                  width={1190}
                  height={370}
                  className="relative"
                />
                <div className="absolute flex items-center justify-center w-24 h-8 mt-2 rounded-l-full bg-white">
                  <p className="text-xs">RecyEco</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  );
};

export default CarouselIklan;
