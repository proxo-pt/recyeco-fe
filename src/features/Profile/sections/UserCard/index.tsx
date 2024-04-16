'use client';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useProfileData } from '../../hooks';

const UserCard = () => {
  const { data: profileData } = useProfileData();

  return (
    <div className="xl:col-span-1 col-span-4">
      <Card className="rounded-2xl shadow-xl divide-y-2">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="rounded-xl">
              <AvatarImage
                src={profileData?.foto || 'https://github.com/shadcn.png'}
              />
            </Avatar>
            <h1 className="text-sm text-recyeco-primary font-semibold">
              {profileData?.username}
            </h1>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Button
            asChild
            variant="outline"
            className="w-full border-black rounded-xl"
          >
            <Link href="/new-pass" className="font-semibold">
              Buat Kata Sandi Baru
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
