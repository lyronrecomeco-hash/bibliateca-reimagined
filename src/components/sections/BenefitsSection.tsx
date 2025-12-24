import { Users, GraduationCap, Home, Church } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Para Iniciantes",
    description: "Ideal para quem está começando a jornada bíblica e quer uma base sólida de conhecimento.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Para Estudantes",
    description: "Perfeito para quem quer aprofundar seus estudos com metodologia visual e prática.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Home,
    title: "Para Famílias",
    description: "Recurso valioso para pais que desejam ensinar os filhos sobre a Palavra de Deus.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Church,
    title: "Para Líderes",
    description: "Ferramenta essencial para pastores e líderes que ensinam e discipulam outros.",
    color: "from-orange-400 to-gold",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            Para Quem é o Guia Sagrado?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Transformação para{" "}
            <span className="text-gradient-gold">todos os perfis</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Não importa em qual etapa da sua jornada espiritual você está, o Guia Sagrado foi 
            desenvolvido para te levar ao próximo nível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/50 transition-all duration-500"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-gold transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
