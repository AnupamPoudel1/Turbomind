import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ChooseUs from "@/sections/ChooseUs";
import Questions from "@/sections/Questions";
import GetStarted from "@/sections/GetStarted";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <ChooseUs />
      <Questions />
      <GetStarted />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
