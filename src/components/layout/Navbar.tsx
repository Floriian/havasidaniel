"use client";
import { useAppStore } from "@features/app";
import clsx from "clsx";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ardela } from "@/utils";

export function Navbar() {
  const { isInLanding, activeArticle, setActiveArticle } = useAppStore();

  const backgroundColor = clsx(
    "hidden md:flex justify-between absolute p-4 w-full transition-colors duration-150 bg-transparent",
    {
      "bg-zinc-950": activeArticle !== "landing",
    },
  );

  // const activeLink = "text-[14px] py-2.5 px-1.5 border-2 rounded-md hover:bg-white hover:text-purple-900 transition-colors duration-300 backdrop-blur-xl";

  const isActiveLink = (href: string) => clsx("text-[14px] py-2.5 px-1.5 border-2 rounded-md transition-colors duration-300 backdrop-blur-xl", {
    "bg-white text-purple-900": activeArticle === href,
    "bg-transparent text-white": activeArticle !== href,
  })

  return (
    <header className="sticky z-50 top-0">
      <nav className={backgroundColor}>
        <div>
          <h3 className={"uppercase text-[20px] " + ardela.className}>
            HED Photography
          </h3>
        </div>
        <div className="flex gap-[10px] uppercase">
          <Link href="#landing" scroll={true} className={isActiveLink("landing")} onClick={() => setActiveArticle("landing")}>
            Bemutatkozás
          </Link>
          <Link href="#gallery" scroll={true} className={isActiveLink("gallery")} onClick={() => setActiveArticle("gallery")}>
            Galéria
          </Link>
          <Link href="#contact" scroll={true} className={isActiveLink("contacts")} onClick={() => setActiveArticle("contacts")}>
            Kapcsolat
          </Link>
        </div>
        <a
          href={"https://instagram.com/edvinhavasi_"}
          target="_blank"
          className="text-[14px] py-2.5 px-1.5 border-2 rounded-md hover:bg-white hover:text-purple-900 transition-colors duration-300 backdrop-blur-xl"
        >
          <InstagramIcon /> <span>@edvinhavasi_</span>
        </a>
      </nav >
    </header >
  );
}
