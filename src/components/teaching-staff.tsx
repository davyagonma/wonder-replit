const TeachingStaff = () => {
  const teachers = [
    {
      name: "Mme. Adjovi KONÉ",
      position: "Maternelle",
      experience: "15 ans d'expérience en pédagogie précoce",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "M. Pierre DOSSOU",
      position: "Mathématiques & Sciences",
      experience: "Expert en pédagogie STEM",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Mme. Fatima ALIMI",
      position: "Langues (Anglais/Espagnol)",
      experience: "Certifiée Cambridge & DELE",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "M. David AGBANI",
      position: "Informatique & Robotique",
      experience: "Ingénieur en technologies éducatives",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-staff-title">
            Notre Équipe Pédagogique
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-staff-subtitle">
            Des professeurs qualifiés et passionnés, dédiés à la réussite de vos enfants
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.name} 
              className="bg-card rounded-xl p-6 text-center card-hover"
              data-testid={`card-teacher-${index}`}
            >
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                data-testid={`img-teacher-${index}`}
              />
              <h3 className="text-lg font-bold text-foreground mb-1" data-testid={`text-teacher-name-${index}`}>
                {teacher.name}
              </h3>
              <p className="text-primary font-medium mb-2" data-testid={`text-teacher-position-${index}`}>
                {teacher.position}
              </p>
              <p className="text-sm text-muted-foreground" data-testid={`text-teacher-experience-${index}`}>
                {teacher.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingStaff;
