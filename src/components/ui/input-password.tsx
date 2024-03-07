'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
  colorIcon?: string;
}

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, colorIcon, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [typePass, setTypePass] = React.useState(type);
    return (
      <div
        className={cn(
          'flex items-center gap-2 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          isFocused && 'border border-blue-400'
        )}
      >
        {suffix}
        <input
          type={typePass}
          className={cn('w-full outline-none', className)}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {typePass === 'password' ? (
          <Eye className={colorIcon} onClick={() => setTypePass('text')} />
        ) : (
          <EyeOff
            className={colorIcon}
            onClick={() => setTypePass('password')}
          />
        )}
      </div>
    );
  }
);
InputPassword.displayName = 'InputPassword';

export { InputPassword };
