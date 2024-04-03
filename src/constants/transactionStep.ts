import { TransactionStepType } from '@/types';

export const TransactionStepItem: TransactionStepType[] = [
  {
    id: 1,
    title: 'Hubungi Penjual',
    img: 'trStep1.svg',
    desc: 'Hubungi penjual untuk menyelesaikan detail pembelian dan kesepakatan penjemputan.'
  },
  {
    id: 2,
    title: 'Diskusikan Detail',
    img: 'trStep2.svg',
    desc: 'Pastikan untuk membahas detail transaksi secara lengkap dengan penjual.'
  },
  {
    id: 3,
    title: 'Diskusikan Lokasi dan Waktu',
    img: 'trStep3.svg',
    desc: 'Aturlah lokasi dan waktu bertemu dengan penjual sesuai kesepakatan.'
  },
  {
    id: 4,
    title: 'Bertemu Penjual',
    img: 'trStep4.svg',
    desc: 'Bertemu dengan penjual dan lakukan transaksi di lokasi sesuai kesepakatan.'
  },
  {
    id: 5,
    title: 'Transaksi Selesai',
    img: 'trStep5.svg',
    desc: 'Transaksi selesai! Terima kasih atas pembelian Anda. Selamat mendaur ulang!'
  }
];
