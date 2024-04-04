import Image from 'next/image';
import Link from 'next/link';
import Market from './sections/Market';
import joinRecyeco from '@/assets/imgs/joinRecyeco.svg';

const Main = () => {
  return (
    <div className="flex flex-col space-y-6 py-6">
      <div className="flex justify-center items-center rounded-md container">
        <Link href="" className="w-full">
          <Image
            src={joinRecyeco}
            alt="Join Recyeco"
            className="w-full object-fill"
          />
        </Link>
      </div>
      <Market />
    </div>
  );
};

export default Main;
