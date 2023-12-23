import { Button } from "@components/button";
import { ArrowDownward } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export function LandingContent() {
    return (
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
                <div className="flex flex-col items-center justify-center w-9/12">
                    <Image src="/logo.webp" alt="Havasi Dániel Edvin" priority={true} height={1024} width={1024} />
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
    )
}