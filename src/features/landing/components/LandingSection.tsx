"use client";

import { Button } from "@components/button";
import { useAppStore } from "@features/app";
import { ArrowDownward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function LandingSection() {
    const { ref, inView } = useInView();
    const { setIsLanding, setActiveArticle } = useAppStore();

    useEffect(() => {
        setIsLanding(inView);
    }, [inView])

    useEffect(() => {
        if (inView) setActiveArticle("landing");
    }, [inView]);

    useEffect(() => {
        console.log({ inView })
    }, [inView]);

    return (
        <article id="landing" ref={ref} className="sm:px-2 md:px-24">
            <div className="relative h-screen w-[100vw-1rem]">
                <Image
                    src="/header.png"
                    alt="Havasi Dániel Edvin"
                    priority={true}
                    height={1293}
                    width={1920}
                    className="absolute w-9/12 -translate-x-1/2 left-1/2"
                />
                <div className='relative h-auto w-full flex flex-col items-center'>
                    <div className="flex flex-col items-center justify-center w-full">
                        <Image src="/logo.webp" alt="Havasi Dániel Edvin" priority={true} height={1024} width={1024} />
                        <div className="flex gap-4">
                            <Button>Lorem</Button>
                            <Button>Ipsum</Button>
                        </div>
                        <div className="mt-11">
                            <Link href="#gallery" scroll={true}>
                                <ArrowDownward />
                            </Link>
                        </div>
                        <p className="max-w-3/4 w-3/4 mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eos aut maxime veniam harum dicta explicabo consequuntur pariatur reiciendis hic id voluptatem sapiente ab, blanditiis deserunt facilis itaque. Pariatur, excepturi!
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}