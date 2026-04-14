import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imgWhatsApp from "@/assets/screenshots/WhatsApp.png";
import imgConexoes from "@/assets/screenshots/Conexoes.png";
import imgContatos from "@/assets/screenshots/Contatos.png";
import imgDisparo from "@/assets/screenshots/Disparo_em_Massa.png";
import imgAgendamento from "@/assets/screenshots/Agendamento.png";
import imgRespostas from "@/assets/screenshots/Respostas_Rapidas.png";
import imgWhiteLabel from "@/assets/screenshots/White_Label.png";
import imgIntegracoes from "@/assets/screenshots/Integracoes.png";
import imgSetores from "@/assets/screenshots/Setores.png";
import imgTags from "@/assets/screenshots/Tags.png";
import imgChatbot from "@/assets/screenshots/Chatbot.png";
import imgDashboard from "@/assets/screenshots/Dashboard.png";

const screenshots = [
  { src: imgWhatsApp, title: "Atendimento WhatsApp", url: "atendimento" },
  { src: imgDisparo, title: "Disparo em Massa", url: "campanhas" },
  { src: imgDashboard, title: "Dashboard", url: "dashboard" },
  { src: imgChatbot, title: "Chatbot Builder", url: "chatbot" },
  { src: imgContatos, title: "Gestão de Contatos", url: "contatos" },
  { src: imgConexoes, title: "Conexões WhatsApp", url: "conexoes" },
  { src: imgAgendamento, title: "Agendamentos", url: "agendamentos" },
  { src: imgRespostas, title: "Respostas Rápidas", url: "respostas-rapidas" },
  { src: imgWhiteLabel, title: "White Label", url: "personalizar" },
  { src: imgIntegracoes, title: "Integrações", url: "integracoes" },
  { src: imgSetores, title: "Setores", url: "setores" },
  { src: imgTags, title: "Tags", url: "tags" },
];

const BrowserFrame = ({
  screenshot,
  onClick,
  className = "",
}: {
  screenshot: (typeof screenshots)[0];
  onClick: () => void;
  className?: string;
}) => (
  <div
    className={`showcase-card group relative rounded-xl border border-white/10 bg-black/40 browser-shadow overflow-hidden cursor-pointer ${className}`}
    onClick={onClick}
  >
    <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/5">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      <div className="flex-1 mx-3">
        <div className="bg-white/5 rounded-md px-3 py-1 text-[10px] text-white/30 truncate font-mono">
          app.chatbotwhatsapp.store/{screenshot.url}
        </div>
      </div>
    </div>
    <div className="relative overflow-hidden">
      <img
        src={screenshot.src}
        alt={screenshot.title}
        className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="px-4 py-3 bg-black/30 border-t border-white/5">
      <p className="text-sm font-medium text-foreground/90 text-center">{screenshot.title}</p>
    </div>
  </div>
);

const ShowcaseSection = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Mobile carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    active: isMobile,
  });
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

  const prev = () => setActiveIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  return (
    <section id="showcase" className="py-12 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Veja o Sistema <span className="gradient-text">Funcionando na Prática</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interface profissional, pronta para empresas que querem crescer.
          </p>
        </motion.div>

        {/* Desktop - Premium Carousel */}
        {!isMobile && (
          <div className="max-w-4xl mx-auto">
            {/* Main print + arrows */}
            <div className="relative">
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-foreground hover:glow-primary-sm transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                >
                  <BrowserFrame
                    screenshot={screenshots[activeIndex]}
                    onClick={() => setLightboxIndex(activeIndex)}
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-foreground hover:glow-primary-sm transition-all"
                aria-label="Próximo"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 justify-center mt-6 overflow-x-auto scrollbar-hide py-2">
              {screenshots.map((s, i) => (
                <button
                  key={s.url}
                  onClick={() => setActiveIndex(i)}
                  className={`flex-shrink-0 w-[120px] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    i === activeIndex
                      ? "border-primary opacity-100 scale-105"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={s.src} alt={s.title} className="w-full h-auto block" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile carousel */}
        {isMobile && (
          <div>
            <div className="overflow-hidden -mx-4" ref={emblaRef}>
              <div className="flex">
                {screenshots.map((s, i) => (
                  <div key={s.title} className="flex-[0_0_90%] min-w-0 pl-4 first:ml-4">
                    <BrowserFrame screenshot={s} onClick={() => setLightboxIndex(i)} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-1.5 mt-4">
              {screenshots.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="glow-green bg-green-500 hover:bg-green-600 font-bold px-8 text-white"
          >
            <a href="https://pay.chatbotwhatsapp.store?s=chatbot" target="_blank" rel="noopener noreferrer">
              Comprar Agora por R$297
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={() => setLightboxIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden">
          <VisuallyHidden>
            <DialogTitle>
              {lightboxIndex !== null ? screenshots[lightboxIndex].title : "Screenshot"}
            </DialogTitle>
          </VisuallyHidden>
          {lightboxIndex !== null && (
            <img
              src={screenshots[lightboxIndex].src}
              alt={screenshots[lightboxIndex].title}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ShowcaseSection;
