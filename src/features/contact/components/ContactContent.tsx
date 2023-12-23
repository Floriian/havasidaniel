import { Article } from "@components/article";
import { ContactForm } from "@features/contact";
import Image from "next/image";

export function ContactContent() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
            <div className="flex flex-col sm:flex-row">
                <div className="relative">
                    <Image src="https://fastly.picsum.photos/id/817/200/300.jpg?hmac=Egrlh6ZzXMOSu9esbUDMY8PhK3cBCmeqHyWBXm7dnHQ" width={200} height={300} alt="placeholder" />
                    <div className="absolute top-24 left-0 rotate-[25deg]">
                        <Image src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" alt="placeholder" width={200} height={300} className="rounded-xl" />
                    </div>
                </div>
                <div className="z-[1] mt-32 xl:mt-24 sm:ml-12 w-full">
                    <h1 className="text-4xl">Lépj velem <span className="md:ml-14 lg:ml-0 xl:ml-14 2xl:ml-0">kapcsolatba</span></h1>
                </div>
            </div>
            <div className="mt-48 xl:mt-0">
                <ContactForm />
            </div>
        </div>
    )
}