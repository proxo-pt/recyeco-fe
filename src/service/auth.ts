import {
  LoginResType,
  LoginType,
  RegisterType,
  RegisterResType
} from '@/domains/auth';
import { BaseResponseType } from '@/domains/response';
import { fetcher } from './instance';
import { setToken } from '@/lib/storage';

export const AuthService = {
  register: async (
    data: RegisterType
  ): Promise<BaseResponseType<RegisterResType>> => {
    const res = await fetcher.post('register', data);
    return res.data;
  },

  login: async (data: LoginType): Promise<BaseResponseType<LoginResType>> => {
    const res = await fetcher.post('login', data);
    await setToken(res.data.token);
    return res.data;
  }
};
