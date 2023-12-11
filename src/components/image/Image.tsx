import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";
import NextImage from "next/image";

const variants = cva("rounded-md relative h-64 w-64", {
    variants: {
        variant: {},
    },

})

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof variants> {
    src: string;
    alt: string;
    sizes?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ className, variant, src, alt, sizes, ...props }, ref) => {
        return (
            <div className={cn(variants({ className }))}>
                <NextImage ref={ref} src={src} priority alt={alt} sizes={sizes} fill />
            </div>
        );
    }
)

Image.displayName = "Image";
