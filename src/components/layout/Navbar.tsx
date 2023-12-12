"use client";
import { useAppStore } from "@features/app";
import clsx from "clsx";
import Link from "next/link";

export function Navbar() {
    const { isInLanding } = useAppStore();

    const backgroundColor = clsx("flex justify-between absolute p-4 w-full transition-colors duration-150", {
        "bg-zinc-950": !isInLanding,
        "bg-transparent": isInLanding
    })

    return (
        <header className="sticky z-50 top-0 ">
            <nav className={backgroundColor}>
                <div><h3 className="uppercase text-xl">Havasi Dániel Edvin</h3></div>
                <div className="flex gap-4 uppercase">
                    <Link href="#gallery" scroll={true} className="text-xl px-1.5 border-2 rounded-md hover:bg-white hover:text-purple-900 transition-colors duration-300">Galéria</Link>
                    <Link href="#contact" scroll={true} className="text-xl px-1.5 border-2 rounded-md hover:bg-white hover:text-purple-900 transition-colors duration-300">Kapcsolat</Link>
                </div>
            </nav>
        </header>
    )
}