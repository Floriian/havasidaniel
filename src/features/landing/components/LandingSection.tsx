"use client";

import { Article } from "@components/article";
import { Button } from "@components/button";
import { useAppStore } from "@features/app";
import { LandingContent } from "@features/landing";
import { ArrowDownward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function LandingSection() {
    const { ref, inView } = useInView();
    const { setIsLanding, setActiveArticle, activeArticle } = useAppStore();

    useEffect(() => {
        if (inView) setActiveArticle("landing")
    }, [inView]);

    return (
        <Article id="landing" ref={ref}>
            <LandingContent />
        </Article>
    )
}