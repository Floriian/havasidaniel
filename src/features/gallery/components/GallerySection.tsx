"use client";
import { Article } from "@components/article";
import { useAppStore } from "@features/app";
import { GalleryImages } from "@features/gallery";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function GallerySection() {
    const { inView, ref } = useInView();
    const { setActiveArticle } = useAppStore();

    useEffect(() => {
        if (inView) setActiveArticle("gallery")
        console.log("GALLERY IN VIEW");
    }, [inView])

    return (
        <Article id="gallery" ref={ref}>
            <GalleryImages />
        </Article>
    )
}