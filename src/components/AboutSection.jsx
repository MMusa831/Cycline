import React from 'react';
import { cn } from '../lib/Utils';
import Logo1 from "../assets/Logo2.png" // White logo for dark mode 

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qui <span className="text-primary">Sommes</span> Nous</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Pionniers des solutions de maintenance durable depuis 2024</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Notre Histoire</h3>
            <p className="text-foreground/80 mb-6">
              <span className='text-xl text-primary font-bold mb-4'>Cycline</span> est une entreprise fondée en 2024, spécialisée dans la réparation, l’entretien et la
              maintenance de trottinettes et vélos électriques. Située à Villejuif
            </p>
            <p className="text-foreground/80 mb-8">
              Notre équipe de mécaniciens et de dirigeants travaille ensemble pour offrir des services stables et de qualité à nos clients.
            </p>
            
            {/* <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <h4 className="font-bold text-xl text-primary mb-2">50+</h4>
                <p className="text-foreground/70">Cities Worldwide</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <h4 className="font-bold text-xl text-primary mb-2">10k+</h4>
                <p className="text-foreground/70">Happy Cyclists</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <h4 className="font-bold text-xl text-primary mb-2">30%</h4>
                <p className="text-foreground/70">Carbon Reduction</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <h4 className="font-bold text-xl text-primary mb-2">24/7</h4>
                <p className="text-foreground/70">Customer Support</p>
              </div>
            </div> */}
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl"></div>
              <img 
                src={Logo1} 
                alt="Team at work" 
                className="relative rounded-lg shadow-lg w-full h-auto z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;