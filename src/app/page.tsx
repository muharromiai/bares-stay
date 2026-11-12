import Amenities from "@/components/home/Amenities";
import BookingCTA from "@/components/home/BookingCTA";
import Experience from "@/components/home/Experience";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import GalleryPreview from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import LocationPreview from "@/components/home/LocationPreview";

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
      <LocationPreview />
      <Experience />
      <BookingCTA />
    </main>
  );
}
