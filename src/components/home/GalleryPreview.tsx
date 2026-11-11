
import { galleryImages } from "@/data/gallery";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPreview() {
    return (
        <section className="px-6 py-20 md:px-16">
            <h2 className="text-3xl font-serif text-[#243C32] md:text-5xl">
                Moments at Barès.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.slice(0, 3).map((image) => (
                    <div
                        key={image.id}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <Link
                    href="/gallery"
                    className="inline-block border-b border-[#243C32] pb-2 text-sm tracking-wider text-[#243C32] transition-colors hover:text-[#9A8463]"
                >
                    VIEW FULL GALLERY
                </Link>
            </div>
        </section>
    );
}