import { cn } from "@utils/cn";
import { forwardRef, HTMLAttributes } from "react";

export interface ArticleProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export const Article = forwardRef<HTMLElement, ArticleProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <article
                ref={ref}
                className={cn("sm:px-2 md:px-24", className)}
                {...props}
            >{children}</article>
        );
    }
)

Article.displayName = "Article";
