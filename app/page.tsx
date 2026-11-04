import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { TravelSearch } from "@/components/home/travel-search";
import { Destinations } from "@/components/home/destinations";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TravelSearch/>
      <Destinations/>
    </main>
  );
}