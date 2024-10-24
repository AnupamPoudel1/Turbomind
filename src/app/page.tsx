import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ChooseUs from "@/sections/ChooseUs";
import Questions from "@/sections/Questions";
import GetStarted from "@/sections/GetStarted";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";

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
    </div>
  );
}
