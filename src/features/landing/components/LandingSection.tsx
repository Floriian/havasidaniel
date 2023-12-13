"use client";

import { useAppStore } from "@features/app";
import { LandingContainer } from "@features/landing";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function LandingSection() {
    const { ref, inView } = useInView();
    const { setIsLanding, setActiveArticle } = useAppStore();

    useEffect(() => {
        setIsLanding(inView);
    }, [inView])

    useEffect(() => {
        if(inView) setActiveArticle("landing");
    }, [inView]);

    useEffect(() => {
        console.log({ inView })
    }, [inView]);

    return (
        <article id="landing" ref={ref}>
            <LandingContainer />
        </article>
    )
}