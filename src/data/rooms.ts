
export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Garden Room",
    description: "A cozy room surrounded by tropical greenery.",
    price: 450000,
    image: "/images/garden-room.jpg",
  },
  {
    id: 2,
    name: "Tropical Suite",
    description: "A spacious suite with elegant tropical interiors.",
    price: 750000,
    image: "/images/tropical-suite.jpg",
  },
  {
    id: 3,
    name: "Private Villa",
    description: "A private villa for an exclusive tropical escape.",
    price: 1250000,
    image: "/images/private-villa.jpg",
  },
];
