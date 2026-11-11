export interface TravelPackage {
  id: number;
  destinationSlug: string;
  durationDays: number;
  durationNights: number;
  priceFrom: number;
}

// Placeholder approximate prices in INR per person.
// Update these values when final package pricing is available.
export const packages: TravelPackage[] = [
  {
    id: 1,
    destinationSlug: "darjeeling",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 8500,
  },
  {
    id: 2,
    destinationSlug: "darjeeling_offbeat",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 9500,
  },
  {
    id: 3,
    destinationSlug: "kalimpong",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 6500,
  },
  {
    id: 4,
    destinationSlug: "kalimpong_offbeat",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 7500,
  },
  {
    id: 5,
    destinationSlug: "north_sikkim",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 14500,
  },
  {
    id: 6,
    destinationSlug: "east_sikkim",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 11000,
  },
  {
    id: 7,
    destinationSlug: "dooars",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 9000,
  },
];

export function getPackageByDestination(
  slug: string,
): TravelPackage | undefined {
  return packages.find((item) => item.destinationSlug === slug);
}
