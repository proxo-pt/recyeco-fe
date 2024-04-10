'use client';
import { getToken } from '@/lib/storage';
import UserCard from './sections/UserCard';
import UserForm from './sections/UserForm';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const ProfilePage = () => {
  const token = getToken();

  useEffect(() => {
    if (!token) {
      redirect('/');
    }
  });

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container grid xl:grid-cols-4 grid-cols-1 xl:gap-4 gap-y-4 py-4">
          <UserCard />
          <UserForm />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
