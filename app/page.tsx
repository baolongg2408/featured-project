import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContactBanner from "@/components/sections/ContactBanner";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";


export default function Home() {
  return (
   <div className="min-h-screen bg-[#F7F4EF] text-[#1A1A1A] font-sans antialiased selection:bg-neutral-800 selection:text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <Hero />

        <FeaturedProjects />

        <Experience />

        <ContactBanner />
      </main>

      <Footer />
    </div>
  );
}
