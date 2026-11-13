
export interface ItineraryDay {
  day: number;
  title: string;
  route?: string;
  description: string;
  activities: string[];
  overnightStay?: string;
  image: string;
  imageAlt: string;
  note?: string;
}

export interface TravelItinerary {
  slug: string;
  destinationSlug: string;
  title: string;
  subtitle: string;
  duration: string;
  destinations: string[];
  overview: string;
  pickupPoints: string[];
  days: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  importantNotes: string[];
  closingMessage: string;
  heroImage: string;
  heroImageAlt: string;
}

export const itineraries: TravelItinerary[] = [
  // ITINERARY 01: DARJEELING & OFFBEAT ESCAPE
  {
    slug: "darjeeling-offbeat-escape",
    destinationSlug: "darjeeling",
    title: "Darjeeling & Offbeat Himalayan Escape",
    subtitle:
      "Experience the charm of the Queen of Hills, beautiful tea gardens, peaceful monasteries and the scenic offbeat destinations of North Bengal.",
    duration: "3 Nights / 4 Days",
    destinations: ["Darjeeling", "Lamahatta", "Takdah"],
    overview:
      "A four-day Himalayan journey combining Darjeeling's iconic sightseeing with the peaceful landscapes and offbeat destinations of Lamahatta, Takdah and Tinchuley.",
    pickupPoints: [
      "NJP Railway Station",
      "Siliguri",
      "Bagdogra Airport (IXB)",
    ],
    heroImage: "/destinations/darjeeling/drj4.jpeg",
    heroImageAlt: "Beautiful Himalayan landscape in Darjeeling",
    days: [
      {
        day: 1,
        title: "Journey to Darjeeling",
        route: "NJP / Siliguri / IXB → Darjeeling via Kurseong",
        description:
          "Begin your Himalayan journey with a scenic drive towards Darjeeling through Rohini and Kurseong.",
        activities: [
          "Pickup from NJP Railway Station / Siliguri / Bagdogra Airport (IXB).",
          "Scenic drive towards Darjeeling via Rohini.",
          "Visit Rohini Viewpoint.",
          "Explore Kurseong Hill Town.",
          "Enjoy tea garden views, subject to route and time.",
          "Arrival at Darjeeling.",
          "Hotel check-in and leisure time.",
        ],
        overnightStay: "Darjeeling",
        image: "/destinations/kurseong/ksg1.jpeg",
        imageAlt: "Kurseong hill town and tea garden views",
      },
      {
        day: 2,
        title: "Darjeeling Local Sightseeing",
        route: "Explore the Queen of Hills",
        description:
          "Discover Darjeeling's iconic attractions, Himalayan viewpoints, monasteries and cultural landmarks, beginning with an early morning sunrise excursion.",
        activities: [
          "Early morning visit to Tiger Hill for sunrise and panoramic Himalayan views (weather permitting).",
          "Ghum Railway Station.",
          "Ghum Monastery.",
          "Batasia Loop.",
          "Peace Pagoda.",
          "Japanese Temple.",
          "Himalayan Mountaineering Institute (HMI).",
          "Padmaja Naidu Himalayan Zoological Park (Zoo).",
          "Beautiful Darjeeling Tea Garden.",
        ],
        overnightStay: "Darjeeling",
        image: "/destinations/darjeeling/drj4.jpeg",
        imageAlt: "Darjeeling Himalayan mountain landscape",
        note:
          "HMI and the Zoo remain closed every Thursday. Sightseeing will be adjusted accordingly.",
      },
      {
        day: 3,
        title: "Darjeeling to Lamahatta",
        route: "Explore Lamahatta, Takdah and Tinchuley",
        description:
          "After breakfast, check out and proceed towards Lamahatta, exploring beautiful offbeat destinations along the way.",
        activities: [
          "Breakfast and checkout from Darjeeling.",
          "Visit Lamahatta Eco Park.",
          "Explore Peshok Tea Garden.",
          "Visit Takdah Orchid Centre / Orchid Garden.",
          "Explore Tinchuley.",
          "Enjoy scenic viewpoints and beautiful Himalayan landscapes.",
          "Experience the peaceful atmosphere of the hills and nature.",
          "Check in at the hotel / homestay in Lamahatta.",
        ],
        overnightStay: "Lamahatta",
        image: "/destinations/kurseong/ksg2.jpeg",
        imageAlt: "Peaceful Himalayan landscape and greenery",
      },
      {
        day: 4,
        title: "Return Journey",
        route: "Lamahatta → Teesta Bazaar → NJP / Siliguri / IXB",
        description:
          "Enjoy breakfast and begin your return journey through the scenic Teesta Bazaar route.",
        activities: [
          "Breakfast at the property.",
          "Check out and proceed towards NJP / Siliguri / Bagdogra Airport.",
          "Enjoy the scenic drive through Teesta Bazaar.",
          "Enroute sightseeing, subject to time and route conditions.",
          "Drop at NJP Railway Station / Siliguri / Bagdogra Airport.",
        ],
        image: "/destinations/darjeeling/drj2.jpeg",
        imageAlt: "Scenic mountain road in North Bengal",
      },
    ],
    inclusions: [
      "Accommodation in hotels / homestays on a sharing basis.",
      "Daily breakfast and dinner in Darjeeling Main town. Lunch and snacks will be provided in offbeat Lamahatta.",
      "Dedicated cab service for the entire tour as per the itinerary.",
      "Pickup and drop from NJP / Siliguri / Bagdogra Airport.",
      "All sightseeing as mentioned in the itinerary.",
    ],
    exclusions: [
      "Any entry fees to sightseeing spots.",
      "Parking charges wherever applicable.",
      "Toy Train rides and any other optional rides.",
      "Lunch and personal meals.",
      "Personal expenses, shopping and tips.",
      "Any additional sightseeing not mentioned in the itinerary.",
      "Expenses arising due to roadblocks, landslides, natural calamities or other unforeseen circumstances.",
      "Anything not specifically mentioned under Package Inclusions.",
    ],
    importantNotes: [
      "Sightseeing is subject to weather, road and local conditions.",
      "Tiger Hill sunrise views are weather dependent.",
      "HMI and Zoo remain closed every Thursday.",
      "The itinerary may be adjusted depending on arrival/departure timings.",
      "Hotel and vehicle arrangements are subject to availability at the time of confirmation.",
    ],
    closingMessage: "Your Journey, Our Responsibility.",
  },

  // ITINERARY 02: DARJEELING – KURSEONG – MIRIK
  {
    slug: "darjeeling-kurseong-mirik",
    destinationSlug: "kurseong",
    title: "Darjeeling – Kurseong – Mirik Tour",
    subtitle:
      "Discover the charm of Darjeeling, scenic tea gardens, colonial hill stations and the beautiful landscapes of Mirik.",
    duration: "2 Nights / 3 Days",
    destinations: ["Darjeeling", "Kurseong", "Mirik"],
    overview:
      "A beautiful three-day Himalayan escape covering Darjeeling's famous attractions, the scenic hill town of Kurseong, peaceful pine forests, tea gardens and the picturesque landscapes of Mirik.",
    pickupPoints: [
      "NJP Railway Station",
      "Siliguri",
      "Bagdogra Airport (IXB)",
    ],
    heroImage: "/destinations/darjeeling/drj4.jpeg",
    heroImageAlt: "Beautiful Himalayan landscape in Darjeeling",
    days: [
      {
        day: 1,
        title: "Journey to Darjeeling",
        route: "NJP / Siliguri / IXB → Darjeeling via Rohini and Kurseong",
        description:
          "Begin your Himalayan journey with a scenic drive through Rohini and Kurseong, enjoying beautiful mountain roads, tea gardens and panoramic landscapes.",
        activities: [
          "Pickup from NJP Railway Station / Siliguri / Bagdogra Airport (IXB).",
          "Drive towards Darjeeling via the scenic Rohini route.",
          "Visit Rohini Viewpoint.",
          "Explore Kurseong Hill Town.",
          "Enjoy beautiful tea garden views.",
          "Experience the mountain roads and panoramic landscapes.",
          "Arrival at Darjeeling.",
          "Hotel check-in and leisure time.",
        ],
        overnightStay: "Darjeeling",
        image: "/destinations/kurseong/ksg1.jpeg",
        imageAlt: "Kurseong hill town and tea garden views",
      },
      {
        day: 2,
        title: "Darjeeling Local Sightseeing",
        route: "Early Morning Tiger Hill and Darjeeling Sightseeing",
        description:
          "Explore the iconic attractions of Darjeeling, starting with an early morning excursion to Tiger Hill for a beautiful Himalayan sunrise.",
        activities: [
          "Early morning visit to Tiger Hill for sunrise (weather permitting).",
          "Visit Ghum Railway Station.",
          "Explore Ghum Monastery.",
          "Visit Batasia Loop.",
          "Explore Peace Pagoda.",
          "Visit Japanese Temple.",
          "Visit Himalayan Mountaineering Institute (HMI).",
          "Explore Padmaja Naidu Himalayan Zoological Park (Zoo).",
          "Visit Darjeeling Tea Garden.",
        ],
        overnightStay: "Darjeeling",
        image: "/destinations/darjeeling/drj4.jpeg",
        imageAlt: "Beautiful Darjeeling Himalayan landscape",
        note:
          "HMI and Zoo remain closed every Thursday. Sightseeing will be adjusted accordingly.",
      },
      {
        day: 3,
        title: "Darjeeling to NJP / Siliguri / IXB",
        route: "Darjeeling → Mirik → NJP / Siliguri / IXB",
        description:
          "After breakfast, check out from the hotel and proceed towards Mirik through scenic tea gardens, beautiful viewpoints, pine forests and surrounding Himalayan landscapes.",
        activities: [
          "Breakfast at the hotel.",
          "Check out and proceed towards Mirik.",
          "Enjoy scenic tea garden views.",
          "Visit Mirik Lake (Sumendu Lake).",
          "Explore Lepchajagat Pine Forest.",
          "Visit Simana Viewpoint.",
          "Enjoy the views from Gopal Dhara Tea Garden.",
          "Visit Tingling Viewpoint.",
          "Explore Bokar Monastery.",
          "Visit Pashupati Market, subject to available time and applicable entry formalities.",
          "Enjoy the beautiful landscapes of Mirik and surrounding hills.",
          "Continue towards NJP / Siliguri / Bagdogra Airport.",
          "Drop at the respective destination.",
        ],
        image: "/destinations/kurseong/ksg2.jpeg",
        imageAlt: "Scenic Himalayan hills and tea garden landscapes",
        note:
          "Pashupati Market visit is subject to available time and applicable cross-border entry requirements.",
      },
    ],
    inclusions: [
      "2 Nights accommodation in hotel.",
      "Daily breakfast and dinner.",
      "Dedicated cab service for the entire tour as per itinerary.",
      "NJP / Siliguri / Bagdogra pickup and drop.",
      "All sightseeing mentioned in the itinerary.",
    ],
    exclusions: [
      "Entry fees at sightseeing spots.",
      "Parking charges.",
      "Toy Train rides and other optional rides.",
      "Lunch and personal meals.",
      "Personal expenses, shopping and tips.",
      "Any additional sightseeing not mentioned in the itinerary.",
      "Expenses due to natural calamities, landslides or unforeseen circumstances.",
      "Anything not specifically mentioned under Package Inclusions.",
    ],
    importantNotes: [
      "All sightseeing is subject to weather and road conditions.",
      "Tiger Hill sunrise is subject to weather visibility.",
      "HMI and Zoo remain closed every Thursday.",
      "Pashupati Market visit is subject to available time and applicable cross-border entry requirements.",
      "The itinerary may be adjusted according to arrival and departure timings.",
    ],
    closingMessage: "Your Journey, Our Responsibility.",
  },

  // ITINERARY 03: DARJEELING & OFFBEAT SITTONG
  {
    slug: "darjeeling-offbeat-sittong",
    destinationSlug: "darjeeling_offbeat",
    title: "Darjeeling & Offbeat Sittong",
    subtitle:
      "Discover the charm of Darjeeling, picturesque tea gardens, peaceful mountain villages, orange orchards and the hidden beauty of North Bengal.",
    duration: "3 Nights / 4 Days",
    destinations: ["Darjeeling", "Lamahatta", "Peshok", "Sittong"],
    overview:
      "A beautiful four-day Himalayan escape combining iconic Darjeeling sightseeing with the peaceful mountain villages, tea gardens, orange orchards and natural beauty of Sittong.",
    pickupPoints: [
      "NJP Railway Station",
      "Siliguri",
      "Bagdogra Airport (IXB)",
    ],
    heroImage: "/destinations/darjeeling/drj4.jpeg",
    heroImageAlt: "Beautiful Himalayan landscape in Darjeeling",
    days: [
      {
        day: 1,
        title: "Journey to Darjeeling",
        route: "NJP / Siliguri / IXB → Darjeeling via Rohini and Kurseong",
        description:
          "Begin your Himalayan journey with a scenic drive towards Darjeeling through Rohini and Kurseong, enjoying beautiful mountain roads and tea garden landscapes.",
        activities: [
          "Pickup from NJP Railway Station / Siliguri / Bagdogra Airport (IXB).",
          "Drive towards Darjeeling via the scenic Rohini route.",
          "Visit Rohini Viewpoint.",
          "Explore Kurseong Hill Town.",
          "Enjoy tea garden views.",
          "Enjoy beautiful mountain roads and panoramic landscapes.",
          "Arrival at Darjeeling.",
          "Hotel check-in and leisure time.",
        ],
        overnightStay: "Darjeeling",
        image: "/destinations/kurseong/ksg1.jpeg",
        imageAlt: "Kurseong hill town and tea garden views",
      },
      {
        day: 2,
        title: "Darjeeling Local Sightseeing",
        route: "Early Morning Tiger Hill Excursion",
        description:
          "Explore the famous attractions of Darjeeling, beginning with an early morning visit to Tiger Hill for a beautiful Himalayan sunrise.",
        activities: [
          "Early morning visit to Tiger Hill for sunrise (weather permitting).",
          "Visit Ghum Railway Station.",
          "Explore Ghum Monastery.",
          "Visit Batasia Loop.",
          "Explore Peace Pagoda.",
          "Visit Japanese Temple.",
          "Visit Himalayan Mountaineering Institute (HMI).",
          "Explore Padmaja Naidu Himalayan Zoological Park (Zoo).",
          "Visit Darjeeling Tea Garden.",
        ],
        overnightStay: "Darjeeling",
        image: "/destinations/darjeeling/drj4.jpeg",
        imageAlt: "Darjeeling Himalayan mountain landscape",
        note:
          "HMI and Zoo remain closed every Thursday. Sightseeing will be adjusted accordingly.",
      },
      {
        day: 3,
        title: "Darjeeling to Sittong",
        route: "Darjeeling → Lamahatta → Peshok → Sittong",
        description:
          "After breakfast, check out and proceed towards the beautiful offbeat destination of Sittong, exploring peaceful villages, tea gardens, bridges and scenic mountain viewpoints along the way.",
        activities: [
          "Breakfast at the hotel and check-out.",
          "Proceed towards the beautiful offbeat destination of Sittong.",
          "Visit Lamahatta Eco Park.",
          "Explore Peshok Tea Garden.",
          "Visit Jogighat Bridge.",
          "Visit Orange Garden (seasonal).",
          "Enjoy scenic mountain viewpoints.",
          "Experience the peaceful atmosphere and natural beauty of the region.",
          "Arrival at Sittong.",
          "Check-in at the homestay.",
          "Enjoy evening snacks and the beautiful village surroundings.",
        ],
        overnightStay: "Sittong",
        image: "/destinations/kurseong/ksg2.jpeg",
        imageAlt: "Peaceful offbeat Himalayan village landscape",
        note:
          "Orange garden experience is seasonal.",
      },
      {
        day: 4,
        title: "Sittong to NJP / Siliguri / IXB",
        route: "Sittong → NJP / Siliguri / IXB",
        description:
          "Enjoy breakfast at the homestay and explore the beautiful surroundings of Sittong before beginning your return journey.",
        activities: [
          "Breakfast at the homestay.",
          "Explore the beautiful surroundings of Sittong.",
          "Visit Ahaldhara Viewpoint.",
          "Explore Namthing Pokhri Lake.",
          "Visit Local Monastery.",
          "Enjoy scenic village viewpoints, subject to time and road conditions.",
          "Proceed towards NJP / Siliguri / Bagdogra Airport.",
          "Drop at the respective destination.",
        ],
        image: "/destinations/darjeeling/drj2.jpeg",
        imageAlt: "Scenic Himalayan village and mountain landscape",
      },
    ],
    inclusions: [
      "2 Nights accommodation in Darjeeling.",
      "1 Night accommodation in Sittong homestay.",
      "Darjeeling – MAP Plan: Daily breakfast and dinner.",
      "Sittong – AP Plan: Breakfast, lunch, evening snacks and dinner.",
      "Dedicated cab service for the entire tour as per the itinerary.",
      "Pickup and drop from NJP / Siliguri / Bagdogra Airport.",
      "All sightseeing mentioned in the itinerary.",
    ],
    exclusions: [
      "Entry fees at sightseeing spots.",
      "Parking charges wherever applicable.",
      "Toy Train rides and other optional rides.",
      "Personal expenses, shopping and tips.",
      "Any additional sightseeing not mentioned in the itinerary.",
      "Expenses arising due to roadblocks, landslides, natural calamities or other unforeseen circumstances.",
      "Anything not specifically mentioned under Package Inclusions.",
    ],
    importantNotes: [
      "All sightseeing is subject to weather, road and local conditions.",
      "Tiger Hill sunrise is subject to weather visibility.",
      "HMI and Zoo remain closed every Thursday.",
      "Orange garden experience is seasonal.",
      "The itinerary may be adjusted according to arrival and departure timings.",
    ],
    closingMessage: "Your Journey, Our Responsibility.",
  },
];

export function getItineraryBySlug(
  slug: string,
): TravelItinerary | undefined {
  return itineraries.find((item) => item.slug === slug);
}
