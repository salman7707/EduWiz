import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        blue: "text-white bg-blue hover:bg-darkblue",
        white: "text-black bg-white hover:bg-darkwhite",
        lightblue: "text-white bg-electricblue  hover:bg-lightelectricblue",
        lightblueattendance:
          "text-white bg-[#4099FF]  hover:bg-lightelectricblue",
        orangegradient:
          "bg-gradient-to-l to-darkpink from-orange cursor-pointer",
        medblue: "bg-cardsecond cursor-pointer",
        yellow: "bg-YellowBtn text-black cursor-pointer",
        dark: "bg-studentdataBtn hover:bg-darkblue text-white cursor-pointer",
        light:
          "bg-gray-200 border-slate border hover:bg-darkblue text-lightblack hover:text-white cursor-pointer",
        transparent: "bg-transparent text-neutralgray",
        green: "bg-btngreen hover:btngreen text-white",
        lighteshblue:
          "bg-gradient-to-l to-[#11C6EF] from-[#1176EF] hover:btngreen text-white",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        formbtn: "h-11 px-6 rounded-3xl",
        lg: "h-11 rounded-md px-12",
        icon: "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
