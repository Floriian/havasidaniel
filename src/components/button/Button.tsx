import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";

const variants = cva("border-2 rounded-md", {
    variants: {
        variant: {},
        size: {},
        active: {
            true: "bg-red-500",
            false: "bg-green-500"
        }
    },

})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> { }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, active, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(variants({ variant, active, className }))}
                {...props}
            />
        );
    }
)

Button.displayName = "Button";
