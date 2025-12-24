import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-gradient-gold">Guia Sagrado</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Contato</a>
            <a href="#" className="hover:text-gold transition-colors">Suporte</a>
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <span>para a glória de Deus</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>© 2024 Guia Sagrado. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este produto é comercializado com apoio de plataformas de pagamento seguras.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
