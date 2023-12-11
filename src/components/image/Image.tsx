import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";
import NextImage from "next/image";
import clsx from "clsx";

const variants = cva("relative h-64 w-100 rounded-md grayscale-1 hover:cursor-pointer", {
    variants: {
        variant: {},
    },

})

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof variants> {
    src: string;
    alt: string;
    sizes?: string;
    enableGrayScale?: boolean;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ className, variant, src, alt, enableGrayScale = true, sizes, ...props }, ref) => {
        const grayScale = clsx("rounded-md hover:scale-[1.02] transition-all duration-300", {
            "grayscale hover:grayscale-0 duration-300": enableGrayScale,
        })
        return (
            <div className={cn(variants({ className, variant }))}>
                <NextImage ref={ref} src={src} priority alt={alt} sizes={sizes} fill className={grayScale} />
            </div>
        );
    }
)

Image.displayName = "HEDImage";
