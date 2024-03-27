import { FC } from 'react';
import Link from 'next/link';
import ItemCard from '../../components/ItemCard';
import { Items } from '@/constants/items';
import { Event } from '@/constants/event';
import { getAssetUrl } from '@/lib/utils';

const Market: FC = () => {
  return (
    <div className="container mx-auto px-6 py-2">
      <div className="mb-8">
        <ul className="flex gap-4 text-xl">
          <li className="">
            <Link
              href={'#'}
              className="hover:font-semibold hover:text-[#3DAA5F] hover:border-b-4 border-[#3DAA5F]"
            >
              Recyeco Belanja
            </Link>
          </li>
          <li>
            <Link
              href={'#'}
              className="hover:font-semibold hover:text-[#3DAA5F] hover:border-b-4 border-[#3DAA5F]"
            >
              Recyeco Event
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5">
        {Items.map(item => (
          <ItemCard
            key={item.id}
            type="item"
            title={item.title}
            img={getAssetUrl(`/img/${item.img}`)}
            location={item.location}
            price={item.price}
            weight={item.weight}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5 mt-5">
        {Event.map(item => (
          <ItemCard
            key={item.id}
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
