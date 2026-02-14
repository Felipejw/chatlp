import { MessageSquare, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/5 py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold">
          <MessageSquare className="w-5 h-5 text-primary" />
          <span className="gradient-text">Chatbot WhatsApp</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/chatbotwhats.store/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/5511967593117" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <MessageSquare className="w-5 h-5" />
          </a>
          <a href="https://chatbotwhatsapp.store/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            chatbotwhatsapp.store
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © 2026 Chatbot WhatsApp. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
