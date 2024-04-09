import { z } from 'zod';

export const BaseResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema.optional(),
    user: dataSchema.optional(),
    code: z.number().optional(),
    error: z.boolean().optional(),
    page: z.string().optional(),
    message: z.string().optional()
  });

export type BaseResponseType<T = unknown> = z.infer<
  ReturnType<typeof BaseResponseSchema<z.ZodType<T>>>
>;
