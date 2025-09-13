import { Link } from "wouter";
import { GraduationCap } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="text-primary-foreground text-xl" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Wonder Of God</h1>
                <p className="text-xs opacity-80">École d'Excellence</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Former les leaders de demain avec passion et excellence depuis notre établissement à Djigbé Madjavi.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors" data-testid="footer-link-accueil">Accueil</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors" data-testid="footer-link-apropos">À propos</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors" data-testid="footer-link-programmes">Programmes</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors" data-testid="footer-link-galerie">Galerie</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors" data-testid="footer-link-admissions">Admissions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Programmes</h3>
            <ul className="space-y-2 text-sm">
              <li>Enseignement Maternel</li>
              <li>Enseignement Primaire</li>
              <li>Karaté</li>
              <li>Cuisine</li>
              <li>Informatique</li>
              <li>Animation & Danse</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>Djigbé Madjavi, Rue de l'ancien commissariat</p>
              <p>+229 01965649461</p>
              <p>+229 01416191001</p>
            </div>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://wa.me/22901965649461"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                data-testid="link-whatsapp"
              >
                <FaWhatsapp className="text-sm" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                data-testid="link-facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground border-opacity-20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Complexe Scolaire Wonder Of God. Tous droits réservés. | Conçu avec ❤️ pour l'éducation de qualité</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
