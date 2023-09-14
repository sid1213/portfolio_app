import About from "@/components/About";
import HeroBanner from "@/components/HeroBanner";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-5">
      <HeroBanner />
      <About />
      <Portfolio />
      <Skills />
    </main>
  );
}
