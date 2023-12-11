"use client";

import { Image } from "@components/image";
import { actions } from "@features/gallery";
import { useEffect, useState } from "react";

export default function MixedImages() {
    const [imgs, setImgs] = useState<string[]>();

    useEffect(() => {
        const fetchImages = async () => {
            const imgs = await actions.getGalleryImages("wedding");
            setImgs(imgs);
        };
        fetchImages()
    }, [])

    return (
        <>
            {imgs?.map((img, i) => (
                <Image src={img} alt={img} key={i} sizes="(max-width: 1024px) 100vw, 700px" />
            ))}
        </>
    )
}