import GalleryGrid from "@/components/gallery/GalleryGrid";
import type { Metadata } from "next";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:px-16">
        <p className="text-xs tracking-[0.3em] text-[#9A8463]">
          EXPLORE BARÈS
        </p>

        <h1 className="mt-4 font-serif text-4xl font-light text-[#243C32] md:text-6xl">
          A Glimpse of Paradise.
        </h1>

        <p className="mt-5 max-w-xl leading-7 text-[#272923]/70">
          Discover the spaces, details, and experiences that make
          every stay at Barès special.
        </p>
      </div>

      <GalleryGrid />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the tropical atmosphere, rooms, and facilities of Barès Tropical Stay.",
};