
import type { Amenity } from "@/data/amenities";

interface AmenityCardProps {
    amenity: Amenity;
}

export default function AmenityCard({
    amenity,
}: AmenityCardProps) {
  return (
    <article className="group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={amenity.image}
          alt={amenity.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-5 text-xl text-[#243C32]">
        {amenity.name}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {amenity.description}
      </p>
    </article>
  );
}
