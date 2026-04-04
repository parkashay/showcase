import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-body font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[#1C1917] dark:bg-[#FAFAF7] text-[#FAFAF7] dark:text-[#1C1917] shadow-warm hover:shadow-warm-md hover:scale-[1.01]",

        destructive:
          "bg-red-600 text-white shadow-warm hover:bg-red-700 hover:shadow-warm-md",

        secondary:
          "bg-[#F5F5F0] dark:bg-[#292524] text-[#1C1917] dark:text-[#FAFAF7] border border-[#E7E5E4] dark:border-[#44403C] hover:border-[#D6D3D1] dark:hover:border-[#57534E]",

        outline:
          "border border-[#E7E5E4] dark:border-[#44403C] text-[#1C1917] dark:text-[#FAFAF7] bg-transparent hover:bg-[#F5F5F0] dark:hover:bg-[#292524]",

        ghost:
          "bg-transparent text-[#1C1917] dark:text-[#FAFAF7] hover:bg-[#F5F5F0] dark:hover:bg-[#292524]",

        link: "text-[#B45309] dark:text-[#F59E0B] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-lg gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-11 rounded-xl px-7 has-[>svg]:px-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
