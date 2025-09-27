import React, { useEffect, useState } from 'react';
import { cn } from '../lib/Utils';
import Logo from "../assets/Cycline.png" // Purple logo for light mode

import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './Themetoggle';


const navItems = [
  { name: "Accueil", href: "#home"},
  { name: "À Propos", href: "#about"},
  { name: "Services", href: "#services"},
  { name: "Missions", href: "#missions"},
  { name: "Contact", href: "#contact"}
];

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme is stored by ThemeToggle via document.documentElement.classList (dark class)

  useEffect(() => {
    const handleScroll = () => {
     setIsScrolled(window.screenY > 10)
     return () => window.removeEventListenerEventListener("scroll", handleScroll)
    }
    window.addEventListener("scroll", handleScroll)
  }, []);
  return (
     <nav className="fixed w-full z-40 transition-all duration-300 border-b border bg-white dark:bg-background/50"
     // <nav className={cn("fixed w-full z-40 transition-all duration-300 border-b border bg-background", 
     >
        <div className='container flex items-center justify-between'>
          <a href='#home'>
            <div className='relative mx-4'>
              {/* Light mode: purple logo; Dark mode: white logo */}
              <img src={Logo} width={50} alt="Cycline" className="block dark:hidden" />            
            </div>
          </a>
          {/* desktop navbar*/}
          <div className='hidden md:flex space-x-8'>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className='text-purple-900 hover:text-primary font-bold transition-colors duration-300'
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile navbar and theme toggle on the right */}
          <div className='flex items-center space-x-2'>
            <div className='p-0 md:p-5'>
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className='md:hidden p-2 z-50 text-foreground mr-3'
              aria-label={isMenuOpen ? "Close The Menu" : "Open The Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
          'transition-all duration-300 md:hidden',
          isMenuOpen 
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          )}
          >
          <div className='flex flex-col mr-15 space-y-8'>
          {navItems.map((item, key) => (
            <a 
            key={key}
            href={item.href}
            className='text-foreground/80 hover:text-primary font-bold transition-colors duration-300'
            onClick={() => setIsMenuOpen(false)}
            >
              {item.name}</a>
          ))}
          </div> 

         </div>
        </div>
      </nav>
  );
}

export default Navbar;
