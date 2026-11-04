
export interface DestinationGallery {
  title: string;
  cover: string;
  images: string[];
}

export const destinationGallery: Record<string, DestinationGallery> = {
  darjeeling: {
    title: "Darjeeling",
    cover: "/destinations/darjeeling/drj4.jpeg",
    images: [
      "/destinations/darjeeling/drj1.jpeg",
      "/destinations/darjeeling/drj2.jpeg",
      "/destinations/darjeeling/drj3.jpeg",
      
      "/destinations/darjeeling/drj4.jpeg",
      "/destinations/darjeeling/drj5.jpeg",
    ],
  },

  darjeeling_offbeat: {
    title: "Darjeeling Offbeat",
    cover: "/destinations/darjeeling_offbeat/drjoff1.jpeg",
    images: [
      "/destinations/darjeeling_offbeat/drjoff1.jpeg",
      "/destinations/darjeeling_offbeat/drjoff2.jpeg",
      "/destinations/darjeeling_offbeat/drjoff3.jpeg",
      "/destinations/darjeeling_offbeat/drjoff4.webp",
    ],
  },

  dooars: {
    title: "Dooars",
    cover: "/destinations/dooars/doars1.jpeg",
    images: [
      "/destinations/dooars/doars1.jpeg",
      "/destinations/dooars/doars2.jpeg",
      "/destinations/dooars/doars3.jpeg",
    ],
  },

  east_sikkim: {
    title: "East Sikkim",
    cover: "/destinations/east_sikkim/es1.jpeg",
    images: [
      "/destinations/east_sikkim/es1.jpeg",
      "/destinations/east_sikkim/es2.jpeg",
    ],
  },

  kalimpong: {
    title: "Kalimpong",
    cover: "/destinations/kalimpong/kmp1.jpeg",
    images: [
      "/destinations/kalimpong/kmp1.jpeg",
      "/destinations/kalimpong/kmp2.jpeg",
      "/destinations/kalimpong/kmp3.jpeg",
      "/destinations/kalimpong/kmp4.jpeg",
    ],
  },

  kalimpong_offbeat: {
    title: "Kalimpong Offbeat",
    cover: "/destinations/kalimpong_offbeat/kmpoff1.jpeg",
    images: [
      "/destinations/kalimpong_offbeat/kmpoff1.jpeg",
      "/destinations/kalimpong_offbeat/kmpoff2.webp",
      "/destinations/kalimpong_offbeat/kmpoff3.webp",
    ],
  },

  north_sikkim: {
    title: "North Sikkim",
    cover: "/destinations/north_sikkim/ns1.jpeg",
    images: [
      "/destinations/north_sikkim/ns1.jpeg",
      "/destinations/north_sikkim/ns2.webp",
      "/destinations/north_sikkim/ns3.jpeg",
      "/destinations/north_sikkim/ns4.webp",
    ],
  },
};
