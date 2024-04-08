import { z } from 'zod';

enum MESSAGE_EMAIL {
  EMAIL = 'Email must be filled in',
  INVALID = 'Invalid email address format'
}

enum MESSAGE {
  USERNAME = 'Username must be filled in',
  EMAIL = 'Email must be filled in',
  PASSWORD = 'Passoword must be filled in',
  CONFIRM = 'Confirm Password must be filled in'
}

export const EmailSchema = z
  .string({ required_error: MESSAGE_EMAIL.EMAIL })
  .min(1, { message: MESSAGE_EMAIL.EMAIL })
  .email(MESSAGE_EMAIL.INVALID);

const PasswordSchema = z
  .string({ required_error: MESSAGE.PASSWORD })
  .min(1, { message: MESSAGE.PASSWORD });

export const LoginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema
});

export type LoginType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z
  .object({
    username: z
      .string({ required_error: MESSAGE.USERNAME })
      .min(1, { message: MESSAGE.USERNAME }),
    email: EmailSchema,
    password: PasswordSchema,
    confirm_password: z
      .string({ required_error: MESSAGE.CONFIRM })
      .min(1, { message: MESSAGE.CONFIRM })
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password']
  });

export type RegisterType = z.infer<typeof RegisterSchema>;

const RegisterResSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
  created_at: z.date(),
  updated_at: z.date()
});

export type RegisterResType = z.infer<typeof RegisterResSchema>;

const LoginResSchema = z.string();

export type LoginResType = z.infer<typeof LoginResSchema>;
