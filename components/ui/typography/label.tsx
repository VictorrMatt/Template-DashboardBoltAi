import React from "react";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const variants = {
  xlarge: "text-[24px] leading-[32px]",
  large: "text-[18px] leading-[24px]",
  medium: "text-[16px] leading-[20px]",
  small: "text-[14px] leading-[16px]",
  xsmall: "text-[12px] leading-[14px]",
  underline1: "text-[14px] leading-[20px]",
  underline2: "text-[12px] leading-[20px]",
} as const;

const labelVariants = cva("font-medium tracking-[-1%] text-secondary-base", {
  variants: {
    variant: variants,
  },
  defaultVariants: {
    variant: "medium",
  },
});

type Variant = keyof typeof variants;

export interface LabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {
  label: string;
}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  ({ label, className, variant = "medium", ...props }, ref) => {
    const safeVariant = (variant || "medium") as Variant;

    return (
      <span
        ref={ref}
        className={cn(labelVariants({ variant: safeVariant }), className)}
        {...props}
      >
        {label}
      </span>
    );
  }
);

Label.displayName = "Label";

export { Label, labelVariants };
