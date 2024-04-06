'use client';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const UserCard = () => {
  return (
    <div className="xl:col-span-1 col-span-4">
      <Card className="rounded-2xl shadow-xl divide-y-2">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="rounded-xl">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h1 className="text-sm text-recyeco-primary font-semibold">
              Anonymous
            </h1>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Button
            asChild
            variant="outline"
            className="w-full border-black rounded-xl"
          >
            <Link href="/forget-newpass" className="font-semibold">
              Buat Kata Sandi Baru
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
