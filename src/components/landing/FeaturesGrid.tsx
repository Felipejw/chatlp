import {
  Users, MessageSquare, Send, Bot, Brain, Plug, FileCode, Tags,
  Building2, ArrowRightLeft, CalendarClock, BarChart3, LayoutDashboard, GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Category = "automacao" | "gestao" | "crescimento";

interface Feature {
  icon: React.ElementType;
  title: string;
  desc: string;
  category: Category;
  highlighted?: boolean;
}

const features: Feature[] = [
  // AUTOMAÇÃO
  { icon: Brain, title: "IA Gemini/OpenAI", desc: "Respostas automáticas inteligentes 24/7, mesmo quando sua equipe está offline.", category: "automacao", highlighted: true },
  { icon: Bot, title: "Chatbot Visual", desc: "Crie fluxos automatizados em minutos, sem precisar programar.", category: "automacao", highlighted: true },
  { icon: Send, title: "Disparo em Massa", desc: "Envie campanhas para sua base e gere novas oportunidades de venda.", category: "automacao", highlighted: true },
  { icon: CalendarClock, title: "Agendamentos", desc: "Agende atendimentos e follow-ups sem sair do sistema.", category: "automacao" },
  // GESTÃO
  { icon: MessageSquare, title: "CRM Integrado", desc: "Organize, acompanhe e feche mais negócios sem sair do WhatsApp.", category: "gestao" },
  { icon: Users, title: "Atendimento Multiusuário", desc: "Vários atendentes trabalhando ao mesmo tempo, sem perder conversas.", category: "gestao" },
  { icon: Building2, title: "Setores", desc: "Direcione conversas para o departamento certo automaticamente.", category: "gestao" },
  { icon: ArrowRightLeft, title: "Transferência", desc: "Transfira atendimentos entre agentes sem perder o histórico.", category: "gestao" },
  { icon: Tags, title: "Tags", desc: "Segmente e organize seus contatos para ações mais inteligentes.", category: "gestao" },
  // CRESCIMENTO
  { icon: LayoutDashboard, title: "Dashboard", desc: "Visão completa do seu atendimento e vendas em tempo real, em um único painel.", category: "crescimento" },
  { icon: BarChart3, title: "Relatórios", desc: "Acompanhe métricas de atendimento e tome decisões com dados.", category: "crescimento" },
  { icon: FileCode, title: "API Docs", desc: "Documentação completa para integrações personalizadas.", category: "crescimento" },
  { icon: Plug, title: "Integrações", desc: "Conecte com as ferramentas que você já usa no dia a dia.", category: "crescimento" },
  { icon: GraduationCap, title: "Tutoriais", desc: "Área de membros com vídeos e guias para dominar o sistema.", category: "crescimento" },
];

const categoryConfig: Record<Category, { label: string; color: string; iconColor: string; hoverClasses: string; glowClasses: string; dropShadow: string; lineGradient: string }> = {
  automacao: {
    label: "Automação",
    color: "text-green-400",
    iconColor: "text-green-400",
    hoverClasses: "hover:border-green-500/30 hover:shadow-[0_0_20px_hsl(142_71%_45%/0.2)]",
    glowClasses: "border-green-500/30 shadow-[0_0_20px_hsl(142_71%_45%/0.25)]",
    dropShadow: "drop-shadow-[0_0_6px_hsl(142_71%_45%/0.5)]",
    lineGradient: "from-green-500/30 to-transparent",
  },
  gestao: {
    label: "Gestão",
    color: "text-blue-400",
    iconColor: "text-blue-400",
    hoverClasses: "hover:border-blue-500/30 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.2)]",
    glowClasses: "border-blue-500/30 shadow-[0_0_20px_hsl(217_91%_60%/0.25)]",
    dropShadow: "drop-shadow-[0_0_6px_hsl(217_91%_60%/0.5)]",
    lineGradient: "from-blue-500/30 to-transparent",
  },
  crescimento: {
    label: "Crescimento",
    color: "text-purple-400",
    iconColor: "text-purple-400",
    hoverClasses: "hover:border-purple-500/30 hover:shadow-[0_0_20px_hsl(270_70%_60%/0.2)]",
    glowClasses: "border-purple-500/30 shadow-[0_0_20px_hsl(270_70%_60%/0.25)]",
    dropShadow: "drop-shadow-[0_0_6px_hsl(270_70%_60%/0.5)]",
    lineGradient: "from-purple-500/30 to-transparent",
  },
};

const categories: Category[] = ["automacao", "gestao", "crescimento"];

const CarouselDots = ({ count, active, dotColor }: { count: number; active: number; dotColor: string }) => (
  <div className="flex justify-center gap-1.5 mt-4">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          i === active ? `w-6 ${dotColor}` : "w-1.5 bg-white/20"
        }`}
      />
    ))}
  </div>
);

const CategoryCarousel = ({ items, config }: { items: Feature[]; config: typeof categoryConfig.automacao }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const dotColor = config.color.replace("text-", "bg-");

  return (
    <div>
      <div className="overflow-hidden -mx-4" ref={emblaRef}>
        <div className="flex">
          {items.map((f) => (
            <div key={f.title} className="flex-[0_0_85%] min-w-0 pl-4 first:ml-4">
              <div
                className={`glass rounded-xl transition-all duration-300 ${config.hoverClasses} ${
                  f.highlighted ? `p-6 ${config.glowClasses}` : "p-5"
                }`}
              >
                <f.icon
                  className={`${config.iconColor} ${config.dropShadow} mb-3 ${
                    f.highlighted ? "w-11 h-11" : "w-10 h-10"
                  }`}
                />
                <h3 className="font-display font-semibold text-base text-white mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CarouselDots count={items.length} active={selectedIndex} dotColor={dotColor} />
    </div>
  );
};

const FeaturesGrid = () => {
  const isMobile = useIsMobile();

  return (
    <section id="features" className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            A Central Completa de Atendimento e Vendas no{" "}
            <span className="gradient-text">WhatsApp</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">+14 funcionalidades para automatizar, organizar e escalar seu negócio.</p>
        </motion.div>

        <div className="space-y-14">
          {categories.map((cat) => {
            const config = categoryConfig[cat];
            const items = features.filter((f) => f.category === cat);
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-sm font-bold uppercase tracking-wider ${config.color} whitespace-nowrap`}>
                    {config.label}
                  </span>
                  <div className={`h-px flex-1 bg-gradient-to-r ${config.lineGradient}`} />
                </div>

                {isMobile ? (
                  <CategoryCarousel items={items} config={config} />
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((f, i) => (
                      <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`glass rounded-xl group transition-all duration-300 cursor-default ${config.hoverClasses} ${
                          f.highlighted ? `p-6 ${config.glowClasses}` : "p-5"
                        }`}
                      >
                        <f.icon
                          className={`${config.iconColor} ${config.dropShadow} mb-3 group-hover:scale-110 transition-transform ${
                            f.highlighted ? "w-11 h-11" : "w-10 h-10"
                          }`}
                        />
                        <h3 className="font-display font-semibold text-base text-white mb-1">{f.title}</h3>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed">{f.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 font-bold px-10 py-6 text-lg text-white">
            <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
              Comprar Agora por R$97
            </a>
          </Button>
          <p className="text-muted-foreground text-sm mt-3">Pagamento único • Acesso imediato • Sem mensalidade</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
