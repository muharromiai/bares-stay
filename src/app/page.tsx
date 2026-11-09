import GalleryGrid from "@/components/gallery/GalleryGrid";
import Amenities from "@/components/home/Amenities";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <Hero
        eyebrow="YOUR COMFORTABLE TROPICAL ESCAPE"
        description="Experience a peaceful tropical retreat where modern comfort meets the beauty of nature."
      />
      <FeaturedRooms />
      <Amenities />
      <GalleryGrid />

      {/* Temporary Introduction */}
      <section
        id="about"
        className="px-6 py-20 text-center md:px-16"
      >
        <p className="text-xs tracking-[0.3em] text-[#9A8463]">
          WELCOME TO BARÈS
        </p>

        <h2 className="mt-5 text-3xl font-light text-[#243C32] md:text-5xl">
          A slower way to experience life.
        </h2>
      </section>
    </main>
  );
}
