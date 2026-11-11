
import RoomCard from "@/components/rooms/RoomCard";
import { rooms } from "@/data/rooms";

export default function FeaturedRooms() {
  return (
    <section id="rooms" className="px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-[#9A8463]">
            ACCOMMODATION
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light text-[#243C32] md:text-5xl">
            Find your perfect stay.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

      </div>
    </section>
  );
}
