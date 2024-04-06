import { Team2, Team3 } from '@/constants/aboutteam';
import { getAssetUrl } from '@/lib/utils';
import Image from 'next/image';
import { FC } from 'react';

const AboutTeam: FC = () => {
  return (
    <div className="mb-20 container">
      <div className="flex flex-col flex-wrap items-center ">
        <h1 className="lg:text-3xl text-2xl">
          <span className="font-bold">Team</span>{' '}
          <span className="font-semibold">Recyeco</span>
          <span className="font-semibold text-[#61C580]">Mart</span>
        </h1>
        <p className="text-center mx-2">
          Meet the passionate members of RecyescoMart at Proxo 2024.🛒
        </p>
      </div>
      <div className="flex flex-col gap-10 mt-20">
        <div className="flex gap-4 justify-between lg:mx-36 flex-col lg:flex-row">
          {Team3.map(item => (
            <div
              key={item.id}
              className="flex lg:flex-col items-center lg:gap-2 lg:justify-center justify-between"
            >
              <Image
                src={`${getAssetUrl(`/img-team3/${item.src}`)}`}
                width={150}
                height={150}
                alt="our photos"
              />
              <div className="flex flex-col items-start lg:items-center">
                <h1 className="font-bold">{item.title}</h1>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-between lg:mx-96 flex-col lg:flex-row">
          {Team2.map(item => (
            <div
              key={item.id}
              className="flex items-center lg:justify-center justify-between"
            >
              <div className="flex lg:flex-col items-center lg:gap-2 gap-4">
                <Image
                  src={`${getAssetUrl(`/img-team2/${item.src}`)}`}
                  width={150}
                  height={150}
                  alt="our photos"
                />
                <div className="flex flex-col items-start lg:items-center">
                  <h1 className="font-bold">{item.title}</h1>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
