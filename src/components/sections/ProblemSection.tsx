import { AlertCircle, Clock, Brain, BookX } from "lucide-react";

const problems = [
  {
    icon: BookX,
    title: "Dificuldade na Leitura",
    description: "Não sabe por onde começar e não consegue entender com clareza o que está escrito.",
  },
  {
    icon: Brain,
    title: "Esquecimento Rápido",
    description: "Lê, mas esquece rapidamente o que foi estudado, perdendo o conhecimento adquirido.",
  },
  {
    icon: Clock,
    title: "Falta de Constância",
    description: "Começa motivado, mas não consegue manter o hábito de leitura diária.",
  },
  {
    icon: AlertCircle,
    title: "Estudos Desconexos",
    description: "Não consegue ver a conexão entre os livros e a história completa da Bíblia.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Você se identifica com algum{" "}
            <span className="text-gradient-gold">desses desafios?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A maioria dos cristãos enfrenta essas mesmas barreiras. Mas existe uma solução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(38_92%_50%/0.1)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <problem.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
