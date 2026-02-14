import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

const screenshots = [
  { title: "Dashboard Principal", gradient: "from-primary/20 to-accent/10" },
  { title: "Chatbot Builder", gradient: "from-accent/20 to-primary/10" },
  { title: "Atendimento em Tempo Real", gradient: "from-primary/15 to-purple-500/10" },
  { title: "Relatórios e Métricas", gradient: "from-blue-500/15 to-primary/10" },
];

const ShowcaseSection = () => (
  <section className="py-20 relative">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Veja o Sistema <span className="gradient-text">por Dentro</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Interface moderna, intuitiva e profissional.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {screenshots.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-4 group hover:glow-primary-sm transition-all duration-300"
          >
            <div className={`aspect-video rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300`}>
              <Monitor className="w-12 h-12 text-muted-foreground/30" />
            </div>
            <p className="text-sm font-medium mt-3 text-center">{s.title}</p>
          </motion.div>
        ))}
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

export default ShowcaseSection;
