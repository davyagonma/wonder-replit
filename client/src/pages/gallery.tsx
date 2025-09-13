import { useState } from "react";
import { Star } from "lucide-react";
import GalleryLightbox from "@/components/gallery-lightbox";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Wonder Of God a transformé ma fille. Elle parle maintenant couramment anglais et a développé une confiance en elle remarquable grâce aux activités extrascolaires.",
      author: "Mme. Akossiwa MENSA",
      position: "Parent d'élève CM1",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "L'encadrement est exceptionnel. Mon fils qui était timide participe maintenant activement en classe et excelle en mathématiques et sciences.",
      author: "M. Emmanuel HOUNOU",
      position: "Parent d'élève CE2",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "Une école qui forme vraiment des leaders. Ma fille développe son leadership à travers les projets de groupe et les activités culturelles.",
      author: "Mme. Grace ALLONOU",
      position: "Parent d'élève CM2",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            Galerie Photos & Témoignages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-subtitle">
            Découvrez la vie quotidienne de notre école à travers nos moments forts et les témoignages de notre communauté
          </p>
        </div>
        
        {/* Photo Gallery */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Photo de l'école ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg card-hover cursor-pointer"
              onClick={() => setSelectedImage(image)}
              data-testid={`img-gallery-${index}`}
            />
          ))}
        </div>
        
        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center" data-testid="text-testimonials-title">
            Témoignages de Parents
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 card-hover"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">5/5</span>
                </div>
                <p className="text-muted-foreground mb-4 italic" data-testid={`text-testimonial-content-${index}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-3"
                    data-testid={`img-testimonial-author-${index}`}
                  />
                  <div>
                    <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-position-${index}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GalleryLightbox 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
};

export default Gallery;
