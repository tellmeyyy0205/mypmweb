import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-neutral-900 selection:text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}
