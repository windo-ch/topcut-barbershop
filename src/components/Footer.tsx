
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Top Cut Barbershop</h3>
            <p>Bahnhofstrasse 28</p>
            <p>6300 Zug</p>
            <p className="mt-2 flex items-center">
              <Phone size={16} className="mr-2" />
              <a href="tel:+41415592299" className="hover:underline">041 559 22 99</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('openingHours')}</h3>
            <div className="space-y-1">
              <p>{t('monday')}: 9:00 - 19:00</p>
              <p>{t('tuesday')}: 9:00 - 19:00</p>
              <p>{t('wednesday')}: 9:00 - 19:00</p>
              <p>{t('thursday')}: 9:00 - 19:00</p>
              <p>{t('friday')}: 9:00 - 19:00</p>
              <p>{t('saturday')}: 9:00 - 17:00</p>
              <p>{t('sunday')}: {t('closed')}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('navigation')}</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:underline">{t('home')}</Link>
              <Link to="/about" className="hover:underline">{t('about')}</Link>
              <Link to="/services" className="hover:underline">{t('services')}</Link>
              <Link to="/contact" className="hover:underline">{t('contact')}</Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/70">
          <p>© {currentYear} Top Cut Barbershop. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};
