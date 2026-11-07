
export interface VideoReview {
  id: number;
  customerName: string;
  destination: string;
  videoUrl: string;
  caption: string;
}

export const videoReviews: VideoReview[] = [
  {
    id: 1,
    customerName: "Our Happy Traveler",
    destination: "Darjeeling",
    videoUrl: "https://www.facebook.com/share/v/1CJH7iHu28/",
    caption: "A memorable journey with Travel with Limon.",
  },
  {
    id: 2,
    customerName: "Our Happy Traveler",
    destination: "North Sikkim",
    videoUrl: "https://www.facebook.com/share/v/1dW7aG9qUs/",
    caption: "Beautiful moments from the mountains.",
  },
  {
    id: 3,
    customerName: "Our Happy Traveler",
    destination: "Travel Experience",
    videoUrl: "https://www.facebook.com/share/r/1KtQG9GLfe/",
    caption: "Another wonderful travel experience.",
  },
  {
    id: 4,
    customerName: "Our Happy Traveler",
    destination: "Travel Experience",
    videoUrl: "https://www.facebook.com/share/r/1DUCEBgGFk/",
    caption: "Memories worth sharing.",
  },
];
