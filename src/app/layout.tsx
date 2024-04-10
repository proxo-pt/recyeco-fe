import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import TanstackProvider from '@/components/provider/TanstackProvider';
import LayoutContainer from '@/components/layout/LayoutContainer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Recyeco Mart'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TanstackProvider>
          <LayoutContainer>{children}</LayoutContainer>
        </TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
