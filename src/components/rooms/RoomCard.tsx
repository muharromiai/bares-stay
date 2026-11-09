
import type { Room } from "@/data/rooms";

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
            <h3 className="text-xl text-[#243C32]">
                {room.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
                {room.description}
            </p>

            <p className="mt-4 text-sm text-[#243C32]">
                Rp{room.price.toLocaleString("id-ID")}
                <span className="text-gray-500"> / night</span>
            </p>
        </div>
    </article>
  );
}
