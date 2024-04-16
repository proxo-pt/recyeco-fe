import { z } from 'zod';

enum MESSAGE {
  PRODUCT = 'Product name must be filled in',
  TYPE = 'Product typw must be filled in',
  DESC = 'Product description must be filled in',
  WEIGHT = 'Product weight must be filled in',
  PRICE = 'Product price must be filled in'
}

const TotalResSchema = z.object({
  totalProduk: z.number(),
  totalProdukTerjual: z.number(),
  totalPendapatan: z.number().nullable()
});

export type TotalResType = z.infer<typeof TotalResSchema>;

const ProductResSchema = z.object({
  id: z.number(),
  judul: z.string({ required_error: MESSAGE.PRODUCT }).min(3).optional(),
  jenis: z.string({ required_error: MESSAGE.TYPE }).optional(),
  deskripsi: z.string({ required_error: MESSAGE.DESC }).optional(),
  berat: z.string({ required_error: MESSAGE.WEIGHT }).optional(),
  harga: z.number({ required_error: MESSAGE.PRICE }),
  status: z.string().optional(),
  foto: z.any(),
  toko: z.object({
    toko: z.string().optional(),
    kontak: z.string().optional(),
    link_map: z.string().optional(),
    lokasi: z.string().optional()
  })
});

export type ProductResType = z.infer<typeof ProductResSchema>;

export const ProductPostSchema = z.object({
  infoHalaman: z.object({
    Halaman: z.number(),
    total_Halaman: z.number(),
    halaman_berikut: z.boolean()
  }),
  postingan: z.array(
    z.object({
      id: z.number(),
      foto: z.any(),
      penjual: z.string(),
      jenis: z.string(),
      judul: z.string(),
      harga: z.number()
    })
  )
});

export type ProductPostResType = z.infer<typeof ProductPostSchema>;

const ProductBuySchema = z.string().optional();

export type ProductBuyType = z.infer<typeof ProductBuySchema>;

const DashProductResSchema = z.object({
  judul: z.string({ required_error: MESSAGE.PRODUCT }).min(3).optional(),
  jenis: z.string({ required_error: MESSAGE.TYPE }).optional(),
  deskripsi: z.string({ required_error: MESSAGE.DESC }).optional(),
  berat: z.string({ required_error: MESSAGE.WEIGHT }).optional(),
  harga: z.string({ required_error: MESSAGE.PRICE }).optional(),
  status: z.string().optional(),
  foto: z.any()
});

export type DashProductResType = z.infer<typeof DashProductResSchema>;

const DashProductVerifySchema = z.enum(['Setujui', 'Batalkan']);

export type DashProductVerifyType = z.infer<typeof DashProductVerifySchema>;
