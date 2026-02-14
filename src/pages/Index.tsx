import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ChatbotAISection from "@/components/landing/ChatbotAISection";
import ShowcaseSection from "@/components/landing/ShowcaseSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import ClosingSection from "@/components/landing/ClosingSection";
import Footer from "@/components/landing/Footer";
import FloatingElements from "@/components/landing/FloatingElements";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <HeroSection />
      <ComparisonSection />
      <FeaturesGrid />
      <ChatbotAISection />
      <ShowcaseSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <ClosingSection />
    </main>
    <Footer />
    <FloatingElements />
  </div>
);

export default Index;
