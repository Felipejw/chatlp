import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ClosingSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[180px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hoje <span className="gradient-text">R$297</span>. Amanhã pode não ser.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Sem mensalidade. Sem limites. Sem depender de terceiros.
        </p>
        <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 text-xl px-12 py-7 font-bold text-white">
          <a href="https://pay.chatbotwhatsapp.store?s=chatbot" target="_blank" rel="noopener noreferrer">
            Comprar Agora por R$297
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default ClosingSection;
