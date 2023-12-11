"use client";

import { Button } from "@components/button";
import { Image } from "@components/image";
import { Spinner } from "@components/spinner";
import { actions, useGalleryStore } from "@features/gallery";
import { useState, useEffect } from "react";

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
        <div className="flex flex-col gap-4">
            <div className="w-full flex justify-center gap-4">
                <Button onClick={() => setGallery("mixed")} primary={gallery === "mixed"} key="mixed">Összes kép</Button>
                <Button onClick={() => setGallery("wedding")} primary={gallery === "wedding"} key="wedding">Esküvői képek</Button>
                <Button onClick={() => setGallery("party")} primary={gallery === "party"} key="party">Party képek</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2" id="gallery">
                {isLoading && new Array(16).fill(null).map((_, i) => (<Spinner key={i} />))}
                {!isLoading && imgs?.slice(0, 16).map((img, i) => (
                    <Image src={img} alt={img} key={i} sizes="(max-width: 1024px) 100vw, 700px" />
                ))}
            </div>
        </div>
    )
}