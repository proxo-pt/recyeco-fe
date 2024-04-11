import { z } from 'zod';

enum MESSAGE {
  PRODUCT = 'Product name must be filled in',
  TYPE = 'Product typw must be filled in',
  DESC = 'Product description must be filled in',
  WEIGHT = 'Product weight must be filled in',
  PRICE = 'Product price must be filled in'
}

const ProductResSchema = z.object({
  judul: z.string({ required_error: MESSAGE.PRODUCT }).min(3).optional(),
  jenis: z.string({ required_error: MESSAGE.TYPE }).optional(),
  deskripsi: z.string({ required_error: MESSAGE.DESC }).optional(),
  berat: z.string({ required_error: MESSAGE.WEIGHT }).optional(),
  harga: z.string({ required_error: MESSAGE.PRICE }).optional(),
  status: z.string().optional(),
  foto: z.any()
});

export type ProductResType = z.infer<typeof ProductResSchema>;

const TotalResSchema = z.object({
  totalProduk: z.number(),
  totalProdukTerjual: z.number(),
  totalPendapatan: z.number().nullable()
});

export type TotalResType = z.infer<typeof TotalResSchema>;
