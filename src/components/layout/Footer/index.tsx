import { FC } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';
import { MainMenu } from '@/constants/menu';
import { SocialMedia } from '@/constants/socialMedia';
import { FooterImg } from '@/constants/footer';

const Footer: FC = () => {
  return (
    <div className="bg-[#E7E7E7]">
      <div className="container mx-auto">
        <div className=" flex flex-wrap justify-between text-black md:py-14  py-6  md:text-[15px] text-[14px] md:flex-row flex-col gap-6 md:gap-4 ">
          <div className="flex flex-col md:gap-2 gap-2 items-left">
            {MainMenu.map(item => (
              <div key={item.id} className="">
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:gap-4 gap-2 items-left md:items-center">
            <p className="font-semibold">Supported By:</p>
            <div className="flex">
              {FooterImg.map(item => (
                <div
                  key={item.id}
                  className="flex items-center md:justify-center justify-start"
                >
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
          <div className="flex md:flex-row flex-col-reverse justify-between md:py-3 py-4 gap-4">
            <div className="flex items-center text-left gap-2">
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
