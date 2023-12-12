"use client";

import { Button } from "@components/button";
import { Image } from "@components/image";
import { Spinner } from "@components/spinner";
import { actions, useGalleryStore } from "@features/gallery";
import { useState, useEffect } from "react";
import CallReceivedIcon from '@mui/icons-material/CallReceived';
export function GalleryImages() {
    const [gallery, setGallery] = useState<"mixed" | "wedding" | "party">("wedding");
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
        <div className="flex flex-col gap-4 mt-4 mb-4">
            <div className="flex justify-center gap-4">
                <Button onClick={() => setGallery("wedding")} primary={gallery === "wedding"} key="wedding" className="flex w-auto align-items-center">
                    Esküvői képek
                    {gallery === "wedding" && <CallReceivedIcon />}
                </Button>
                <Button onClick={() => setGallery("party")} primary={gallery === "party"} key="party" className="flex w-auto align-items-center">
                    Party képek
                    {gallery === "party" && <CallReceivedIcon />}
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2" id="gallery">
                {isLoading && new Array(16).fill(null).map((_, i) => (<Spinner key={i} />))}
                {!isLoading && imgs?.slice(0, 4).map((img, i) => (
                    <Image src={img} alt={img} key={i} sizes="(max-width: 1024px) 100vw, 700px" />
                ))}
            </div>
        </div>
    )
}