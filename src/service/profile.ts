import { ProfileResType } from '@/domains/profile';
import { fetcher } from '@/service/instance';

export const ProfileDataService = async (): Promise<ProfileResType> => {
  const res = await fetcher.get('profile');
  return res.data.user;
};

export const ProfileUpdateService = async (data: FormData): Promise<any> => {
  const res = await fetcher.put('profil/edit', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return res.data;
};
