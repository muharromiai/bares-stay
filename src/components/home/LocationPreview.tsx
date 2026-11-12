
import Image from "next/image";
import Link from "next/link";

export default function LocationPreview() {
    return (
        <section className="px-6 py-20 md:px-16">
            <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                <div>
                    <p className="text-xs tracking-[0.3em] text-[#9A8463]">
                        OUR LOCATION
                    </p>

                    <h2 className="mt-5 font-serif text-3xl text-[#243C32] md:text-5xl">
                        Find your escape in Lombok.
                    </h2>

                    <p className="mt-6 max-w-lg leading-7 text-[#272923]/70">
                        Discover a peaceful tropical retreat surrounded by
                        the natural beauty of Lombok. A perfect place to slow
                        down, relax, and enjoy meaningful moments.
                    </p>

                    <p className="mt-6 text-sm font-medium text-[#243C32]">
                        Lombok, West Nusa Tenggara, Indonesia
                    </p>

                    <Link
                        href="/location"
                        className="mt-8 inline-block border-b border-[#243C32] pb-2 text-sm tracking-wider text-[#243C32] transition-colors hover:text-[#9A8463]"
                    >
                        EXPLORE LOCATION
                    </Link>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                        src="/images/pool.jpg"
                        alt="Tropical swimming pool at Barès"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}