
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LanguageToggle } from './LanguageToggle';

export const Navbar = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-black text-white py-4 shadow-md relative z-10">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img 
            src="/lovable-uploads/03f1b0f0-4ddd-43cd-89ff-ce39f163e621.png" 
            alt="Top Cut Barbershop" 
            className="h-14 md:h-20"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/about" className="nav-link">{t('about')}</Link>
          <Link to="/services" className="nav-link">{t('services')}</Link>
          <Link to="/contact" className="nav-link">{t('contact')}</Link>
          <LanguageToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <Button 
            variant="ghost" 
            className="text-white ml-2 p-2" 
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/20 py-4 shadow-lg">
          <div className="flex flex-col space-y-4 px-6">
            <Link 
              to="/" 
              className="text-white text-lg py-2" 
              onClick={closeMenu}
            >
              {t('home')}
            </Link>
            <Link 
              to="/about" 
              className="text-white text-lg py-2" 
              onClick={closeMenu}
            >
              {t('about')}
            </Link>
            <Link 
              to="/services" 
              className="text-white text-lg py-2" 
              onClick={closeMenu}
            >
              {t('services')}
            </Link>
            <Link 
              to="/contact" 
              className="text-white text-lg py-2" 
              onClick={closeMenu}
            >
              {t('contact')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
