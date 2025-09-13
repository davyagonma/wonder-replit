import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Nous Contacter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter !
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-address-title">Adresse</h3>
                    <p className="text-muted-foreground" data-testid="text-address-content">
                      Djigbé Madjavi<br />
                      Rue de l'ancien commissariat<br />
                      Abomey-Calavi, Bénin
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-phone-title">Téléphone</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <a 
                          href="tel:+22901965649461" 
                          className="hover:text-primary transition-colors"
                          data-testid="link-phone-1"
                        >
                          +229 01965649461
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a 
                          href="tel:+22901416191001" 
                          className="hover:text-primary transition-colors"
                          data-testid="link-phone-2"
                        >
                          +229 01416191001
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-hours-title">Horaires</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p data-testid="text-hours-weekdays"><strong>Lundi - Vendredi:</strong> 7h00 - 17h00</p>
                      <p data-testid="text-hours-saturday"><strong>Samedi:</strong> 8h00 - 16h00</p>
                      <p data-testid="text-hours-sunday"><strong>Dimanche:</strong> Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Contact Buttons */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground" data-testid="text-whatsapp-title">Contact WhatsApp</h3>
                <div className="flex flex-col space-y-3">
                  <a
                    href="https://wa.me/22901965649461"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    data-testid="link-whatsapp-1"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Chatter sur WhatsApp (+229 01965649461)</span>
                  </a>
                  <a
                    href="https://wa.me/22901416191001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    data-testid="link-whatsapp-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Chatter sur WhatsApp (+229 01416191001)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carte et Formulaire de contact */}
          <div className="space-y-8">
            {/* Google Maps Integration */}
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4" data-testid="text-location-title">Notre Localisation</h3>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7934.434586045718!2d2.35!3d6.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnMTIuMCJOIDLCsDIxJzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1234567890"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Djigbé Madjavi"
                  className="rounded-lg"
                  data-testid="map-location"
                />
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
