import { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "IA", href: "#ai" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <MessageSquare className="w-6 h-6 text-primary" />
          <span className="gradient-text">Chatbot WhatsApp</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="glow-primary-sm bg-primary hover:bg-primary/90 font-semibold">
            <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
              Comprar Agora por R$97
            </a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full glow-primary-sm bg-primary font-semibold">
            <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer">
              Comprar Agora por R$97
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
