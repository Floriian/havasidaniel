"use client";

import { Image } from "@components/image";
import { actions, useGalleryStore } from "@features/gallery";
import { useEffect, useState } from "react";

export default function PartyImages() {
    const [imgs, setImgs] = useState<string[]>();
    const { setIsLoading } = useGalleryStore();

    useEffect(() => {
        const fetchImages = async () => {
            const imgs = await actions.getGalleryImages("party");
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