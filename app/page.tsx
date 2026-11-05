import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { TravelSearch } from "@/components/home/travel-search";
import { Destinations } from "@/components/home/destinations";
import { AboutUs } from "@/components/home/aboutus";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <TravelSearch />
        <Destinations />

        {/* About Us section */}
        <div id="about-us" className="scroll-mt-16">
          <AboutUs />
        </div>

        {/* Contact section */}
        <div id="contact" className="scroll-mt-16">
          <Contact />
        </div>
      </main>
    </>
  );
}
