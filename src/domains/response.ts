import { z } from 'zod';

export const BaseResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema.nullable(),
    code: z.number(),
    message: z.string().optional()
  });

export type BaseResponseType<T = unknown> = z.infer<
  ReturnType<typeof BaseResponseSchema<z.ZodType<T>>>
>;
