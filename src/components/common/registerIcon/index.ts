import plastikIcon from '@/assets/icons/plastik.svg';
import kacaIcon from '@/assets/icons/kaca.svg';
import logamIcon from '@/assets/icons/logam.svg';
import kertasIcon from '@/assets/icons/kertas.svg';
import organikIcon from '@/assets/icons/organik.svg';
import elektronikIcon from '@/assets/icons/elektronik.svg';
import bateraiIcon from '@/assets/icons/baterai.svg';
import tekstilIcon from '@/assets/icons/tekstil.svg';
import whatsappIcon from '@/assets/icons/whatsapp.svg';
import twitterIcon from '@/assets/icons/twitter.svg';
import instagramIcon from '@/assets/icons/instagram.svg';

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
    Tekstil: tekstilIcon,
    Whatsapp: whatsappIcon,
    Twitter: twitterIcon,
    Instagram: instagramIcon
  };
};

const registerIcon: IconData = loadIconData();

export default registerIcon;
