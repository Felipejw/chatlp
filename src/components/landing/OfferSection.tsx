import { useState, useEffect } from "react";
import { CheckCircle, CheckSquare, Clock, ShieldCheck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  { text: "Pagamento único vitalício", highlight: true },
  { text: "Entregue já instalado no seu servidor", highlight: true },
  { text: "WhatsApps ilimitados", highlight: true },
  { text: "Atendentes ilimitados e crie setores", highlight: true },
  { text: "Chatbot com I.A. Inclusa (Sem Custo Extra)", highlight: false },
  { text: "Integração com Instagram e Facebook", highlight: false },
  { text: "Disparo em Massa para sua lista de contatos", highlight: false },
  { text: "Agendamento de Mensagens", highlight: false },
  { text: "Dashboard de Atendimento em tempo real", highlight: false },
  { text: "API e Integrações (Typebot, Dialogflow, etc)", highlight: false },
];

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <section className="py-12 relative noise-bg">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Hoje você paga R$92
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium mt-1">
            e elimina mensalidades para sempre
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 text-green-500">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Outras plataformas cobram R$200/mês. Aqui você paga uma única vez e recebe já instalado.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto glass-strong rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Countdown */}
          <div className="border-2 border-dashed border-green-500/40 rounded-xl p-4 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-green-500">Preço promocional por tempo limitado</span>
            </div>
            <p className="text-4xl font-bold font-display tracking-widest text-foreground">
              {String(mins).padStart(2, "0")} : {String(secs).padStart(2, "0")}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                <span className={`text-sm md:text-base text-foreground/90 ${f.highlight ? "font-semibold" : ""}`}>
                  {f.text}
                </span>
              </div>
            ))}
          </div>

          {/* Market comparison */}
          <p className="text-center text-sm text-muted-foreground mb-2">
            Plataformas similares: a partir de R$200/mês
          </p>

          {/* Pricing */}
          <div className="text-center mb-6">
            <p className="text-muted-foreground line-through text-lg">De R$497,00</p>
            <p className="text-6xl md:text-7xl font-bold text-green-500 mt-1">
              R$92<span className="text-3xl align-super">,00</span>
            </p>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 border border-green-500/30 rounded-full px-4 py-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-foreground/80">Pagamento único, sem mensalidade.</span>
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Garantia incondicional de 7 dias</span>
            </div>
          </div>

          {/* Social proof */}
          <p className="text-center text-sm text-muted-foreground mb-5">
            Mais de 100 empresas já utilizam. Garanta seu acesso agora.
          </p>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="w-full glow-green bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6"
          >
            <a href="https://pay.chatbotwhatsapp.store?s=chatbot" target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Comprar Agora por R$92
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
