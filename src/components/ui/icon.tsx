import Image, { ImageProps } from 'next/image';
import registerIcon from '@/components/common/registerIcon';

export interface IconProps extends Omit<ImageProps, 'src' | 'alt'> {
  type: any | string;
}

const Icon = ({ type, ...props }: IconProps) => {
  const iconType = registerIcon?.[type];

  return <Image src={iconType} alt={type} width={40} height={40} {...props} />;
};

export default Icon;
