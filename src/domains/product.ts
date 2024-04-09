import { z } from 'zod';

const TotalResSchema = z.object({
  totalProduk: z.number(),
  totalProdukTerjual: z.number(),
  totalPendapatan: z.number().nullable()
});

export type TotalResType = z.infer<typeof TotalResSchema>;
