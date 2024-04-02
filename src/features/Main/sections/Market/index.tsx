'use client';
import { FC, useState } from 'react';
import ItemCard from '../../components/ItemCard';
import { Items } from '@/constants/items';
import { Event } from '@/constants/event';
import { getAssetUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';

const Market: FC = () => {
  const [tab, setTab] = useState(1);

  const updateTab = (id: number) => {
    setTab(id);
  };

  return (
    <div className="container min-h-screen mx-auto px-6 py-2">
      <div className="mb-8 h-8">
        <ul className="flex gap-4 text-base sm:text-xl">
          <li
            className={cn(
              'hover:font-semibold hover:text-[#3DAA5F] hover:border-b-4 border-[#3DAA5F] cursor-pointer',
              {
                'text-[#3DAA5F] font-semibold border-b-4': tab === 1
              }
            )}
            onClick={() => updateTab(1)}
          >
            Recyeco Belanja
          </li>
          <li
            className={cn(
              'hover:font-semibold hover:text-[#3DAA5F] hover:border-b-4 border-[#3DAA5F] cursor-pointer',
              {
                'text-[#3DAA5F] font-semibold border-b-4': tab === 2
              }
            )}
            onClick={() => updateTab(2)}
          >
            Recyeco Event
          </li>
        </ul>
      </div>

      <div
        className={
          tab === 1
            ? `grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center sm:justify-items-stretch`
            : `hidden`
        }
      >
        {Items.map(item => (
          <ItemCard
            key={item.id}
            className="max-w-64 sm:max-w-full"
            type="item"
            title={item.title}
            img={getAssetUrl(`/img/${item.img}`)}
            location={item.location}
            price={item.price}
            weight={item.weight}
          />
        ))}
      </div>
      <div
        className={
          tab === 2
            ? `grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center sm:justify-items-stretch`
            : `hidden`
        }
      >
        {Event.map(item => (
          <ItemCard
            key={item.id}
            className="max-w-64 sm:max-w-full"
            type="event"
            title={item.title}
            img={getAssetUrl(`/img/${item.img}`)}
            point={item.point}
            date={item.date}
            slot={item.slot}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};
export default Market;
