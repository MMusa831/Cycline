import { useEffect, useState } from "react";



const StarBackground = () => {

  const [star, setStar] = useState([]);
  const [meteor, setMeteor] = useState([]);

  useEffect (() => {
    generateStars();
    MeteorShower();
   
   
  }, []);

  const generateStars = () => {
   const numStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        size: Math.random() * 3 + 1 + "px",
        opacity: Math.random() * 0.5 + 0.5,
        animationDelay: Math.random() * 4 + 2 + "s",
      });
    }
    setStar(newStars);
  };

// generate meteor shower effect

const MeteorShower = () => {
  const numMeteors = 4;
  const newMeteors = [];

  for (let i = 0; i < numMeteors; i++) {
    newMeteors.push({
      id: i,
      x: Math.random() * 100 + "%",
      y: Math.random() * 20 + "%",
      size: Math.random() * 2 + 1 + "px",
      delay: Math.random() * 15 + "s",
      animationDuration: Math.random() * 3 + 3 + "s",
    });
  }
  setMeteor(newMeteors);
};


  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {star.map((s) => (
        <div
          key={s.id}
          className="star animate-pulse-subtle"
          style={{
            top: s.y,
            left: s.x,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDuration: s.animationDuration,
          }}
        />
      ))}
   { meteor.map((m) => (
        <div  
          key={m.id}
          className="meteor animate-meteor"
          style={{
            top: m.x,
            left: m.y,
            width: m.size,
            height: m.size,
            animationDelay: m.delay,
            animationDuration: m.animationDuration,
          }}
        />
      ))}
    </div>
  );
};





export default StarBackground;
