import { Article } from "@components/article";
import { ContactForm } from "@features/contact";
import Image from "next/image";

export function ContactSection() {
    return (
        <Article toggleDivider>
            <div className="[&>img]:rounded-xl mb-24 xl:mb-0 w-full">
                <div className="relative w-full">
                    <div className="absolute w-full grid grid-cols-12">
                        <h1 className="text-4xl ml-52 z-[1] col-span-3">
                            Lépj velem <br />
                            <span className="ml-28">kapcsolatba!</span>
                        </h1>
                        <div className="mt-28 w-full col-span-9">
                            <ContactForm />
                        </div>
                    </div>
                    <Image src="https://fastly.picsum.photos/id/817/200/300.jpg?hmac=Egrlh6ZzXMOSu9esbUDMY8PhK3cBCmeqHyWBXm7dnHQ" alt="placeholder" width={200} height={300} className="rounded-xl" />
                    <div className="absolute bottom-0 top-[20rem] left-20 rotate-[25deg] scale-100 w-5/6">
                        <Image src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" alt="placeholder" width={200} height={300} className="rounded-xl" />
                    </div>
                </div>
            </div>
        </Article>
    )
}