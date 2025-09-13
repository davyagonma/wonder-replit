import { Baby, GraduationCap, Check } from "lucide-react";

const Programs = () => {
  const activities = [
    {
      title: "Karaté",
      description: "Discipline, respect et maîtrise de soi",
      schedule: "Mardi & Jeudi, 15h30 - 17h00",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Cuisine",
      description: "Créativité culinaire et autonomie",
      schedule: "Mercredi & Samedi, 14h00 - 16h00",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Informatique",
      description: "Initiation aux nouvelles technologies",
      schedule: "Lundi & Vendredi, 16h00 - 17h30",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Animation & Danse",
      description: "Expression corporelle et confiance",
      schedule: "Mercredi & Samedi, 10h00 - 12h00",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-programs-title">
            Nos Programmes & Activités
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-programs-subtitle">
            Un curriculum complet qui allie enseignement académique de qualité et épanouissement personnel
          </p>
        </div>
        
        {/* Enseignements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center" data-testid="text-education-title">
            Enseignements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-primary-foreground">
              <div className="flex items-center mb-6">
                <Baby className="text-4xl mr-4" />
                <h4 className="text-2xl font-bold" data-testid="text-maternal-title">Enseignement Maternel</h4>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center" data-testid="text-maternal-level-1">
                  <Check className="mr-3" />Petite Section (3-4 ans)
                </li>
                <li className="flex items-center" data-testid="text-maternal-level-2">
                  <Check className="mr-3" />Moyenne Section (4-5 ans)
                </li>
                <li className="flex items-center" data-testid="text-maternal-level-3">
                  <Check className="mr-3" />Grande Section (5-6 ans)
                </li>
              </ul>
              <p className="mt-4 text-primary-foreground opacity-90" data-testid="text-maternal-description">
                Développement des compétences de base, socialisation et éveil créatif dans un environnement bienveillant.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary to-primary rounded-2xl p-8 text-secondary-foreground">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-4xl mr-4" />
                <h4 className="text-2xl font-bold" data-testid="text-primary-title">Enseignement Primaire</h4>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center" data-testid="text-primary-level-1">
                  <Check className="mr-3" />CP, CE1, CE2 (6-9 ans)
                </li>
                <li className="flex items-center" data-testid="text-primary-level-2">
                  <Check className="mr-3" />CM1, CM2 (9-11 ans)
                </li>
                <li className="flex items-center" data-testid="text-primary-level-3">
                  <Check className="mr-3" />Préparation CEP
                </li>
              </ul>
              <p className="mt-4 text-secondary-foreground opacity-90" data-testid="text-primary-description">
                Programme complet avec renforcement en mathématiques, français et sciences, complété par les langues étrangères.
              </p>
            </div>
          </div>
        </div>
        
        {/* Activités Extrascolaires */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center" data-testid="text-activities-title">
            Activités Extrascolaires
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div 
                key={activity.title} 
                className="bg-muted rounded-xl p-6 text-center card-hover"
                data-testid={`card-activity-${index}`}
              >
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  data-testid={`img-activity-${index}`}
                />
                <h4 className="text-xl font-bold text-foreground mb-2" data-testid={`text-activity-title-${index}`}>
                  {activity.title}
                </h4>
                <p className="text-muted-foreground mb-4" data-testid={`text-activity-description-${index}`}>
                  {activity.description}
                </p>
                <div className="text-sm text-accent-foreground">
                  <p data-testid={`text-activity-schedule-${index}`}>{activity.schedule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
