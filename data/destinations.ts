export interface Destination {
  id: number;
  name: string;
  state: string;
  image: string;
  description: string;
  href: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Darjeeling",
    state: "West Bengal",
    image: "/destinations/darjeeling.jpg",
    description: "Crown of India",
    href: "/destinations/darjeeling",
  },
  {
    id: 2,
    name: "Darjeeling Offbeat",
    state: "West Bengal",
    image: "/destinations/darjeeling_offbeat.jpg",
    description: "Crown of India",
    href: "/destinations/darjeeling_offbeat",
  },
  {
    id: 3,
    name: "Kalimpong",
    state: "West Bengal",
    image: "/destinations/kalimpong.jpg",
    description: "Orchids and cacti",
    href: "/destinations/kalimpong",
  },
  {
    id: 4,
    name: "Kalimpong Offbeat",
    state: "West Bengal",
    image: "/destinations/kalimpong_offbeat.jpg",
    description: "Hidden trails and quiet villages",
    href: "/destinations/kalimpong_offbeat",
  },
  {
    id: 5,
    name: "North Sikkim",
    state: "Sikkim",
    image: "/destinations/north_sikkim.jpg",
    description: "Alpine lakes and high passes",
    href: "/destinations/north_sikkim",
  },
  {
    id: 6,
    name: "East Sikkim",
    state: "Sikkim",
    image: "/destinations/east_sikkim.jpg",
    description: "Alpine lakes and high passes",
    href: "/destinations/east_sikkim",
  },
  {
    id: 7,
    name: "Dooars",
    state: "West Bengal",
    image: "/destinations/dooars.jpg",
    description: "Gateway to Bhutan",
    href: "/destinations/dooars",
  },
];