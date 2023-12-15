"use client";
import { useAppStore } from "@features/app";
import clsx from "clsx";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import {ardela} from "@/utils";



export function Navbar() {
    const { isInLanding, activeArticle } = useAppStore();

    const backgroundColor = clsx("flex justify-between absolute p-4 w-full transition-colors duration-150 bg-transparent", {
        "bg-zinc-950": !isInLanding,
    })

    const activeLink = clsx("text-[14px] py-2.5 px-1.5 border-2 rounded-md bg hover:bg-white hover:text-purple-900 transition-colors duration-300 backdrop-blur-xl")

    return (
        <header className="sticky z-50 top-0 ">
            <nav className={backgroundColor}>
                <div><h3 className={"uppercase text-[20px] " + ardela.className}>HED Photography</h3></div>
                <div className="flex gap-[10px] uppercase">
                    <Link href="#landing" scroll={true} className={activeLink}>Bemutatkozás</Link>
                    <Link href="#gallery" scroll={true} className={activeLink}>Galéria</Link>
                    <Link href="#contact" scroll={true} className={activeLink}>Kapcsolat</Link>
                </div>
                <a href={"https://instagram.com"} target="_blank" className={activeLink}><InstagramIcon/> <span>@havasidaniel</span></a>
            </nav>
        </header>
    )
}
