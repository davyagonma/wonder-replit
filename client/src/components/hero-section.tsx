import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection = () => {
  const activities = [
    {
      title: "Karaté",
      description: "Discipline et maîtrise de soi",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Cours de karaté"
    },
    {
      title: "Cuisine",
      description: "Créativité et savoir-vivre",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Cours de cuisine"
    },
    {
      title: "Informatique",
      description: "Technologie et innovation",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Cours d'informatique"
    },
    {
      title: "Animation & Danse",
      description: "Expression et confiance",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Cours de danse"
    }
  ];

  return (
    <section className="hero-gradient py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6" data-testid="text-hero-title">
            Former les leaders de demain avec passion et excellence
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Une éducation de qualité qui développe l'esprit, le corps et le caractère de votre enfant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-card text-primary hover:bg-opacity-90" data-testid="button-enrollment">
                Préinscription en ligne
              </Button>
            </Link>
            <Link href="/programs">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                data-testid="button-programs"
              >
                Découvrir nos programmes
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={activity.title} 
              className="bg-card rounded-xl p-6 text-center card-hover"
              data-testid={`card-activity-${index}`}
            >
              <img 
                src={activity.image} 
                alt={activity.alt} 
                className="w-full h-48 object-cover rounded-lg mb-4"
                data-testid={`img-activity-${index}`}
              />
              <h3 className="text-xl font-bold text-foreground mb-2" data-testid={`text-activity-title-${index}`}>
                {activity.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-activity-description-${index}`}>
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
