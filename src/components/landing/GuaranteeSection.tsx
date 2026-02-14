import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const GuaranteeSection = () => (
  <section className="py-12 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 md:p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8"
      >
        <div className="shrink-0 w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center">
          <ShieldCheck className="w-10 h-10 text-green-500" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Sua Compra é 100% Segura!
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            O código de defesa do consumidor (Art. 49) garante{" "}
            <span className="text-green-500 font-bold">7 dias de garantia incondicional</span>!
            Se não gostar, devolvemos seu dinheiro sem perguntas.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
