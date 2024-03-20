import plastikIcon from '@/assets/icons/plastik.svg';
import kacaIcon from '@/assets/icons/kaca.svg';
import logamIcon from '@/assets/icons/logam.svg';
import kertasIcon from '@/assets/icons/kertas.svg';
import organikIcon from '@/assets/icons/organik.svg';
import elektronikIcon from '@/assets/icons/elektronik.svg';
import bateraiIcon from '@/assets/icons/baterai.svg';
import tekstilIcon from '@/assets/icons/tekstil.svg';

export type IconName = string;

export type IconData = {
  [name in IconName]: string;
};

const loadIconData = (): IconData => {
  return {
    Plastik: plastikIcon,
    Kaca: kacaIcon,
    Logam: logamIcon,
    Kertas: kertasIcon,
    Organik: organikIcon,
    Elektronik: elektronikIcon,
    Baterai: bateraiIcon,
    Tekstil: tekstilIcon
  };
};

const registerIcon: IconData = loadIconData();

export default registerIcon;
