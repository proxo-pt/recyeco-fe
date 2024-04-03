import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { LockIcon, User2 } from 'lucide-react';
import MobileSide from '../MobileSide';
import recyecoLogo from '@/assets/recyeco-logo.svg';

const DashboardNav = () => {
  return (
    <div className="absolute top-0 right-0 left-0 border-b bg-background/95 backdrop-blur z-40">
      <nav className="flex h-16 items-center justify-between px-8">
        <div className="hidden md:block">
          <Image src={recyecoLogo} width={100} height={30} alt="Logo" />
        </div>
        <div className="block md:!hidden">
          <MobileSide />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">Anonymous</p>
          <Popover>
            <PopoverTrigger>
              <Avatar className="w-8 h-8">
                <AvatarFallback>Anonymous</AvatarFallback>
                <AvatarImage src="https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="mt-5 mr-6 space-y-2 p-3">
              <Link
                href="/profile"
                className="p-2 flex items-center gap-3 hover:bg-recyeco-primary/40 rounded-sm"
              >
                <User2 />
                <p className="text-sm cursor-pointer">Profile</p>
              </Link>
              <div className="p-2 flex items-center gap-3 hover:bg-recyeco-primary/40 rounded-sm">
                <LockIcon />
                <p className="text-sm cursor-pointer">Logout</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </div>
  );
};
export default DashboardNav;
