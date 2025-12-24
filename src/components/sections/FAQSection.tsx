import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O material é físico ou digital?",
    answer: "O Guia Sagrado é 100% digital, em formato PDF de alta qualidade. Você recebe acesso imediato após a confirmação do pagamento e pode acessar de qualquer dispositivo - celular, tablet ou computador.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "Seu acesso é vitalício! Uma vez que você adquire o material, ele é seu para sempre. Além disso, todas as atualizações futuras serão disponibilizadas gratuitamente.",
  },
  {
    question: "Funciona para quem nunca estudou a Bíblia?",
    answer: "Sim! Na verdade, é especialmente recomendado para iniciantes. O método visual foi desenvolvido para tornar o estudo bíblico acessível e fácil de compreender, mesmo para quem está começando agora.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o material, basta solicitar o reembolso e devolvemos 100% do seu investimento, sem perguntas.",
  },
  {
    question: "Posso imprimir o material?",
    answer: "Com certeza! O material foi otimizado tanto para visualização digital quanto para impressão. Muitos alunos preferem imprimir os mapas mentais para ter uma experiência de estudo mais tátil.",
  },
  {
    question: "Como recebo o acesso após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um email com as instruções de acesso. O processo é automático e você pode começar a estudar em questão de minutos.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ainda tem{" "}
            <span className="text-gradient-gold">alguma dúvida?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Respondemos as perguntas mais comuns sobre o Guia Sagrado.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-gold/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-gold transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
