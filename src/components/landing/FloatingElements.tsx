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

    {/* Mobile fixed bottom bar with mini-nav */}
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-white/5 px-3 py-2">
      <div className="flex items-center gap-2">
        {/* Mini navigation */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <item.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-[10px] text-muted-foreground leading-none">{item.label}</span>
            </button>
          ))}
        </div>

        {/* CTA button */}
        <Button asChild size="sm" className="flex-1 glow-green bg-green-500 hover:bg-green-600 font-bold text-white text-xs h-9">
          <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
            Comprar R$97
          </a>
        </Button>
      </div>
    </div>
  </>
);

export default FloatingElements;
