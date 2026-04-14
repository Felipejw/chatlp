import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "CEO",
    company: "AutoPeças Express",
    initials: "RM",
    text: "Eu pagava R$400 por mês em outra plataforma. Hoje paguei R$297 uma única vez, já veio instalado, e economizei mais de R$4.000 no ano. Tenho controle total do meu atendimento.",
    featured: true,
  },
  {
    name: "Camila Ferreira",
    role: "Gerente de Atendimento",
    company: "Clínica Vida Plena",
    initials: "CF",
    text: "A IA resolve cerca de 80% das dúvidas sozinha. Nosso tempo de resposta caiu de 15 minutos para poucos segundos. Os pacientes adoram o atendimento rápido.",
    featured: false,
  },
  {
    name: "Lucas Oliveira",
    role: "Fundador",
    company: "Digital Commerce BR",
    initials: "LO",
    text: "Instalei como White Label para meus clientes e já recuperei o investimento nas primeiras semanas. Melhor decisão que tomei pro meu negócio.",
    featured: false,
  },
];

const TestimonialCard = ({ t, featured, delay }: { t: typeof testimonials[0]; featured?: boolean; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={
      featured
        ? "glass-strong gradient-border glow-primary-sm rounded-2xl p-8 relative overflow-hidden"
        : "glass rounded-2xl p-6 hover:glow-primary-sm transition-all duration-300"
    }
  >
    {featured && (
      <Quote className="absolute top-4 right-6 w-16 h-16 text-primary/10" />
    )}
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className={`${featured ? "text-base" : "text-sm"} text-muted-foreground mb-6 leading-relaxed`}>
      "{t.text}"
    </p>
    <div className="flex items-center gap-3">
      <Avatar className={featured ? "w-14 h-14 ring-2 ring-primary/50" : "w-10 h-10"}>
        <AvatarFallback className="bg-primary/20 text-primary text-xs font-bold">{t.initials}</AvatarFallback>
      </Avatar>
      <div>
        <p className={`${featured ? "text-base" : "text-sm"} font-semibold`}>{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [activeSnap, setActiveSnap] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveSnap(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const featured = testimonials[0];
  const regular = testimonials.slice(1);

  return (
    <section id="testimonials" className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Quem usa, <span className="gradient-text">recomenda</span>
          </h2>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <TestimonialCard t={featured} featured delay={0} />
          <div className="grid grid-cols-2 gap-6 mt-6">
            {regular.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={(i + 1) * 0.1} />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={t.name} className="flex-[0_0_85%] min-w-0 pl-4 first:pl-0">
                  <TestimonialCard t={t} featured={t.featured} delay={0} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeSnap ? "bg-primary" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="glow-green bg-green-500 hover:bg-green-600 font-bold px-8 text-white">
            <a href="https://pay.chatbotwhatsapp.store?s=chatbot" target="_blank" rel="noopener noreferrer">
              Comprar Agora por R$297
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
