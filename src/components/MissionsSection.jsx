import React from 'react';
import  Image1  from '../assets/Image1.png'; 
import  Image2  from '../assets/Image2.png';

const MissionsSection = () => {
  const missions = [
    {
      id: 1,
      title: "Maintenance de trottinettes et vélos électriques",
      description: "Nous travaillons pour notre client PONY SA à Evry et ses alentours depuis 2024 pour la maintenance de leurs flottes de trottinettes électriques.",
      image: Image1
    },
    {
      id: 2,
      title: "Maintenance de trottinettes et vélos électriques",
      description: "Nous travaillons avec notre client PONY SA à Beauvais et ses alentours depuis 2024 pour la maintenance de leurs flottes de trottinettes et vélos électriques.",
      image: Image2
    },
      ];

  return (
    <section id="missions" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos <span className="text-primary">Missions</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Offrir des solutions durables et innovantes à nos clients.</p>
        </div>
        
        {missions.map((mission, index) => (
          <div key={mission.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-20 last:mb-0`}>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className={`px-4 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
                <p className="text-foreground/80 mb-6">{mission.description}</p>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-foreground/70 mb-6">
                  At Cycline, we believe in creating a tangible impact on the world through actionable goals and measurable outcomes. 
                  Our mission is not just a statement, but a commitment we pursue every day.
                </p>
                <a className="px-6 py-2 rounded-full bg-primary/10 text-primary font-medium transition-all duration-300" href="#">
                  Pour en savoir plus sur cette mission
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl transform -rotate-3"></div>
                <img 
                  src={mission.image} 
                  alt={mission.title} 
                  className="relative rounded-lg shadow-lg w-full h-auto z-10 transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionsSection;