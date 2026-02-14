import { Brain, Blocks, Sparkles, Zap, Play, MessageCircle, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const highlights = [
  { icon: Blocks, title: "Construtor Visual", desc: "Monte fluxos completos arrastando blocos — sem escrever uma linha de código." },
  { icon: Brain, title: "IA Gemini Gratuito", desc: "Inteligência artificial inclusa sem custo extra. Seu bot responde sozinho." },
  { icon: Sparkles, title: "OpenAI Opcional", desc: "Ative o ChatGPT para respostas ainda mais precisas e naturais." },
  { icon: Zap, title: "Respostas Automáticas", desc: "Seu sistema trabalha sozinho 24/7, sem depender de ninguém." },
];

type ChatMessage = {
  role: "bot" | "client";
  content: string;
  delayAfterPrev: number;
};

const chatScript: ChatMessage[] = [
  { role: "bot", content: "Olá! Bem-vindo ao nosso atendimento. Como posso ajudar? 😊", delayAfterPrev: 1000 },
  { role: "client", content: "Qual o preço do plano?", delayAfterPrev: 2000 },
  { role: "bot", content: "O acesso completo custa R$97 — pagamento único, sem mensalidade!", delayAfterPrev: 2500 },
  { role: "client", content: "Tem suporte incluso?", delayAfterPrev: 2000 },
  { role: "bot", content: "Sim! Suporte por WhatsApp e atualizações gratuitas por 1 ano.", delayAfterPrev: 2500 },
  { role: "client", content: "Quero comprar!", delayAfterPrev: 1500 },
  { role: "bot", content: "Ótimo! Vou te enviar o link de pagamento agora mesmo. 🚀", delayAfterPrev: 2500 },
];

const TYPING_DURATION = 1200;
const RESTART_DELAY = 3000;

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

const MockupBuilder = ({ isInView }: { isInView: boolean }) => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const startSequence = useCallback(() => {
    clearAllTimeouts();
    setVisibleMessages([]);
    setShowTyping(false);
    setIsFadingOut(false);

    let accumulated = 0;

    chatScript.forEach((msg, index) => {
      accumulated += msg.delayAfterPrev;

      if (msg.role === "bot") {
        // Show typing dots first
        const typingTimeout = setTimeout(() => {
          setShowTyping(true);
        }, accumulated);
        timeoutsRef.current.push(typingTimeout);

        // Then show message and hide typing
        const msgTimeout = setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, index]);
        }, accumulated + TYPING_DURATION);
        timeoutsRef.current.push(msgTimeout);

        accumulated += TYPING_DURATION;
      } else {
        const msgTimeout = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, index]);
        }, accumulated);
        timeoutsRef.current.push(msgTimeout);
      }
    });

    // Fade out and restart
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, accumulated + RESTART_DELAY);
    timeoutsRef.current.push(fadeTimeout);

    const restartTimeout = setTimeout(() => {
      startSequence();
    }, accumulated + RESTART_DELAY + 800);
    timeoutsRef.current.push(restartTimeout);
  }, [clearAllTimeouts]);

  useEffect(() => {
    if (isInView) {
      startSequence();
    } else {
      clearAllTimeouts();
      setVisibleMessages([]);
      setShowTyping(false);
      setIsFadingOut(false);
    }
    return clearAllTimeouts;
  }, [isInView, startSequence, clearAllTimeouts]);

  useEffect(() => {
    const container = chatEndRef.current?.parentElement;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [visibleMessages, showTyping]);

  return (
    <div className="relative mx-auto w-[280px] h-[560px] bg-black/80 rounded-[2.5rem] p-3 border-[3px] border-white/15 shadow-2xl animate-glow-pulse flex flex-col">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-1.5 pb-2 text-[10px] text-white/60">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1.5">
          <span>●●●●</span>
          <span>WiFi</span>
          <span>🔋</span>
        </div>
      </div>

      <motion.div
        className="glass rounded-xl overflow-hidden flex-1 flex flex-col min-h-0"
        animate={{ opacity: isFadingOut ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
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
                  <path d="M0 6 L20 6" fill="none" stroke="hsl(250 80% 60% / 0.5)" strokeWidth="1.5" className="animate-flow-line" />
                  <path d="M17 3 L21 6 L17 9" fill="none" stroke="hsl(250 80% 60% / 0.5)" strokeWidth="1.5" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat simulation */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-4 space-y-3">
          <AnimatePresence mode="popLayout">
            {visibleMessages.map((msgIndex) => {
              const msg = chatScript[msgIndex];
              const isClient = msg.role === "client";
              return (
                <motion.div
                  key={msgIndex}
                  className={`flex ${isClient ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: isClient ? -20 : 20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div
                    className={`rounded-2xl px-3.5 py-2 max-w-[80%] ${
                      isClient
                        ? "bg-secondary rounded-bl-md"
                        : "bg-primary/20 rounded-br-md"
                    }`}
                  >
                    <p className="text-xs text-foreground/90">{msg.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {showTyping && (
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-primary/20 rounded-2xl rounded-br-md">
                <TypingDots />
              </div>
            </motion.div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>
      </motion.div>

      {/* Home indicator */}
      <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mb-2 mt-3" />
    </div>
  );
};

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
