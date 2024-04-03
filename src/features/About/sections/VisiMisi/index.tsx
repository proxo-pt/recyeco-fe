import Image from 'next/image';
import aboutBg from '@/assets/imgs/aboutBg.svg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VisiMisi = () => {
  return (
    <>
      <Image
        src={aboutBg}
        className="w-full object-cover"
        alt="About Background"
      />
      <div className="relative -top-20 container mx-auto flex flex-col justify-center items-center gap-4 p-6 text-center">
        <Card>
          <CardHeader>
            <CardTitle>Tentang Kami</CardTitle>
          </CardHeader>
          <CardContent>
            Selamat datang di Recyeco Mart! Kami adalah tim yang bersemangat
            dalam menjalankan misi kami untuk menjadi wahana utama dalam
            industri e-commerce untuk barang-barang daur ulang. Di sini, kami
            percaya bahwa setiap tindakan kecil memiliki dampak besar dalam
            menjaga lingkungan, dan itulah mengapa kami menyediakan platform
            yang inovatif untuk memfasilitasi perdagangan barang-barang daur
            ulang.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Visi</CardTitle>
          </CardHeader>
          <CardContent>
            Menjadi platform terdepan dalam mendukung gerakan daur ulang dan
            pengelolaan sampah dengan menyediakan layanan e-commerce yang
            inovatif dan ramah lingkungan. Kami bermimpi untuk menciptakan
            sebuah ekosistem di mana setiap individu dapat dengan mudah
            berpartisipasi dalam upaya menjaga keberlanjutan lingkungan melalui
            pembelian dan penjualan barang daur ulang.
          </CardContent>
        </Card>
        <div className="flex flex-1 flex-wrap md:flex-nowrap gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Misi 1</CardTitle>
            </CardHeader>
            <CardContent>
              Mendorong Kesadaran Lingkungan: Kami bertekad untuk meningkatkan
              kesadaran masyarakat tentang pentingnya daur ulang dan pengelolaan
              sampah melalui platform edukatif dan informatif.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Misi 2</CardTitle>
            </CardHeader>
            <CardContent>
              Menyediakan Akses Mudah: Kami memperjuangkan akses mudah bagi
              masyarakat untuk membeli dan menjual barang-barang daur ulang,
              mendorong gaya hidup berkelanjutan
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
