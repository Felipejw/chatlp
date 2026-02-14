import { Check, Play } from "lucide-react";
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
  <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full glass text-primary mb-6">
            Pagamento Único • Sem Mensalidade
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            O Sistema Definitivo de Atendimento WhatsApp Para Empresas Que Querem{" "}
            <span className="gradient-text">Escalar</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            White Label, Atendentes Ilimitados, Chatbot com IA e Pagamento Único. Sem Mensalidade.
          </p>

          <ul className="space-y-3 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="glow-primary bg-primary hover:bg-primary/90 text-lg px-8 font-bold animate-glow-pulse">
              <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
                Comprar Agora por R$97
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-lg gap-2">
              <Play className="w-4 h-4" /> Ver Demonstração
            </Button>
          </div>
        </motion.div>

        {/* Right — Mockup placeholder */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
          <div className="relative">
            <div className="glass rounded-2xl p-6 glow-primary-sm">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/30 mx-auto flex items-center justify-center animate-float">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Espaço para VSL</p>
                </div>
              </div>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl glass animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-primary/20 blur-sm animate-float" style={{ animationDelay: "0.5s" }} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
