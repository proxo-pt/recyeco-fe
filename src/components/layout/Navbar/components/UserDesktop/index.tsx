import { FC } from 'react';
import { DialogDaftarToko } from '../DialogDaftarToko';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { useProfileData } from '@/features/Profile/hooks';
import { handleLogout } from '@/lib/utils';

export const UserDesktopLogin: FC = () => {
  const { data: profileData } = useProfileData();

  return (
    <DialogDaftarToko>
      <div className="flex gap-2">
        <DialogTrigger>
          <div className=" h-12 flex items-center justify-between bg-[#E1F7E8] rounded-xl flex-row-reverse gap-2 px-2">
            <div className="w-10 h-10 bg-black rounded-xl"></div>
            <p className="font-normal">Toko</p>
          </div>
        </DialogTrigger>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div
              className={`max-w-40 h-12 flex flex-row items-center justify-between bg-[#E1F7E8] rounded-xl gap-2 px-2 `}
            >
              <p className="font-normal line-clamp-1">
                {profileData?.username}
              </p>
              <Avatar className="rounded-xl">
                <AvatarImage
                  src={profileData?.foto || 'https://github.com/shadcn.png'}
                />
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-auto min-w-64 p-2">
            <Link href="/profile">
              <DropdownMenuItem className="flex items-center gap-4 cursor-pointer">
                <Avatar className="rounded-xl">
                  <AvatarImage
                    src={profileData?.foto || 'https://github.com/shadcn.png'}
                  />
                </Avatar>
                <h1 className="text-sm text-recyeco-primary font-semibold">
                  {profileData?.username}
                </h1>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link href="" className="font-semibold" onClick={handleLogout}>
              <DropdownMenuItem className="flex justify-between items-center cursor-pointer">
                <span>Log Out</span>
                <div>
                  <LogOut className="text-red-600" />
                </div>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DialogDaftarToko>
  );
};

export const UserDesktopDefault: FC = () => {
  return (
    <div>
      <Button
        asChild
        size="sm"
        variant="outline"
        className="rounded-lg px-6 text-xs bg-transparent text-black border-black hover:text-black"
      >
        <Link href="/sign-up">Daftar</Link>
      </Button>
      <Button asChild size="sm" className="rounded-lg ml-2 px-6 text-xs">
        <Link href="/sign-in">Masuk</Link>
      </Button>
    </div>
  );
};
