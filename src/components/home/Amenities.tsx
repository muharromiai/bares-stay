
import AmenityCard from "@/components/amenities/AmenityCard";
import { amenities } from "@/data/amenities";

export default function Amenities() {
  return (
    <section className="bg-[#EAE5DA] px-6 py-24 md:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-[#9A8463]">
            EXPERIENCE
          </p>

          <h2 className="mt-4 text-3xl font-light text-[#243C32] md:text-5xl">
            Designed for your comfort.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <AmenityCard
              key={amenity.id}
              amenity={amenity}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
