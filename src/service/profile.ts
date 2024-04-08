import { ProfileResType } from '@/domains/profile';
import { fetcher } from '@/service/instance';

export const ProfileDataService = async (): Promise<ProfileResType> => {
  const res = await fetcher.get('profile');
  return res.data.user;
};

export const ProfileUpdateService = async (
  data: ProfileResType
): Promise<ProfileResType> => {
  const res = await fetcher.put('profil/edit', data);
  return res.data.user;
};
