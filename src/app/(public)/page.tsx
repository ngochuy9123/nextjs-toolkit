import CTASection from "@/features/Home/Components/CTASection";
import HeroSection from "@/features/Home/Components/HeroSection";
import ValuePropositionSection from "@/features/Home/Components/ValuePropositionSection";

export default function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <ValuePropositionSection />
      <CTASection />
    </div>
  );
}
