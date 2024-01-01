"use client";

import { Button } from "@components/button";
import { Image } from "@components/image";
import { Spinner } from "@components/spinner";
import { actions, useGalleryStore } from "@features/gallery";
import { useState, useEffect } from "react";
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

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

    useEffect(() => {
        if (imgs && imgs.length > 0) {
            let lightBox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({ gallery: "#gallery", children: "a", pswpModule: () => import("photoswipe"), zoom: false })
            lightBox.init()

            return () => {
                lightBox?.destroy();
                lightBox = null;
            }
        }
    }, [imgs])

    return (
        <div className="flex flex-col gap-4 mt-4 mb-4 justify-center">
            <div className="flex justify-center gap-4 ">
                <Button onClick={() => setGallery("wedding")} primary={gallery === "wedding"} key="wedding" className="flex w-auto align-items-center">
                    Esküvői képek
                    {gallery === "wedding" && <CallReceivedIcon />}
                </Button>
                <Button onClick={() => setGallery("party")} primary={gallery === "party"} key="party" className="flex w-auto align-items-center">
                    Party képek
                    {gallery === "party" && <CallReceivedIcon />}
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pswp-gallery" id="gallery">
                {isLoading && new Array(4).fill(null).map((_, i) => (<Spinner key={i} />))}
                {!isLoading && imgs?.map((img, i) => (
                    <a href={img} target="_blank" data-pswp-width="1200px" data-pswp-height="800px" key={i} rel="noreferrer">
                        <Image src={img} alt={img} sizes="(max-width: 1024px) 400px, 600px" />
                    </a>
                ))}
            </div>
        </div>
    )
}
