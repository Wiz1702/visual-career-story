import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DownloadButton from './DownloadButton';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['about', 'experience', 'skills', 'education', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-strong shadow-lg shadow-background/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#" 
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            WA
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="ml-2">
              <DownloadButton />
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden glass-strong border-t border-border/50 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2">
            <DownloadButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
