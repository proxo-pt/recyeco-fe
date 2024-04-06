'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  classInput?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, classInput, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
      <div
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          isFocused && 'outline outline-1',
          className
        )}
      >
        <input
          type={type}
          className={cn(
            'w-full bg-background outline-none file:bg-transparent file:border-0 file:text-sm file:font-medium',
            classInput
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
