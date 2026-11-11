import type { Metadata } from "next";
export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">

        <p className="text-xs tracking-[0.3em] text-[#9A8463]">
          FIND US
        </p>

        <h1 className="mt-4 font-serif text-4xl font-light text-[#243C32] md:text-6xl">
          Your Tropical Escape.
        </h1>

        <p className="mt-5 max-w-xl leading-7 text-[#272923]/70">
          Discover the beauty of our surroundings and find your way
          to a peaceful tropical getaway.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">

          <div>
            <div className="aspect-[4/3] overflow-hidden">
                <iframe
                    src="https://maps.google.com/maps?q=Lombok%2C%20West%20Nusa%20Tenggara&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barès Location Map"
                />
                </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-2xl text-[#243C32]">
              Visit Barès
            </h2>

            <p className="mt-5 leading-7 text-[#272923]/70">
              Experience a peaceful stay surrounded by tropical
              landscapes, beautiful scenery, and warm hospitality.
            </p>

            <div className="mt-8">
              <p className="text-xs tracking-widest text-[#9A8463]">
                ADDRESS
              </p>

              <p className="mt-2 text-[#243C32]">
                Lombok, West Nusa Tenggara, Indonesia
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs tracking-widest text-[#9A8463]">
                GET DIRECTIONS
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Lombok%2C+West+Nusa+Tenggara"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block border border-[#243C32] px-6 py-3 text-xs tracking-widest text-[#243C32] transition hover:bg-[#243C32] hover:text-white"
              >
                OPEN GOOGLE MAPS
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find Barès Tropical Stay and discover its location and surrounding area.",
};