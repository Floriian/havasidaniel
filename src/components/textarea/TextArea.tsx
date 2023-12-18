import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils";
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className="relative">
                <textarea
                    ref={ref}
                    className={cn("bg-transparent block autofill:bg-transparent rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm border-2 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer", className)}
                    {...props} />
            </div>
        )
    }
)

TextArea.displayName = "TextArea";