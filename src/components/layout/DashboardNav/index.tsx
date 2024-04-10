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
import recyecoLogo from '@/assets/recyeco-dark-logo.svg';
import { useProfileData } from '@/features/Profile/hooks';
import { handleLogout } from '@/lib/utils';

const DashboardNav = () => {
  const { data: profileData } = useProfileData();
  return (
    <div className="absolute top-0 right-0 left-0 border-b bg-background/95 backdrop-blur z-40">
      <nav className="flex h-16 items-center justify-between px-8">
        <div className="hidden md:block">
          <Link href="/">
            <Image src={recyecoLogo} width={100} height={30} alt="Logo" />
          </Link>
        </div>
        <div className="block md:!hidden">
          <MobileSide />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">{profileData?.username}</p>
          <Popover>
            <PopoverTrigger>
              <Avatar className="w-8 h-8">
                <AvatarFallback>{profileData?.username}</AvatarFallback>
                <AvatarImage
                  src={profileData?.foto || 'https://github.com/shadcn.png'}
                />
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
              <div
                className="cursor-pointer p-2 flex items-center gap-3 hover:bg-recyeco-primary/40 rounded-sm"
                onClick={handleLogout}
              >
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
