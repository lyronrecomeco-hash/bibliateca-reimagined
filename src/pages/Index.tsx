import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Guia Sagrado - Domine a Bíblia em 30 Dias com Mapas Mentais</title>
        <meta 
          name="description" 
          content="Aprenda a entender, memorizar e aplicar a Bíblia com o método visual que já transformou mais de 10.000 cristãos. Mapas mentais completos de todos os 66 livros." 
        />
        <meta name="keywords" content="estudo bíblico, mapas mentais, Bíblia, devocional, memorização bíblica" />
        <link rel="canonical" href="https://guiasagrado.com.br" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
