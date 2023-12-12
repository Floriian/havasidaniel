import Image from "next/image";
export function LandingContainer() {
    return (
        <div className="relative w-full h-half">
            <Image
                src="/landing_placeholder.jpg"
                alt="Havasi Dániel Edvin"
                objectFit="cover"
                priority={true}
                height={1080}
                width={1920}
            />
        </div>
    )
}
