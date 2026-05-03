import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import CareerTimeline from "@/components/CareerTimeline";
import Fellowships from "@/components/Fellowships";
import Publications from "@/components/Publications";
import Supervision from "@/components/Supervision";
import Memberships from "@/components/Memberships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Research />
      <CareerTimeline />
      <Fellowships />
      <Publications />
      <Supervision />
      <Memberships />
      <Contact />
      <Footer />
    </main>
  );
}
