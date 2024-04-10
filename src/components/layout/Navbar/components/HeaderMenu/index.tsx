import { FC } from 'react';
import Link from 'next/link';
import { MainMenu } from '@/constants/menu';
import { MapPin } from 'lucide-react';

const HeaderMenu: FC = () => {
  return (
    <div className="hidden md:block bg-[#E7E7E7]">
      <div className="container flex justify-end items-center py-2">
        <ul className="flex items-center gap-6">
          {MainMenu.map(menu => (
            <li key={menu.id} className="text-xs text-black">
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
