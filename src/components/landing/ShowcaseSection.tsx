import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
  { src: imgWhatsApp, title: "Atendimento WhatsApp", url: "atendimento", featured: true },
  { src: imgDisparo, title: "Disparo em Massa", url: "campanhas", featured: true },
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

const featured = screenshots.filter((s) => s.featured);
const regular = screenshots.filter((s) => !s.featured);

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
    {/* Title bar */}
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
    {/* Screenshot */}
    <div className="relative overflow-hidden">
      <img
        src={screenshot.src}
        alt={screenshot.title}
        className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
        loading="lazy"
      />
    </div>
    {/* Label */}
    <div className="px-4 py-3 bg-black/30 border-t border-white/5">
      <p className="text-sm font-medium text-foreground/90 text-center">{screenshot.title}</p>
    </div>
  </div>
);

const ShowcaseSection = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    active: isMobile,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="showcase" className="py-20 relative">
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

        {/* Desktop */}
        {!isMobile && (
          <>
            {/* Featured - 2 large */}
            <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
              {featured.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <BrowserFrame
                    screenshot={s}
                    onClick={() => setLightboxIndex(screenshots.indexOf(s))}
                  />
                </motion.div>
              ))}
            </div>
            {/* Regular - grid of remaining */}
            <div className="grid grid-cols-4 gap-5 max-w-5xl mx-auto mt-5">
              {regular.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <BrowserFrame
                    screenshot={s}
                    onClick={() => setLightboxIndex(screenshots.indexOf(s))}
                  />
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Mobile carousel */}
        {isMobile && (
          <div>
            <div className="overflow-hidden -mx-4" ref={emblaRef}>
              <div className="flex">
                {screenshots.map((s, i) => (
                  <div key={s.title} className="flex-[0_0_90%] min-w-0 pl-4 first:ml-4">
                    <BrowserFrame
                      screenshot={s}
                      onClick={() => setLightboxIndex(i)}
                    />
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
            <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
              Comprar Agora por R$97
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
