import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const bullets = [
  "WhatsApps ilimitados",
  "Atendentes ilimitados",
  "Entregue já instalado",
  "Código Fonte Incluso",
  "White Label Completo",
  "IA integrada (Gemini ou OpenAI)",
];

const metrics = [
  { value: "+100", label: "Empresas já utilizam" },
  { value: "0", label: "Mensalidades" },
  { value: "100%", label: "Controle" },
];

const HeroSection = () => (
  <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden noise-bg">
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-500/15 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px]" />
      <div className="absolute top-10 right-1/4 w-[300px] h-[300px] rounded-full bg-green-500/5 blur-[100px]" />
    </div>

    {/* Floating particles */}
    <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-green-400/30 animate-float" />
    <div className="absolute top-40 right-[15%] w-1.5 h-1.5 rounded-full bg-blue-400/25 animate-float" style={{ animationDelay: "1s" }} />
    <div className="absolute bottom-32 left-[20%] w-1 h-1 rounded-full bg-purple-400/20 animate-float" style={{ animationDelay: "2s" }} />
    <div className="absolute top-60 right-[30%] w-2.5 h-2.5 rounded-full bg-green-300/20 animate-float" style={{ animationDelay: "0.5s" }} />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Premium Badge */}
        <span className="inline-block px-6 py-2 text-sm font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white glow-green-sm mb-6">
          Pagamento Único Vitalício — Sem Mensalidade Para Sempre
        </span>

        {/* Aggressive Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="text-green-400">Pare de Pagar Mensalidade.</span>
          <br />
          Seja Dono do Seu Próprio Sistema de Atendimento WhatsApp.
        </h1>

        {/* Emotional Subheadline */}
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          WhatsApps ilimitados, atendentes ilimitados e chatbot com IA pagando apenas uma vez.
          Sem mensalidade. Sem taxas escondidas.
        </p>

        {/* VSL - MacBook Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-10 relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 40px hsl(142 71% 45% / 0.15)" }}>
            {/* MacBook top bar */}
            <div className="bg-[hsl(217,33%,12%)] px-4 py-2.5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-auto text-xs text-muted-foreground font-medium">Demonstração Oficial do Sistema</span>
            </div>
            {/* Video */}
            <div className="aspect-video">
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

        {/* Micro Authority Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center items-center gap-6 md:gap-10 mb-10"
        >
          {metrics.map((m, i) => (
            <div key={m.label} className="flex items-center gap-6 md:gap-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{m.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{m.label}</div>
              </div>
              {i < metrics.length - 1 && (
                <div className="w-px h-10 bg-border" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Bullets */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-4">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-400" />
              </span>
              {b}
            </li>
          ))}
        </ul>

        <p className="text-base font-semibold text-white mb-10">
          Você compra uma vez. O sistema é seu.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2">
          <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 text-lg px-8 font-bold text-white">
            <a href="https://pay.chatbotwhatsapp.store?s=chatbot" target="_blank" rel="noopener noreferrer">
              Comprar Agora por R$92
            </a>
          </Button>
          <span className="text-xs text-muted-foreground">Acesso imediato após o pagamento</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
