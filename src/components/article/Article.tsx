import { cn } from "@utils/cn";
import { forwardRef, HTMLAttributes } from "react";

export interface ArticleProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export const Article = forwardRef<HTMLElement, ArticleProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <>
                <hr className="h-px w-[100vw-5rem] border-gray-600 border mx-24 my-8" />
                <article
                    ref={ref}
                    className={cn("sm:px-2 md:px-24", className)}
                    {...props}
                >{children}</article>
            </>
        );
    }
)

Article.displayName = "Article";
