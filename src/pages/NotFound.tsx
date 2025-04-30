
import { useLanguage } from "@/contexts/LanguageContext";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-brand-gold mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">
            {language === 'en' 
              ? 'Page not found' 
              : 'Seite nicht gefunden'}
          </p>
          <Button asChild className="bg-brand-gold hover:bg-brand-gold/90">
            <Link to="/">
              {language === 'en' ? 'Return to Home' : 'Zurück zur Startseite'}
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
