import React from "react";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const variants = {
  h1: "text-[56px] leading-[64px]",
  h2: "text-[48px] leading-[56px]",
  h3: "text-[40px] leading-[48px]",
  h4: "text-[32px] leading-[40px]",
  h5: "text-[24px] leading-[28px]",
  h6: "text-[20px] leading-[28px]",
  h7: "text-[18px] leading-[24px]",
  h8: "text-[16px] leading-[20px]",
  h9: "text-[14px] leading-[20px]",
  h10: "text-[12px] leading-[16px]",
} as const;

const titleVariants = cva("font-bold tracking-[1%] text-secondary-base", {
  variants: {
    variant: variants,
  },
  defaultVariants: {
    variant: "h1",
  },
});

const headingMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  h7: "h6",
  h8: "h6",
  h9: "h6",
  h10: "h6",
} as const;

type Variant = keyof typeof variants;

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  label: string;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ label, className, variant = "h1", ...props }, ref) => {
    const safeVariant = (variant || "h1") as Variant;
    const Tag = headingMap[safeVariant];

    return React.createElement(
      Tag,
      {
        ref,
        className: cn(titleVariants({ variant: safeVariant }), className),
        ...props,
      },
      label
    );
  }
);

Title.displayName = "Title";

export { Title, titleVariants };
