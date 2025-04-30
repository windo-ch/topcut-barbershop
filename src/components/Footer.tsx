
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-6 hover:opacity-90 transition-opacity">
              <img 
                src="/lovable-uploads/85a8bb7a-af46-4339-8a71-659b6f5fa52c.png" 
                alt="Top Cut Barbershop" 
                className="h-20"
              />
            </Link>
            <p>Bahnhofstrasse 28</p>
            <p>6300 Zug</p>
            <p className="mt-2 flex items-center justify-center md:justify-start">
              <Phone size={16} className="mr-2 text-brand-gold" />
              <a href="tel:+41415592299" className="hover:text-brand-gold transition-colors">041 559 22 99</a>
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Clock className="h-5 w-5 mr-2 text-brand-gold" />
              <h3 className="text-xl font-semibold">{t('openingHours')}</h3>
            </div>
            <div className="space-y-1">
              <p className="hover:text-brand-gold transition-colors">{t('monday')}: 9:00 - 19:00</p>
              <p className="hover:text-brand-gold transition-colors">{t('tuesday')}: 9:00 - 19:00</p>
              <p className="hover:text-brand-gold transition-colors">{t('wednesday')}: 9:00 - 19:00</p>
              <p className="hover:text-brand-gold transition-colors">{t('thursday')}: 9:00 - 19:00</p>
              <p className="hover:text-brand-gold transition-colors">{t('friday')}: 9:00 - 19:00</p>
              <p className="hover:text-brand-gold transition-colors">{t('saturday')}: 9:00 - 17:00</p>
              <p className="hover:text-brand-gold transition-colors">{t('sunday')}: {t('closed')}</p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-brand-gold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-brand-gold transition-colors">{t('home')}</Link>
              <Link to="/about" className="hover:text-brand-gold transition-colors">{t('about')}</Link>
              <Link to="/services" className="hover:text-brand-gold transition-colors">{t('services')}</Link>
              <Link to="/contact" className="hover:text-brand-gold transition-colors">{t('contact')}</Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/70">© {currentYear} Top Cut Barbershop. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
