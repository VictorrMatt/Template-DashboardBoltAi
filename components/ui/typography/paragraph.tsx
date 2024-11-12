import React from "react";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const variants = {
  xlarge: "text-[24px] leading-[32px]",
  large: "text-[18px] leading-[24px]",
  medium: "text-[16px] leading-[24px]",
  small: "text-[14px] leading-[16px]",
  xsmall: "text-[12px] leading-[16px]",
} as const;

const paragraphVariants = cva(
  "font-regular tracking-[-1%] text-secondary-base",
  {
    variants: {
      variant: variants,
    },
    defaultVariants: {
      variant: "medium",
    },
  }
);

type Variant = keyof typeof variants;

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  label?: string;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ label, className, variant = "medium", ...props }, ref) => {
    const safeVariant = (variant || "medium") as Variant;

    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ variant: safeVariant }), className)}
        {...props}
      >
        {label}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
