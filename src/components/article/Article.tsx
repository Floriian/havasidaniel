import { cn } from "@utils/cn";
import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

export interface ArticleProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    toggleDivider?: boolean;
}

export const Article = forwardRef<HTMLElement, ArticleProps>(
    ({ className, children, toggleDivider, ...props }, ref) => {

        const dividerClasses = clsx('h-px w-[100vw-5rem] border-gray-600 border mx-24 my-8', {
            'hidden': toggleDivider,
        })

        return (
            <>
                <article
                    ref={ref}
                    className={cn("sm:px-2 md:px-24", className)}
                    {...props}
                >{children}</article>
                <hr className={dividerClasses} />
            </>
        );
    }
)

Article.displayName = "Article";
