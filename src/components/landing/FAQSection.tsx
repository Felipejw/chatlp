import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  { q: "É pagamento único mesmo?", a: "Sim. Você paga apenas R$92 uma única vez e o sistema é seu, já instalado. Sem mensalidade, sem taxa recorrente e sem surpresas futuras." },
  { q: "Preciso pagar mensalidade?", a: "Não. Diferente de outras plataformas que cobram mensalmente, aqui você paga uma única vez e tem acesso vitalício." },
  { q: "Funciona com quantos WhatsApps?", a: "Você pode conectar múltiplos números e adicionar quantos atendentes precisar. Sem cobrança por usuário." },
  { q: "Preciso saber programar?", a: "Não. O sistema possui construtor visual drag-and-drop. Você monta fluxos sem escrever código." },
  { q: "Vocês instalam para mim?", a: "Sim! A instalação já está inclusa no valor. Entregamos o sistema totalmente configurado e funcionando no seu servidor." },
  { q: "Recebo atualizações?", a: "Sim. Você recebe atualizações e melhorias contínuas sem custo adicional." },
  { q: "A IA é gratuita?", a: "Sim. A integração com Gemini está inclusa sem custo extra. Caso queira, pode integrar a OpenAI opcionalmente." },
];

const FAQSection = () => (
  <section id="faq" className="py-12 relative">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Dúvidas <span className="gradient-text">Frequentes</span>
        </h2>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-3xl mx-auto glass rounded-2xl p-6 md:p-8"
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-white/5">
              <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          <span>Compra 100% segura</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Lock className="w-4 h-4 text-green-500" />
          <span>Pagamento único</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Zap className="w-4 h-4 text-green-500" />
          <span>Acesso imediato</span>
        </div>
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 font-bold px-8 text-white">
          <a href="https://pay.chatbotwhatsapp.store?s=chatbot" target="_blank" rel="noopener noreferrer">
            Comprar Agora por R$92
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default FAQSection;
