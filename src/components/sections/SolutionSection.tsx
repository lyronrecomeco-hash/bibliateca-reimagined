import { Check, Map, Eye, Heart, Zap } from "lucide-react";
import productMockup from "@/assets/product-mockup.png";

const features = [
  {
    icon: Map,
    title: "Mapas Mentais Completos",
    description: "Panorama visual de todos os 66 livros da Bíblia",
  },
  {
    icon: Eye,
    title: "Memorização Visual",
    description: "Técnicas que fixam o conhecimento de forma duradoura",
  },
  {
    icon: Heart,
    title: "Devocional Diário",
    description: "Estrutura prática para manter a constância",
  },
  {
    icon: Zap,
    title: "Compreensão Rápida",
    description: "Entenda contextos e conexões em minutos",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_hsl(38_50%_15%/0.3)_0%,_transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative animate-float">
              <img
                src={productMockup}
                alt="Guia Sagrado - Mapas Mentais da Bíblia"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent rounded-3xl blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              A Solução
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Apresentamos o{" "}
              <span className="text-gradient-gold">Guia Sagrado</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Um método revolucionário de estudo bíblico através de mapas mentais e recursos visuais 
              que transformam a forma como você absorve, memoriza e aplica a Palavra de Deus.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold">130+</div>
                <div className="text-sm text-muted-foreground">Páginas de Conteúdo</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold">66</div>
                <div className="text-sm text-muted-foreground">Livros Mapeados</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gradient-gold">10k+</div>
                <div className="text-sm text-muted-foreground">Alunos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
