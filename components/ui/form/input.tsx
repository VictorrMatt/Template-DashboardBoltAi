import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Layout
          'flex w-[358px] h-[44px] py-3 pl-3 pr-2.5 items-center gap-[8px] text-neutral-0',
          // Style
          'rounded-lg border border-neutral-800 bg-neutral-700',
          // Focus and Hover Ring with Smooth Transition
          'transition-all duration-500 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-primary-light',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
