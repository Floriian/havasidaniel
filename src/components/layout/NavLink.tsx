"use client";
import { useAppStore } from "@features/app";
import clsx from "clsx";
import Link from "next/link";

interface Props {
    href: "landing" | "gallery" | "contacts";
    children: React.ReactNode;
}

export const NavLink = ({ href, children }: Props) => {
    const { activeArticle, setActiveArticle } = useAppStore();
    const isActiveLink = clsx("text-[14px] py-2.5 px-1.5 border-2 rounded-md transition-colors duration-300 backdrop-blur-xl", {
        "bg-white text-purple-900": activeArticle === href,
        "bg-transparent text-white": activeArticle !== href,
    });

    return (
        <Link href={"#" + href} scroll={true} className={isActiveLink} onClick={() => setActiveArticle(href)}>
            {children}
        </Link>
    );
};