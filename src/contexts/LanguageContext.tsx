
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for our translations
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Define the context type
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

// Create the translations object
const translations: Translations = {
  en: {
    // General
    "language": "Language",
    "english": "English",
    "german": "German",
    
    // Navigation
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact",
    
    // Home page
    "welcome": "Welcome to Top Cut Barbershop",
    "welcomeMessage": "Premium barbering services in the heart of Zug",
    "walkInOnly": "WALK IN ONLY",
    "openingHours": "Opening Hours",
    "monday": "Monday",
    "tuesday": "Tuesday",
    "wednesday": "Wednesday",
    "thursday": "Thursday",
    "friday": "Friday",
    "saturday": "Saturday",
    "sunday": "Sunday",
    "closed": "Closed",
    "phoneNumber": "Phone Number",
    
    // About page
    "aboutTitle": "About Top Cut Barbershop",
    "aboutIntro": "Your premier destination for quality barbering in Zug, Switzerland",
    "since": "Since 2020",
    
    // Services page
    "servicesTitle": "Our Services",
    "servicesIntro": "Quality barbering services at fair prices",
    "haircut": "Haircut",
    "beardTrim": "Beard Trim",
    "hotTowelShave": "Hot Towel Shave",
    "kidsHaircut": "Kids Haircut",
    "chf": "CHF",
    
    // Contact page
    "contactTitle": "Contact Us",
    "contactIntro": "Visit us or get in touch",
    "address": "Address",
    "findUs": "Find Us",
  },
  
  de: {
    // General
    "language": "Sprache",
    "english": "Englisch",
    "german": "Deutsch",
    
    // Navigation
    "home": "Startseite",
    "about": "Über Uns",
    "services": "Dienstleistungen",
    "contact": "Kontakt",
    
    // Home page
    "welcome": "Willkommen bei Top Cut Barbershop",
    "welcomeMessage": "Premium Barbier-Dienstleistungen im Herzen von Zug",
    "walkInOnly": "NUR OHNE TERMIN",
    "openingHours": "Öffnungszeiten",
    "monday": "Montag",
    "tuesday": "Dienstag",
    "wednesday": "Mittwoch",
    "thursday": "Donnerstag",
    "friday": "Freitag",
    "saturday": "Samstag",
    "sunday": "Sonntag",
    "closed": "Geschlossen",
    "phoneNumber": "Telefonnummer",
    
    // About page
    "aboutTitle": "Über Top Cut Barbershop",
    "aboutIntro": "Ihre erstklassige Adresse für hochwertige Barbier-Dienstleistungen in Zug, Schweiz",
    "since": "Seit 2020",
    
    // Services page
    "servicesTitle": "Unsere Dienstleistungen",
    "servicesIntro": "Qualitäts-Barbier-Dienstleistungen zu fairen Preisen",
    "haircut": "Haarschnitt",
    "beardTrim": "Bartschnitt",
    "hotTowelShave": "Rasur mit heißem Handtuch",
    "kidsHaircut": "Kinderhaarschnitt",
    "chf": "CHF",
    
    // Contact page
    "contactTitle": "Kontaktieren Sie uns",
    "contactIntro": "Besuchen Sie uns oder nehmen Sie Kontakt auf",
    "address": "Adresse",
    "findUs": "So finden Sie uns",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Set German as default language
  const [language, setLanguage] = useState('de');

  const t = (key: string) => {
    if (!translations[language]) {
      return key;
    }
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
