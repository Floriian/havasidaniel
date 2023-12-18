import Image from "next/image";
import { ardela } from "@/utils";
export function LandingContainer() {
  return (
    <div className="relative w-full">
      <Image
        src="/header.png"
        alt="Havasi Dániel Edvin"
        priority={true}
        height={1293}
        width={1920}
      />
      <div className="absolute text-2xl md:text-7xl text-white top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto ">
        <div className="relative">
          <Image
            src="/logo.webp"
            width={1024}
            height={1024}
            alt="Havasi Dániel Edvin"
          />
        </div>
        <h1 className={ardela.className + " text-center"}>HED</h1>
        <h1 className={ardela.className + " text-center"}>PHOTOGRAPHY</h1>

        <div className="absolute text-xl w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          tempore, velit magni voluptate nihil iste tenetur! Atque rem ipsum cum
          quae doloremque! Qui tempora molestiae fuga odit et, aliquid
          temporibus!
        </div>
      </div>
    </div>
  );
}
