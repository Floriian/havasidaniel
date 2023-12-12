import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";

const variants = cva("border-2 rounded-xl px-4 py-2 transition-colors duration-300", {
    variants: {
        variant: {},
        size: {},
        primary: {
            true: "bg-white text-purple-900",
            false: "bg-transparent"
        }
    },

})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> { }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, primary, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(variants({ variant, primary, className }))}
                {...props}
            />
        );
    }
)

Button.displayName = "Button";
