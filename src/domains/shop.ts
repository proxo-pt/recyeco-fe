import { z } from 'zod';

enum MESSAGE {
  SHOP = 'Shop name must be filled in',
  PHONE = 'Phone Number must be filled in',
  ADDRESS = 'Address must be filled in',
  MAPS = 'Google Maps Link must be filled in'
}

export const ShopResSchema = z.object({
  toko: z.string({ required_error: MESSAGE.SHOP }).min(3).optional(),
  kontak: z.string({ required_error: MESSAGE.PHONE }).optional(),
  lokasi: z.string({ required_error: MESSAGE.ADDRESS }).optional(),
  link_map: z.string({ required_error: MESSAGE.MAPS }).optional()
});

export type ShopResType = z.infer<typeof ShopResSchema>;
