import { Brain, Blocks, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const highlights = [
  { icon: Blocks, title: "Construtor Visual", desc: "Arraste e solte blocos para criar fluxos completos sem código." },
  { icon: Brain, title: "IA Gemini Gratuito", desc: "Use inteligência artificial sem custo adicional com o Gemini." },
  { icon: Sparkles, title: "OpenAI Opcional", desc: "Integre o ChatGPT para respostas ainda mais avançadas." },
  { icon: Zap, title: "Respostas Automáticas", desc: "Atendimento inteligente 24/7 sem intervenção humana." },
];

const ChatbotAISection = () => (
  <section id="ai" className="py-20 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[140px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Mockup */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="glass rounded-2xl p-6 glow-primary-sm">
            <div className="space-y-3">
              {/* Fake chatbot builder UI */}
              <div className="flex gap-3">
                <div className="w-32 h-10 rounded-lg bg-primary/20 animate-pulse" />
                <div className="w-20 h-10 rounded-lg bg-accent/20 animate-pulse" style={{ animationDelay: "0.3s" }} />
              </div>
              <div className="h-40 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 flex items-center justify-center">
                <div className="space-y-2 w-full px-4">
                  <div className="flex gap-2">
                    <div className="h-8 w-24 rounded bg-primary/15" />
                    <div className="h-8 flex-1 rounded bg-white/5" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 rounded bg-white/5" />
                    <div className="h-8 w-20 rounded bg-accent/15" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-16 rounded bg-primary/15" />
                    <div className="h-8 flex-1 rounded bg-white/5" />
                    <div className="h-8 w-16 rounded bg-accent/15" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-24 h-8 rounded bg-primary/30 animate-pulse" style={{ animationDelay: "0.6s" }} />
                <div className="w-16 h-8 rounded bg-white/5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Chatbot com <span className="gradient-text">Inteligência Artificial</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Construa fluxos inteligentes visualmente e deixe a IA responder seus clientes 24 horas por dia.
          </p>

          <div className="space-y-5">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-0.5">{h.title}</h3>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button asChild size="lg" className="glow-primary bg-primary hover:bg-primary/90 font-bold px-8">
              <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
                Comprar Agora por R$97
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ChatbotAISection;
