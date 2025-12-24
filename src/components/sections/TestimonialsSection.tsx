import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Professora de Escola Dominical",
    content: "Finalmente consegui entender a conexão entre os livros da Bíblia! O método visual é incrível e transformou minha forma de ensinar.",
    rating: 5,
  },
  {
    name: "João Pedro Silva",
    role: "Pastor",
    content: "Uso o Guia Sagrado em todas as minhas preparações de sermão. A clareza dos mapas mentais é extraordinária.",
    rating: 5,
  },
  {
    name: "Ana Carolina",
    role: "Mãe de 3 filhos",
    content: "Meus filhos agora adoram estudar a Bíblia! O material visual fez toda a diferença na educação cristã deles.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Líder de Célula",
    content: "Em 30 dias, consegui memorizar mais do que em anos de estudo. Método revolucionário!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Estudante de Teologia",
    content: "O panorama completo dos 66 livros me ajudou muito na faculdade. Recomendo para todos os estudantes.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Empresário",
    content: "Mesmo com pouco tempo, consigo manter meu devocional diário. O método é prático e eficiente.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-gold/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-gold/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Histórias de{" "}
            <span className="text-gradient-gold">transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos alunos estão dizendo sobre sua experiência com o Guia Sagrado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
