import { FC } from 'react';
import Image from 'next/image';
import { FooterImg } from '@/constants/footer';
import { MainMenu } from '@/constants/menu';
import { SocialMedia } from '@/constants/socialMedia';
import { getAssetUrl } from '@/lib/utils';

const Footer: FC = () => {
  return (
    <div className="bg-[#E7E7E7]">
      <div className="container mx-auto">
        <div className=" flex flex-wrap justify-between text-black py-14 text-xs md:text-[15px] md:flex-row flex-col-reverse gap-6 md:gap-4 ">
          <div className="flex flex-col gap-2 items-left">
            {MainMenu.map(item => (
              <div key={item.id} className="">
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p>Support By:</p>
            <div className="flex">
              {FooterImg.map(item => (
                <div key={item.id} className="flex items-center justify-center">
                  <Image
                    src={getAssetUrl(`/img-footer/${item.src}`)}
                    alt={`${item.alt}`}
                    height={50}
                    width={50}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#91F165]">
        <div className="container mx-auto">
          <div className="flex justify-between py-3">
            <div className="flex gap-2 items-center text-left">
              <span>Copyright &copy; 2024</span>
              <span className="font-bold">Recyeco Mart</span>
            </div>
            <div className="flex gap-2">
              <p>Ikuti kami: </p>
              {SocialMedia.map(item => (
                <div key={item.id}>
                  <item.src />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
