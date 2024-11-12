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
          //Layout
          'flex w-[358px] py-3 pl-3 pr-2.5 items-center gap-[8px]',
          //Style
          'rounded-lg border border-neutral-800 bg-[#1B1F27]',
          //Focus
          'focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-0',
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
