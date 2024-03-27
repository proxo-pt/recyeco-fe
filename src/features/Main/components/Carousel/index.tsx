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
    <div className="container mx-auto flex justify-center items-center px-6">
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
              <div className="flex justify-center">
                <Image
                  src={getAssetUrl(`/imgs/${backgroundImage}`)}
                  alt={title}
                  width={1190}
                  height={370}
                  className="flex-1 object-fill"
                />
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
