import { Brain, Blocks, Sparkles, Zap, Play, MessageCircle, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { icon: Blocks, title: "Construtor Visual", desc: "Monte fluxos completos arrastando blocos — sem escrever uma linha de código." },
  { icon: Brain, title: "IA Gemini Gratuito", desc: "Inteligência artificial inclusa sem custo extra. Seu bot responde sozinho." },
  { icon: Sparkles, title: "OpenAI Opcional", desc: "Ative o ChatGPT para respostas ainda mais precisas e naturais." },
  { icon: Zap, title: "Respostas Automáticas", desc: "Seu sistema trabalha sozinho 24/7, sem depender de ninguém." },
];

const TypingDots = () => (
  <div className="flex gap-1 items-center px-3 py-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

const MockupBuilder = ({ isInView }: { isInView: boolean }) => (
  <div className="glass rounded-2xl overflow-hidden animate-glow-pulse">
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
      <span className="text-xs font-medium text-foreground/80">Bot Ativo</span>
      <span className="text-[10px] text-green-400/70 ml-auto">● online</span>
    </div>

    {/* Builder nodes */}
    <div className="px-4 py-5 border-b border-white/10">
      <div className="flex items-center justify-between gap-2">
        {[
          { icon: Play, label: "Início", delay: 0 },
          { icon: MessageCircle, label: "Pergunta", delay: 0.2 },
          { icon: Bot, label: "Resposta IA", delay: 0.4 },
        ].map((node, i) => (
          <div key={node.label} className="flex items-center gap-2 flex-1">
            <motion.div
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 bg-white/5 min-w-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: node.delay, duration: 0.4 }}
            >
              <node.icon className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-[11px] text-foreground/70 truncate">{node.label}</span>
            </motion.div>
            {i < 2 && (
              <svg width="24" height="12" className="shrink-0" viewBox="0 0 24 12">
                <path
                  d="M0 6 L20 6"
                  fill="none"
                  stroke="hsl(250 80% 60% / 0.5)"
                  strokeWidth="1.5"
                  className="animate-flow-line"
                />
                <path d="M17 3 L21 6 L17 9" fill="none" stroke="hsl(250 80% 60% / 0.5)" strokeWidth="1.5" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Chat simulation */}
    <div className="px-4 py-4 space-y-3">
      {/* Client message */}
      <motion.div
        className="flex justify-start"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="bg-secondary rounded-2xl rounded-bl-md px-3.5 py-2 max-w-[70%]">
          <p className="text-xs text-foreground/90">Qual o preço?</p>
        </div>
      </motion.div>

      {/* Typing indicator */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 1.2, times: [0, 0.1, 0.7, 1] }}
      >
        <div className="bg-primary/20 rounded-2xl rounded-br-md">
          <TypingDots />
        </div>
      </motion.div>

      {/* AI response */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ delay: 2.4, duration: 0.4 }}
      >
        <div className="bg-primary/20 rounded-2xl rounded-br-md px-3.5 py-2 max-w-[80%]">
          <p className="text-xs text-foreground/90">
            Posso te ajudar com isso! Você quer um orçamento ou falar com um atendente?
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

const ChatbotAISection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="ai" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center" ref={ref}>
          {/* Mockup */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <MockupBuilder isInView={isInView} />
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {/* Emotional badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary/80 bg-primary/10 rounded-full px-3 py-1">
                <Sparkles className="w-3.5 h-3.5" />
                O Futuro do Atendimento Já Está Aqui
              </span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Chatbot com <span className="gradient-text">Inteligência Artificial</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Automatize seu atendimento com fluxos visuais e deixe a Inteligência Artificial responder seus clientes 24/7 — mesmo quando sua equipe estiver offline.
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
              <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 font-bold px-8 text-white">
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
};

export default ChatbotAISection;
