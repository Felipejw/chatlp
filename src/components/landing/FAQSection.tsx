import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const faqs = [
  { q: "É pagamento único mesmo?", a: "Sim! Você paga apenas R$97 uma única vez e tem acesso vitalício ao sistema completo, com código fonte e todas as atualizações." },
  { q: "Preciso pagar mensalidade?", a: "Não. Diferente de outras plataformas, o Chatbot WhatsApp não cobra mensalidade. O único custo é o pagamento único de R$97." },
  { q: "Funciona com quantos WhatsApps?", a: "Ilimitados! Você pode conectar quantos números de WhatsApp quiser, sem custo adicional." },
  { q: "Preciso saber programar?", a: "Não. O sistema possui interface visual intuitiva para criar chatbots e gerenciar atendimentos. Caso queira personalizar, o código fonte está incluso." },
  { q: "Vocês instalam para mim?", a: "Sim! Oferecemos instalação opcional por R$97. Ou você mesmo pode instalar seguindo nossos tutoriais completos na área de membros." },
  { q: "Recebo atualizações?", a: "Sim, todas as atualizações estão inclusas sem custo adicional." },
  { q: "A IA é gratuita?", a: "Sim! A integração com o Gemini do Google é totalmente gratuita. Opcionalmente, você pode integrar a OpenAI (ChatGPT) usando sua própria chave." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 relative">
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

export default FAQSection;
