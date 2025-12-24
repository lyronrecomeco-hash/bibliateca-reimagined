import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Sparkles } from "lucide-react";
import heroBible from "@/assets/hero-bible.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBible})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38_50%_20%/0.3)_0%,_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl pt-20">
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Mais de 10.000 alunos transformados</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-foreground">Domine a Bíblia</span>
            <br />
            <span className="text-gradient-gold">em 30 Dias</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-body">
            O método visual que já ajudou milhares de cristãos a entender, memorizar e aplicar 
            as Escrituras em suas vidas — mesmo que você nunca tenha conseguido manter o hábito de leitura.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="group">
              <BookOpen className="w-5 h-5 group-hover:animate-pulse" />
              Quero Começar Agora
            </Button>
            <Button variant="goldOutline" size="lg">
              Conhecer o Método
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Plataforma segura</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
