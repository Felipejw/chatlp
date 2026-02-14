import HeroSection from "@/components/landing/HeroSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ChatbotAISection from "@/components/landing/ChatbotAISection";
import ShowcaseSection from "@/components/landing/ShowcaseSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";


import FloatingElements from "@/components/landing/FloatingElements";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <main>
      <HeroSection />
      <ComparisonSection />
      <FeaturesGrid />
      <ChatbotAISection />
      <ShowcaseSection />
      <TestimonialsSection />
      <FAQSection />
      
    </main>
    
    <FloatingElements />
  </div>
);

export default Index;
