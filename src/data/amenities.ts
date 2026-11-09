
export interface Amenity {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const amenities: Amenity[] = [
  {
    id: 1,
    name: "Swimming Pool",
    description: "Relax by our tropical pool.",
    image: "/images/pool.jpg",
  },
  {
    id: 2,
    name: "Restaurant",
    description: "Enjoy a delightful dining experience.",
    image: "/images/restaurant.jpg",
  },
  {
    id: 3,
    name: "Spa & Wellness",
    description: "Take time to relax and recharge.",
    image: "/images/spa.jpg",
  },
  {
    id: 4,
    name: "Private Garden",
    description: "Find peace in a natural setting.",
    image: "/images/garden.jpg",
  },
];
