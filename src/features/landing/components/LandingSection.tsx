"use client";

import { useAppStore } from "@features/app";
import { LandingContainer } from "@features/landing";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function LandingSection() {
    const { ref, inView } = useInView();
    const { setIsLanding } = useAppStore();
    useEffect(() => {
        setIsLanding(inView);
    }, [inView])

    return (
        <article id="landing" ref={ref}>
            <LandingContainer />
        </article>
    )
}