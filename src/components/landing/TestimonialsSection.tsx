import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "CEO",
    company: "AutoPeças Express",
    initials: "RM",
    text: "Cancelei minha assinatura de R$297/mês em outra plataforma. Com o Chatbot WhatsApp, paguei uma vez e tenho controle total. Economizei mais de R$3.000 no ano.",
  },
  {
    name: "Camila Ferreira",
    role: "Gerente de Atendimento",
    company: "Clínica Vida Plena",
    initials: "CF",
    text: "A IA do Gemini responde 80% das dúvidas sozinha. Nosso tempo de resposta caiu de 15 minutos para segundos. Os pacientes adoram.",
  },
  {
    name: "Lucas Oliveira",
    role: "Fundador",
    company: "Digital Commerce BR",
    initials: "LO",
    text: "Instalei como White Label para meus clientes e agora revendo como serviço próprio. Melhor investimento de R$97 que já fiz no meu negócio.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 relative">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Quem usa, <span className="gradient-text">recomenda</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:glow-primary-sm transition-all duration-300"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary/20 text-primary text-xs font-bold">{t.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </div>
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

export default TestimonialsSection;
