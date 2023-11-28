import Link from "next/link";

export function Navbar() {
    return (
        <nav>
            <Link href="#landing" scroll={true}>Landing</Link>
            <Link href="#works" scroll={true}>Works</Link>
            <Link href="#contact" scroll={true}>contact</Link>
        </nav>
    )
}