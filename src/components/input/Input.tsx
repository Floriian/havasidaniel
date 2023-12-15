import { cn } from "@utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";

const variants = cva(
    "bg-transparent block autofill:bg-transparent rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm border-2 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer",
    {
        variants: {
            variant: {},
            error: {
                true: "border-orange-500",
                false: "border-gray-700",
            },
        },
    },
);

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {
    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
        ({ className, error, variant, name, label, ...props }, ref) => {
        return (
            <div className="relative">
                <input
                    ref={ref}
                    className={cn(variants({ className, variant, error }))}
                    name={name}
                    {...props}
                    placeholder=" "
                />
                <label
                    htmlFor={name}
                    className="border-none
                        absolute 
                        text-sm text-white
                        duration-300 
                        transform -translate-y-4 
                        scale-75 
                        top-2 z-10 
                        origin-[0] 
                        px-2
                        peer-focus:px-2 
                        peer-focus:text-purple-600 
                        peer-placeholder-shown:scale-100 
                        peer-placeholder-shown:-translate-y-1/2 
                        peer-placeholder-shown:top-1/2 
                        peer-focus:top-2 
                        peer-focus:scale-75 
                        peer-focus:-translate-y-4
                        peer-focus:bg-zinc-950
                        peer-focus:rounded-xl
                        peer-focus:px-3
                        peer-focus:text-md
                        rtl:peer-focus:translate-x-1/4 
                        rtl:peer-focus:left-auto start-1"
                >
                    {label}
                </label>
            </div>
        );
    },
);

Input.displayName = "Input";
