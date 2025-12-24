import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(38_50%_15%/0.3)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Sua jornada de transformação{" "}
            <span className="text-gradient-gold">começa agora</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Não deixe para depois. Milhares de cristãos já transformaram sua relação com a Palavra de Deus. 
            Você é o próximo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="hero" size="xl" className="group">
              <BookOpen className="w-5 h-5" />
              Quero Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-muted-foreground text-sm">
            ✓ Acesso imediato &nbsp;&nbsp; ✓ Garantia de 7 dias &nbsp;&nbsp; ✓ Suporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
