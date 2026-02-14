import { CreditCard, Users, Palette, FileCode, Brain, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const diferenciais = [
  { icon: CreditCard, title: "Pagamento Único", desc: "Pague apenas R$97 uma vez e tenha acesso vitalício ao sistema completo." },
  { icon: Users, title: "Atendentes Ilimitados", desc: "Adicione quantos atendentes precisar, sem custo adicional por usuário." },
  { icon: Palette, title: "White Label", desc: "Personalize com sua marca e revenda como serviço próprio." },
  { icon: FileCode, title: "Código Fonte Incluso", desc: "Controle total para customizar e hospedar onde quiser." },
  { icon: Brain, title: "IA Integrada", desc: "Gemini gratuito + OpenAI opcional para respostas inteligentes 24/7." },
  { icon: Ban, title: "Sem Mensalidade", desc: "Esqueça cobranças recorrentes. Sem surpresas na fatura." },
];

const ComparisonSection = () => (
  <section className="py-20 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Por que escolher o{" "}
          <span className="gradient-text">Chatbot WhatsApp</span>?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Diferenciais que fazem centenas de empresas escolherem nosso sistema.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {diferenciais.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 group hover:glow-green-sm transition-all duration-300 hover:border-green-500/30 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <d.icon className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-display font-semibold text-base mb-2">{d.title}</h3>
            <p className="text-sm text-muted-foreground">{d.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 font-bold px-8 text-white">
          <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
            Comprar Agora por R$97
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
