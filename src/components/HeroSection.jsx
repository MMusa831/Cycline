import React from 'react';
import { cn } from '../lib/Utils';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary text-glow">Maintenance </span>garantie
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-lg">
            Découvrez la manière idéale de maintenir vos vélos et trottinettes électriques.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="cosmic-button">
              En savoir plus
            </button>
         
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Modern Bicycle" 
              className="relative z-10 rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;