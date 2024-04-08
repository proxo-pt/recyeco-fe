import { z } from 'zod';
import { EmailSchema } from './auth';

enum MESSAGE {
  USERNAME = 'Username must be filled in and contain at least 3 characters',
  GENDER = 'Gender must be filled in',
  BIRTHDATE = 'Birthdate must be filled in',
  EMAIL = 'Email must be filled in'
}

export const ProfileResSchema = z.object({
  username: z.string({ required_error: MESSAGE.USERNAME }).min(3).optional(),
  birthdate: z.string({ required_error: MESSAGE.BIRTHDATE }).optional(),
  gender: z.string({ required_error: MESSAGE.GENDER }).optional(),
  email: EmailSchema.optional()
});

export type ProfileResType = z.infer<typeof ProfileResSchema>;
