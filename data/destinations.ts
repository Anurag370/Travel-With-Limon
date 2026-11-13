export interface Destination {
  id: number;
  slug: string;
  image: string;
  href: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    slug: "darjeeling",
    image: "/destinations/darjeeling/drj4.jpeg",
    href: "/destinations/darjeeling",
  },
  {
    id: 2,
    slug: "darjeeling_offbeat",
    image: "/destinations/darjeeling_offbeat/drjoff1.jpeg",
    href: "/destinations/darjeeling_offbeat",
  },
  {
    id: 3,
    slug: "kalimpong",
    image: "/destinations/kalimpong/kmp1.jpeg",
    href: "/destinations/kalimpong",
  },
  {
    id: 4,
    slug: "kalimpong_offbeat",
    image: "/destinations/kalimpong_offbeat/kmpoff1.jpeg",
    href: "/destinations/kalimpong_offbeat",
  },
  {
    id: 5,
    slug: "north_sikkim",
    image: "/destinations/north_sikkim/ns1.jpeg",
    href: "/destinations/north_sikkim",
  },
  {
    id: 6,
    slug: "east_sikkim",
    image: "/destinations/east_sikkim/es1.jpeg",
    href: "/destinations/east_sikkim",
  },
  {
    id: 7,
    slug: "dooars",
    image: "/destinations/dooars/doars1.jpeg",
    href: "/destinations/dooars",
  },
  {
    id: 8,
    slug: "bhutan",
    image: "/destinations/bhutan/bh1.jpeg",
    href: "/destinations/bhutan",
  },
  {
    id: 9,
    slug: "kurseong",
    image: "/destinations/kurseong/ksg5.jpeg",
    href: "/destinations/kurseong",
  },
];
