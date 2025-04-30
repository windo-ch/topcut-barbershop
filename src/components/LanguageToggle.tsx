
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <Button 
      className="bg-brand-gold hover:bg-brand-gold/90 text-black font-bold rounded-full px-4 py-1 text-sm transition-transform hover:scale-105"
      onClick={toggleLanguage}
    >
      {language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
};
