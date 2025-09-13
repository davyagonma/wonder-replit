import { Languages, Globe, LaptopIcon, Medal, GraduationCap } from "lucide-react";

const KeyAdvantages = () => {
  const advantages = [
    {
      icon: Languages,
      title: "L'anglais",
      description: "Ouverture internationale"
    },
    {
      icon: Globe,
      title: "L'espagnol",
      description: "Diversité linguistique"
    },
    {
      icon: LaptopIcon,
      title: "L'informatique",
      description: "Compétences numériques"
    },
    {
      icon: Medal,
      title: "Formation de qualité",
      description: "Excellence académique"
    },
    {
      icon: GraduationCap,
      title: "Développement personnel",
      description: "Épanouissement complet"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-advantages-title">
            Ce que nous proposons
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-advantages-subtitle">
            Des atouts qui font la différence dans l'éducation de votre enfant
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={advantage.title} 
                className="bg-card rounded-xl p-6 text-center card-hover"
                data-testid={`card-advantage-${index}`}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-primary-foreground text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2" data-testid={`text-advantage-title-${index}`}>
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-advantage-description-${index}`}>
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantages;
