import  Navbar  from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import MissionsSection from "../components/MissionsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";

 const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">   
     <Navbar />
     <StarBackground />
     <HeroSection />
     <AboutSection />
     <ServicesSection />
     <MissionsSection />
     <ContactSection />
     <Footer />
    </div>
  );
};


export default Home;