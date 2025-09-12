import TeachingStaff from "@/components/teaching-staff";
import { Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8" data-testid="text-history-title">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg" data-testid="text-history-1">
                  Fondé avec la vision de former les leaders de demain, le Complexe Scolaire Wonder Of God s'est établi comme une référence éducative à Djigbé Madjavi.
                </p>
                <p data-testid="text-history-2">
                  Depuis nos débuts, nous nous sommes engagés à offrir une éducation holistique qui combine excellence académique, développement personnel et valeurs morales solides.
                </p>
                <p data-testid="text-history-3">
                  Notre approche pédagogique moderne intègre les langues internationales, les nouvelles technologies et les activités créatives pour préparer nos élèves aux défis du 21ème siècle.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-primary rounded-xl p-8 text-primary-foreground mb-8">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-mission-title">Notre Mission</h3>
                <p className="text-lg" data-testid="text-mission-description">
                  Former des citoyens responsables, créatifs et épanouis, dotés des compétences nécessaires pour réussir dans un monde en constante évolution.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2" data-testid="text-vision-title">Vision</h4>
                    <p className="text-muted-foreground" data-testid="text-vision-description">
                      Être l'école de référence pour l'éducation de qualité et le développement intégral de l'enfant.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2" data-testid="text-values-title">Valeurs</h4>
                    <p className="text-muted-foreground" data-testid="text-values-description">
                      Excellence, intégrité, respect, créativité et développement durable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeachingStaff />
    </div>
  );
};

export default About;
