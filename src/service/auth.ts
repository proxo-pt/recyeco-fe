import {
  LoginResType,
  LoginType,
  RegisterType,
  RegisterResType,
  ForgetPassType,
  ForgetPassResType,
  ResetPassType,
  ResetPassResType
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
  },

  forgetPass: async (
    data: ForgetPassType
  ): Promise<BaseResponseType<ForgetPassResType>> => {
    const res = await fetcher.post('sendemail', data);
    return res.data;
  },

  resetPass: async (
    data: ResetPassType
  ): Promise<BaseResponseType<ResetPassResType>> => {
    const res = await fetcher.put('resetpassword', data);
    return res.data;
  }
};
