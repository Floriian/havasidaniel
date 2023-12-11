"use client";

import { Image } from "@components/image";
import { actions, useGalleryStore } from "@features/gallery";
import { useEffect, useState } from "react";

export default function MixedImages() {
    const [imgs, setImgs] = useState<string[]>();
    const { setIsLoading } = useGalleryStore();

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            const imgs = await actions.getGalleryImages("mixed");
            setImgs(imgs);
            setIsLoading(false);
        };
        fetchImages()
    }, [setIsLoading])

    return (
        <>
            {imgs?.slice(0, 16).map((img, i) => (
                <Image src={img} alt={img} key={i} sizes="(max-width: 1024px) 100vw, 700px" />
            ))}
        </>
    )
}