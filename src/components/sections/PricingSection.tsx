import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Gift, Shield } from "lucide-react";

const basicFeatures = [
  "Mapa Didático da Bíblia (130+ páginas)",
  "Panorama dos 66 Livros",
  "Mapas Mentais Ilustrados",
  "Cronologia Bíblica Completa",
  "5 Bônus Exclusivos",
  "Acesso Vitalício",
  "Atualizações Gratuitas",
];

const completeFeatures = [
  "Tudo do Plano Básico",
  "Coleção Completa (300+ mapas)",
  "Estudos Aprofundados",
  "Guias de Memorização",
  "15 Bônus Premium",
  "Grupo VIP no Telegram",
  "Suporte Prioritário",
  "Certificado de Conclusão",
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,_hsl(38_50%_15%/0.2)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            Oferta Especial
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Escolha seu{" "}
            <span className="text-gradient-gold">plano de transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Investimento único com acesso vitalício. Sem mensalidades, sem taxas escondidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="relative p-8 rounded-3xl bg-card border border-border hover:border-gold/30 transition-all duration-300">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Gift className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Básico</h3>
                  <p className="text-muted-foreground text-sm">Ideal para começar</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-muted-foreground text-lg line-through">R$ 97</span>
                <span className="text-4xl font-display font-bold text-foreground">R$ 37</span>
                <span className="text-muted-foreground text-sm">à vista</span>
              </div>
              <p className="text-muted-foreground text-sm">ou 4x de R$ 10,28</p>
            </div>

            <ul className="space-y-3 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="goldOutline" size="lg" className="w-full">
              Começar Agora
            </Button>
          </div>

          {/* Complete Plan */}
          <div className="relative p-8 rounded-3xl bg-card border-2 border-gold/50 hover:border-gold transition-all duration-300 glow-gold">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold to-gold-light text-primary-foreground text-sm font-bold shadow-lg">
                <Crown className="w-4 h-4" />
                Mais Popular
              </div>
            </div>

            <div className="mb-8 pt-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Completo</h3>
                  <p className="text-gold text-sm font-medium">Transformação total</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-muted-foreground text-lg line-through">R$ 197</span>
                <span className="text-4xl font-display font-bold text-gradient-gold">R$ 97</span>
                <span className="text-muted-foreground text-sm">à vista</span>
              </div>
              <p className="text-muted-foreground text-sm">ou 6x de R$ 18,54</p>
            </div>

            <ul className="space-y-3 mb-8">
              {completeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="w-full">
              Quero o Completo
            </Button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card border border-border">
            <Shield className="w-12 h-12 text-gold" />
            <div className="text-left">
              <div className="font-display text-lg font-bold text-foreground">Garantia de 7 Dias</div>
              <p className="text-muted-foreground text-sm">
                Se não ficar satisfeito, devolvemos 100% do seu investimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
