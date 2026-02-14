import { MessageCircle, LayoutDashboard, Monitor, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Recursos", target: "#features" },
  { icon: Monitor, label: "Demo", target: "#showcase" },
  { icon: HelpCircle, label: "FAQ", target: "#faq" },
];

const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
};

const FloatingElements = () => (
  <>
    {/* WhatsApp floating button */}
    <a
      href="https://wa.me/5511967593117"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>

    {/* Mobile fixed bottom bar - CTA only */}
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-white/5 px-4 py-3">
      <Button asChild size="lg" className="w-full glow-green bg-green-500 hover:bg-green-600 font-bold text-white h-11">
        <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
          Comprar Agora por R$97
        </a>
      </Button>
    </div>
  </>
);

export default FloatingElements;
