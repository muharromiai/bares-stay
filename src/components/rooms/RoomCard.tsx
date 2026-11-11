import type { Room } from "@/data/rooms";
import { bookingWhatsApp } from "@/lib/whatsapp";

interface RoomCardProps {
    room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="group">
        <div className="aspect-[4/3] overflow-hidden bg-[#E5DED0]">
        <img
            src={room.image}
            alt={room.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        </div>

        <div className="pt-5">
            <h3 className="font-serif text-xl text-[#243C32]">
                {room.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
                {room.description}
            </p>

            <p className="mt-4 text-sm text-[#243C32]">
                Rp{room.price.toLocaleString("id-ID")}
                <span className="text-gray-500"> / night</span>
            </p>
            <a
                href={bookingWhatsApp(room.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border border-[#243C32] px-6 py-3 text-xs tracking-widest text-[#243C32] transition hover:bg-[#243C32] hover:text-white"
                >
                BOOK THIS ROOM
            </a>
        </div>
    </article>
  );
}
