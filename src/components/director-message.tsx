const DirectorMessage = () => {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-director-title">
              Mot du Directeur
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p data-testid="text-director-message-1">
                "Chers parents, bienvenue au Complexe Scolaire Wonder Of God. Notre mission est de former des citoyens responsables, créatifs et épanouis."
              </p>
              <p data-testid="text-director-message-2">
                "Nous combinons excellence académique et développement personnel à travers nos programmes bilingues et nos activités extrascolaires enrichissantes."
              </p>
              <div className="mt-6">
                <p className="font-semibold text-foreground" data-testid="text-director-name">
                  M. Jean-Baptiste KOUDOU
                </p>
                <p className="text-muted-foreground" data-testid="text-director-title-position">
                  Directeur Général
                </p>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600" 
              alt="Directeur M. Jean-Baptiste KOUDOU" 
              className="w-80 h-96 object-cover rounded-xl mx-auto shadow-lg"
              data-testid="img-director"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
