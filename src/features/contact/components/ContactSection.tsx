"use client";
import { Article } from "@components/article";
import { useAppStore } from "@features/app";
import { ContactContent, ContactForm } from "@features/contact";
import Image from "next/image";
import React, { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";

export function ContactSection() {

    const { inView, ref } = useInView();
    const { setActiveArticle, activeArticle } = useAppStore();

    useEffect(() => {
        if (inView) setActiveArticle("contacts")
    }, [inView]);

    useEffect(() => console.log(activeArticle), [activeArticle]);

    return (
        <Article toggleDivider id="contact" ref={ref}>
            <ContactContent />
        </Article>
    )
}