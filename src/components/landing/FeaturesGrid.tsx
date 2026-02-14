import {
  Users, MessageSquare, Send, Bot, Brain, Plug, FileCode, Tags,
  Building2, ArrowRightLeft, CalendarClock, BarChart3, LayoutDashboard, GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  { icon: Users, title: "Atendimento Multiusuário", desc: "Vários atendentes simultâneos" },
  { icon: MessageSquare, title: "CRM Integrado", desc: "Gerencie leads e contatos" },
  { icon: Send, title: "Disparo em Massa", desc: "Campanhas automatizadas" },
  { icon: Bot, title: "Chatbot Visual", desc: "Construtor drag-and-drop" },
  { icon: Brain, title: "IA Gemini/OpenAI", desc: "Respostas inteligentes" },
  { icon: Plug, title: "Integrações", desc: "Conecte suas ferramentas" },
  { icon: FileCode, title: "API Docs", desc: "Documentação completa" },
  { icon: Tags, title: "Tags", desc: "Organize seus contatos" },
  { icon: Building2, title: "Setores", desc: "Departamentos organizados" },
  { icon: ArrowRightLeft, title: "Transferência", desc: "Mude entre atendentes" },
  { icon: CalendarClock, title: "Agendamentos", desc: "Agende atendimentos" },
  { icon: BarChart3, title: "Relatórios", desc: "Métricas detalhadas" },
  { icon: LayoutDashboard, title: "Dashboard", desc: "Visão completa em tempo real" },
  { icon: GraduationCap, title: "Tutoriais", desc: "Área de membros completa" },
];

const FeaturesGrid = () => (
  <section id="features" className="py-20 relative">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Tudo que você precisa,{" "}
          <span className="gradient-text">em um só lugar</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">+14 funcionalidades pensadas para escalar seu atendimento.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
            className="glass rounded-xl p-5 group hover:glow-primary-sm transition-all duration-300 hover:border-primary/30 cursor-default"
          >
            <f.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-semibold text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
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

export default FeaturesGrid;
