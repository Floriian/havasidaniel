"use client";

import { useAppStore } from "@features/app";
import clsx from "clsx";
import { useEffect, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function DarkModeProvider({ children }: Props) {
    const { dark, setDarkMode } = useAppStore();

    const lightModestyles = clsx('scroll-smooth', {
        'dark': dark,
    })
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, [setDarkMode])

    return (
        <main className={lightModestyles}>
            {children}
        </main>
    )
}