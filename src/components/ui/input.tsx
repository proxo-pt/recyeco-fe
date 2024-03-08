'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
      <label
        htmlFor={id}
        className={cn(
          'flex items-center gap-4 w-full h-14 rounded-xl border border-black bg-transparent placeholder-black px-6 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          isFocused && 'outline outline-1'
        )}
      >
        {suffix}
        <input
          type={type}
          className={cn(
            'w-full h-full outline-none placeholder:text-black bg-transparent text-base font-light rounded-md px-2',
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          id={id}
          {...props}
        />
      </label>
    );
  }
);
Input.displayName = 'Input';

export { Input };
