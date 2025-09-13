import EnrollmentForm from "@/components/enrollment-form";
import { Check } from "lucide-react";

const Admissions = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-admissions-title">
            Admissions & Inscriptions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-admissions-subtitle">
            Rejoignez notre communauté éducative d'excellence. Le processus d'admission est simple et transparent.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Conditions d'admission */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-admission-conditions-title">
              Conditions d'Admission
            </h3>
            
            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-3" data-testid="text-maternal-requirements-title">
                  Enseignement Maternel
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center" data-testid="text-maternal-requirement-1">
                    <Check className="text-primary mr-2 w-4 h-4" />Âge minimum: 3 ans révolus
                  </li>
                  <li className="flex items-center" data-testid="text-maternal-requirement-2">
                    <Check className="text-primary mr-2 w-4 h-4" />Certificat de naissance
                  </li>
                  <li className="flex items-center" data-testid="text-maternal-requirement-3">
                    <Check className="text-primary mr-2 w-4 h-4" />Carnet de vaccination à jour
                  </li>
                  <li className="flex items-center" data-testid="text-maternal-requirement-4">
                    <Check className="text-primary mr-2 w-4 h-4" />Entretien avec les parents
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted rounded-xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-3" data-testid="text-primary-requirements-title">
                  Enseignement Primaire
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center" data-testid="text-primary-requirement-1">
                    <Check className="text-primary mr-2 w-4 h-4" />Âge approprié au niveau demandé
                  </li>
                  <li className="flex items-center" data-testid="text-primary-requirement-2">
                    <Check className="text-primary mr-2 w-4 h-4" />Bulletins de l'année précédente
                  </li>
                  <li className="flex items-center" data-testid="text-primary-requirement-3">
                    <Check className="text-primary mr-2 w-4 h-4" />Test d'évaluation du niveau
                  </li>
                  <li className="flex items-center" data-testid="text-primary-requirement-4">
                    <Check className="text-primary mr-2 w-4 h-4" />Certificat de transfert (si applicable)
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h4 className="text-lg font-bold mb-3" data-testid="text-tuition-title">
                  Frais de Scolarité
                </h4>
                <p className="mb-3">Nos tarifs sont compétitifs et incluent :</p>
                <ul className="space-y-2">
                  <li className="flex items-center" data-testid="text-tuition-include-1">
                    <Check className="mr-2 w-4 h-4" />Cours principaux et langues
                  </li>
                  <li className="flex items-center" data-testid="text-tuition-include-2">
                    <Check className="mr-2 w-4 h-4" />Activités extrascolaires
                  </li>
                  <li className="flex items-center" data-testid="text-tuition-include-3">
                    <Check className="mr-2 w-4 h-4" />Matériel pédagogique de base
                  </li>
                  <li className="flex items-center" data-testid="text-tuition-include-4">
                    <Check className="mr-2 w-4 h-4" />Suivi personnalisé
                  </li>
                </ul>
                <p className="mt-4 text-sm opacity-90" data-testid="text-tuition-contact">
                  Contactez-nous pour obtenir le détail des frais
                </p>
              </div>
            </div>
          </div>
          
          <EnrollmentForm />
        </div>
      </div>
    </section>
  );
};

export default Admissions;
