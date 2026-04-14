import { CreditCard, Users, Palette, FileCode, Brain, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const diferenciais = [
  { icon: CreditCard, title: "Pague Uma Vez. Use Para Sempre.", desc: "Enquanto outras plataformas cobram R$200 ou mais todos os meses, você investe R$297 uma única vez e recebe o sistema já instalado.", featured: true },
  { icon: Users, title: "Escale Sem Pagar Mais", desc: "Adicione 10, 50 ou 100 atendentes. Seus concorrentes pagam por cada usuário.", featured: false },
  { icon: Palette, title: "Sua Marca, Seu Negócio", desc: "Remova nossa marca, use a sua e revenda como produto próprio. Crie uma nova fonte de receita.", featured: false },
  { icon: FileCode, title: "Controle Total na Sua Mão", desc: "Hospede onde quiser, customize como quiser. Sem depender de ninguém.", featured: false },
  { icon: Brain, title: "IA Que Trabalha Por Você", desc: "Gemini gratuito ou OpenAI. Respostas inteligentes 24/7, sem você precisar intervir.", featured: false },
  { icon: HeadphonesIcon, title: "Evolução Contínua", desc: "Receba melhorias e suporte da comunidade. O sistema cresce junto com seu negócio.", featured: false },
];

const ComparisonSection = () => (
  <section className="py-12 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Por que escolher o{" "}
          <span className="gradient-text">Chatbot WhatsApp</span>?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Diferenciais que fazem centenas de empresas escolherem nosso sistema.</p>
        <p className="text-white/90 font-semibold text-lg max-w-3xl mx-auto mt-4">
          Enquanto outras plataformas cobram mensalidades eternas, você <span className="text-green-400">paga uma vez</span> e tem controle total.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mt-16">
        {diferenciais.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`glass rounded-2xl group transition-all duration-300 text-center hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_0_25px_hsl(142_71%_45%/0.3)] ${
              d.featured
                ? "sm:col-span-2 lg:col-span-2 p-10 border-green-500/40 bg-green-500/10 glow-green-sm"
                : "p-6"
            }`}
          >
            <div
              className={`rounded-xl bg-green-500/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400/25 transition-all duration-300 ${
                d.featured ? "w-[72px] h-[72px]" : "w-12 h-12"
              }`}
            >
              <d.icon className={`text-green-400 drop-shadow-[0_0_6px_hsl(142_71%_45%/0.5)] ${d.featured ? "w-9 h-9" : "w-6 h-6"}`} />
            </div>
            <h3 className={`font-display font-bold text-white mb-2 ${d.featured ? "text-2xl" : "text-base"}`}>{d.title}</h3>
            <p className={`text-muted-foreground ${d.featured ? "text-base max-w-lg mx-auto" : "text-sm"}`}>{d.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 font-bold px-10 py-6 text-lg text-white">
          <a href="https://pay.chatbotwhatsapp.store?s=chatbot" target="_blank" rel="noopener noreferrer">
            Comprar Agora por R$297
          </a>
        </Button>
        <p className="text-muted-foreground text-sm mt-3">Pagamento único • Acesso imediato • Sem mensalidade</p>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
