import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PainSolution from "@/components/PainSolution";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChannelTalk from "@/components/ChannelTalk";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <ChannelTalk />
      <main>
        <Hero />
        <Services />
        <PainSolution />
        <Process />
        <Stats />
        <Reviews />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
