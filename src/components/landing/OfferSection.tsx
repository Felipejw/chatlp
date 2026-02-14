import { useState, useEffect } from "react";
import { Bot, CheckCircle, CheckSquare, Clock, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  "Gerencie +100 Números de WhatsApp",
  "Chatbot com I.A. Inclusa (Sem Custo Extra)",
  "Integração com Instagram e Facebook",
  "Disparo em Massa para sua lista de contatos",
  "Adicione +100 Atendentes e crie setores",
  "Agendamento de Mensagens",
  "Dashboard de Atendimento em tempo real",
  "API e Integrações (Typebot, Dialogflow, etc)",
  "Acesso Vitalício e Atualizações Gratuitas",
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
    <section className="py-20 relative noise-bg">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              A automação mais completa do WhatsApp
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            por um único pagamento
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 text-green-500">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Tudo que você precisa para automatizar seu atendimento</span>
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
              <span className="text-sm font-semibold text-green-500">Oferta disponível somente hoje!</span>
            </div>
            <p className="text-4xl font-bold font-display tracking-widest text-foreground">
              {String(mins).padStart(2, "0")} : {String(secs).padStart(2, "0")}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-sm md:text-base text-foreground/90">{f}</span>
              </div>
            ))}
          </div>

          {/* Urgency */}
          <p className="text-center text-sm text-yellow-400/80 font-medium mb-6">
            ⚠️ Esse preço pode mudar a qualquer momento. Garanta agora!
          </p>

          {/* Pricing */}
          <div className="text-center mb-6">
            <p className="text-muted-foreground line-through text-lg">De R$197,00</p>
            <p className="text-5xl font-bold text-green-500 mt-1">
              R$97<span className="text-2xl align-super">,00</span>
            </p>
          </div>

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-green-500/30 rounded-full px-4 py-1.5">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-foreground/80">Pagamento único, sem mensalidade.</span>
            </div>
          </div>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="w-full glow-green bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6"
          >
            <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Comprar Agora por R$97
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
