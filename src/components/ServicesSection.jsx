import React from 'react';
import { Wrench, ShieldCheck, Cog, Headphones } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Réparation et Diagnostic",
      description: "Fournit des solutions rapides et fiables pour les pannes de trottinettes et vélos électriques.",
      Icon: Wrench,
    },
    {
      title: "Entretien Préventif",
      description: "Services d'entretien régulier pour assurer la longévité de vos trottinettes et vélos électriques.",
      Icon: ShieldCheck,
    },
    {
      title: "Remplacement de Pièces",
      description: "Services de remplacement de pièces pour garantir le bon fonctionnement de vos trottinettes et vélos électriques.",
      Icon: Cog,
    },
    {
      title: "Assistance Personnalisée",
      description: "Plans de maintenance complets pour garder votre équipement de cyclisme en parfait état.",
      Icon: Headphones,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos <span className="text-primary">Services</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Solutions cyclistes complètes pour les particuliers et les collectivités</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div key={index} className="bg-card rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
                <a href="#" className="inline-flex items-center mt-4 text-primary hover:text-primary/80">
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">        
          <a className="cosmic-button" href="mailto:contact@cycline.fr">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;