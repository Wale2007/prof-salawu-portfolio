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

const siteUrl = "https://sosalawu.vercel.app";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Professor Sule Ola Salawu",
    alternateName: "Prof. Salawu S.O",
    jobTitle: "Professor of Biochemistry",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Federal University of Technology, Akure",
    },
    image: `${siteUrl}/prof-salawu.jpg`,
    url: siteUrl,
    description: "Professor of Biochemistry and researcher in phytochemistry, nutritional biochemistry, and mental health advocacy.",
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
