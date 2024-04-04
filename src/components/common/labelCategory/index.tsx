import { FC } from 'react';
import { CategoryItems } from '@/constants/menu';
import { cn } from '@/lib/utils';

const LabelCategory: FC<{ category?: string }> = ({ category }) => {
  const { backgroundColor, borderColor, textColor, label } =
    CategoryItems[category ?? ''] || CategoryItems.Plastik;
  return (
    <div
      className={cn(
        `px-3 py-0.5 text-[10px] max-w-20 ${backgroundColor} ${textColor} rounded-lg text-center ${borderColor ? `border ${borderColor}` : ''}`
      )}
    >
      {label}
    </div>
  );
};

export default LabelCategory;
