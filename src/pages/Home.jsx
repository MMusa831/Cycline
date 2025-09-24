import  Navbar  from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import MissionsSection from "../components/MissionsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

 const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">   
     <Navbar />
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