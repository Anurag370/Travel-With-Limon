import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { TravelSearch } from "@/components/home/travel-search";
import { Destinations } from "@/components/home/destinations";
import { AboutUs } from "@/components/home/aboutus";
import { Contact } from "@/components/home/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <TravelSearch />
        <Destinations />
        <AboutUs />
        <Contact />
        <Footer />

      </main>
    </>
  );
}
