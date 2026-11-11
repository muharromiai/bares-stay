import RoomCard from "@/components/rooms/RoomCard";
import { rooms } from "@/data/rooms";
import type { Metadata } from "next";

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-[#9A8463]">
            ACCOMMODATION
          </p>

          <h1 className="mt-4 font-serif text-4xl font-light text-[#243C32] md:text-6xl">
            Find Your Stay.
          </h1>

          <p className="mt-4 max-w-xl text-[#272923]/70">
            Discover our selection of thoughtfully designed tropical
            accommodations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Our Rooms",
  description:
    "Explore comfortable tropical rooms and private villas at Barès Tropical Stay.",
};