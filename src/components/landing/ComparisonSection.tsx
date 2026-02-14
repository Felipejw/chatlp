import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const traditional = [
  "Mensalidade cara todo mês",
  "Limite de atendentes",
  "Limite de conexões",
  "Sem código fonte",
  "Dependência total da empresa",
];

const ours = [
  "Pagamento único de R$97",
  "Atendentes ilimitados",
  "Conexões ilimitadas",
  "Código fonte incluso",
  "White Label — controle total",
];

const ComparisonSection = () => (
  <section className="py-20 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Por que pagar mensalidade se você pode pagar{" "}
          <span className="gradient-text">uma vez</span> e ser dono?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Compare e veja por que centenas de empresas já migraram.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Traditional */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 border-destructive/20">
          <h3 className="font-display font-bold text-lg mb-6 text-destructive/80">❌ Plataformas Tradicionais</h3>
          <ul className="space-y-4">
            {traditional.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Ours */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 gradient-border glow-primary-sm">
          <h3 className="font-display font-bold text-lg mb-6 text-primary">✅ Chatbot WhatsApp</h3>
          <ul className="space-y-4">
            {ours.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" className="glow-primary bg-primary hover:bg-primary/90 font-bold px-8">
          <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
            Comprar Agora por R$97
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
