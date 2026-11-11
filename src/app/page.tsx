import Amenities from "@/components/home/Amenities";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import GalleryPreview from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <Hero
        eyebrow="YOUR COMFORTABLE TROPICAL ESCAPE"
        description="Experience a peaceful tropical retreat where modern comfort meets the beauty of nature."
      />
      <Introduction />
      <FeaturedRooms />
      <Amenities />
      <GalleryPreview />

    </main>
  );
}
