import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const GuaranteeSection = () => (
  <section className="py-20 relative">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="glass rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto gradient-border glow-primary-sm"
      >
        <div className="w-20 h-20 rounded-full bg-primary/15 mx-auto flex items-center justify-center mb-6">
          <ShieldCheck className="w-10 h-10 text-primary" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          7 Dias de Garantia <span className="gradient-text">Incondicional</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Se por qualquer motivo você não gostar do sistema, devolvemos 100% do seu dinheiro em até 7 dias. Sem burocracia, sem perguntas.
        </p>
        <Button asChild size="lg" className="glow-primary bg-primary hover:bg-primary/90 font-bold px-8">
          <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
            Comprar Agora por R$97
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
