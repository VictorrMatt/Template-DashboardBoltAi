import React from "react";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const variants = {
  medium: "text-[16px] leading-[24px] tracking-[6%]",
  small: "text-[14px] leading-[20px] tracking-[6%]",
  xsmall: "text-[12px] leading-[16px] tracking-[4%]",
  twoxsmall: "text-[11px] leading-[14px] tracking-[2%]",
} as const;

const subheadingVariants = cva("font-medium text-secondary-base", {
  variants: {
    variant: variants,
  },
  defaultVariants: {
    variant: "medium",
  },
});

type Variant = keyof typeof variants;

export interface SubheadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof subheadingVariants> {
  label?: string;
}

const Subheading = React.forwardRef<HTMLHeadingElement, SubheadingProps>(
  ({ label, className, variant = "medium", ...props }, ref) => {
    const safeVariant = (variant || "medium") as Variant;

    return (
      <h3
        ref={ref}
        className={cn(subheadingVariants({ variant: safeVariant }), className)}
        {...props}
      >
        {label}
      </h3>
    );
  }
);

Subheading.displayName = "Subheading";

export { Subheading, subheadingVariants };
