
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      className="text-white hover:text-white/80"
      onClick={toggleLanguage}
    >
      {language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
};
