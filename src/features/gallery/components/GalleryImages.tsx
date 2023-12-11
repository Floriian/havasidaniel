"use client";

import { Image } from "@components/image";
import { Spinner } from "@components/spinner";
import { actions, useGalleryStore } from "@features/gallery";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState, useEffect, ReactComponentElement } from "react";


const WeddingImages = dynamic(() => import("./WeddingImages"));
const PartyImages = dynamic(() => import("./PartyImages"));
const MixedImages = dynamic(() => import("./MixedImages"));

export function GalleryImages() {
    const [gallery, setGallery] = useState<"mixed" | "wedding" | "party">("mixed");
    const [imgs, setImgs] = useState<string[]>();
    const { isLoading, setIsLoading } = useGalleryStore();

    const fetchImages = async () => {
        setIsLoading(true);
        const images = await actions.getGalleryImages(gallery);
        setImgs(images);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchImages();
    }, [gallery]);

    return (
        <>
            <button onClick={() => setGallery("mixed")}>Mixed Images</button>
            <button onClick={() => setGallery("wedding")}>Wedding Images</button>
            <button onClick={() => setGallery("party")}>Party Images</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2" id="gallery">
                {isLoading && new Array(16).fill(null).map((_, i) => (<Spinner key={i} />))}
                {!isLoading && imgs?.map((img, i) => (
                    <Image src={img} alt={img} key={i} sizes="(max-width: 1024px) 100vw, 700px" />
                ))}
            </div>
        </>
    )
}