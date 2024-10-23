import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ChooseUs from "@/sections/ChooseUs";
import Questions from "@/sections/Questions";
import GetStarted from "@/sections/GetStarted";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <ChooseUs />
      <Questions />
      <GetStarted />
    </div>
  );
}
