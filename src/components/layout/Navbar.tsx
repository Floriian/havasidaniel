"use client";
import { useAppStore } from "@features/app";
import clsx from "clsx";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from '@mui/icons-material/Menu';
import { ardela } from "@/utils";
import { useState } from "react";
import { NavLink } from "@components/layout";

export function Navbar() {
  const { activeArticle } = useAppStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const desktopStyles = clsx(
    "hidden lg:flex justify-between absolute p-4 w-full transition-colors duration-150 bg-transparent",
    {
      "bg-zinc-950": activeArticle !== "landing",
    },
  );

  const mobileStyles = clsx("lg:hidden absolute p-4 w-full", {
    "bg-zinc-950": activeArticle !== "landing" || isOpen,
    "h-screen": isOpen,
  });

  const isOpenIconClass = clsx("transition-transform duration-500", {
    "rotate-90": isOpen,
    "rotate-0": !isOpen,
  });

  return (
    <header className="sticky z-50 top-0">
      <nav>
        <div className={desktopStyles}>
          <h3 className={"uppercase text-[20px] " + ardela.className}>
            HED Photography
          </h3>
          <div className="flex gap-[10px] uppercase">
            <NavLink href="landing">Bemutatkozás</NavLink>
            <NavLink href="gallery">Galéria</NavLink>
            <NavLink href="contacts">Kapcsolat</NavLink>
          </div>
          <a
            href={"https://instagram.com/edvinhavasi_"}
            target="_blank"
            className="text-[14px] py-2.5 px-1.5 border-2 rounded-md hover:bg-white hover:text-purple-900 transition-colors duration-300 backdrop-blur-xl"
          >
            <InstagramIcon /> <span>@edvinhavasi_</span>
          </a>
        </div>
        <div className={mobileStyles}>
          <div className="flex w-full justify-end">
            <MenuIcon onClick={() => setIsOpen(!isOpen)} className={isOpenIconClass} />
          </div>
          {isOpen && (
            <div className="flex flex-col gap-4 items-center w-full h-full">
              <h3 className={"uppercase text-[20px]" + ardela.className}>
                HED Photography
              </h3>
              <hr className="h-px w-full border-gray-600 border" />
              <NavLink href="landing">Bemutatkozás</NavLink>
              <NavLink href="gallery">Galéria</NavLink>
              <NavLink href="contacts">Kapcsolat</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
