import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const bullets = [
  "WhatsApps ilimitados",
  "Atendentes ilimitados",
  "IA integrada",
  "Código Fonte Incluso",
  "Pagamento Único",
];

const HeroSection = () => (
  <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full glass text-primary mb-6">
          Pagamento Único • Sem Mensalidade
        </span>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          O Sistema Definitivo de Atendimento WhatsApp Para Empresas Que Querem{" "}
          <span className="gradient-text">Escalar</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          White Label, Atendentes Ilimitados, Chatbot com IA e Pagamento Único. Sem Mensalidade.
        </p>

        {/* VSL Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="glass rounded-2xl p-3 glow-green-sm">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/JafFc14Xsco"
                title="Demonstração Chatbot WhatsApp"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-400" />
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 text-lg px-8 font-bold text-white">
            <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
              Comprar Agora por R$97
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
