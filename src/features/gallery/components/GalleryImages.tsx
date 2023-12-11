"use client";


import { Image } from "@components/image";
import { actions } from "@features/gallery";
import dynamic from "next/dynamic";
import { useMemo, useState, useEffect } from "react";


const WeddingImages = dynamic(() => import("./WeddingImages"));
const PartyImages = dynamic(() => import("./PartyImages"));
const MixedImages = dynamic(() => import("./MixedImages"));

export function GalleryImages() {
    const [gallery, setGallery] = useState<"mixed" | "wedding" | "party">("mixed");
    const [images, setImages] = useState<string[]>();
    return (
        <>
            <button onClick={() => setGallery("mixed")}>Mixed Images</button>
            <button onClick={() => setGallery("wedding")}>Wedding Images</button>
            <button onClick={() => setGallery("party")}>Party Images</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {gallery === "wedding" && <WeddingImages />}
                {gallery === "party" && <PartyImages />}
                {gallery === "mixed" && <MixedImages />}
            </div>
        </>
    )
}