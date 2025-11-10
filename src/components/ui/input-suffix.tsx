'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const InputSuffix = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
      <label
        htmlFor={id}
        className={cn(
          'flex items-center gap-1 w-full h-14 rounded-xl border border-black bg-transparent placeholder-black px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          isFocused && 'outline outline-1',
          className
        )}
      >
        {suffix}
        <input
          type={type}
          className={cn(
            'w-full h-full outline-none text-base bg-transparent font-light rounded-md px-2',
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
InputSuffix.displayName = 'Input';

export { InputSuffix };
