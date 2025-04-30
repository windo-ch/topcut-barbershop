
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Users } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-gold text-white py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">{t('aboutTitle')}</h1>
          <p className="body-text mb-6 max-w-2xl mx-auto">{t('aboutIntro')}</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Users className="inline-block h-10 w-10 mb-4 text-brand-gold" />
            <h2 className="heading-2 text-brand-gold">{t('teamTitle')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Misbah */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974"
                  alt={t('misbahName')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('misbahName')}</h3>
                <p className="text-brand-gold font-medium mb-3">{t('misbahRole')}</p>
                <p className="text-gray-600">{t('misbahDesc')}</p>
              </div>
            </div>

            {/* Rasoul */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1974"
                  alt={t('rasoulName')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('rasoulName')}</h3>
                <p className="text-brand-gold font-medium mb-3">{t('rasoulRole')}</p>
                <p className="text-gray-600">{t('rasoulDesc')}</p>
              </div>
            </div>

            {/* Sultan */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1622296089748-53d511512c82?q=80&w=1972"
                  alt={t('sultanName')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('sultanName')}</h3>
                <p className="text-brand-gold font-medium mb-3">{t('sultanRole')}</p>
                <p className="text-gray-600">{t('sultanDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1634302086738-b4b9efc2605d?q=80&w=1966"
                  alt="Top Cut Barbershop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-brand-gold mb-6">
                  Top Cut Barbershop - {t('since')}
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    {language === 'en' ? 
                      "Founded in 2020, Top Cut Barbershop has established itself as a premier destination for quality haircuts and grooming in Zug, Switzerland." :
                      "Gegründet im Jahr 2020 hat sich Top Cut Barbershop als erstklassige Adresse für hochwertige Haarschnitte und Pflege in Zug, Schweiz, etabliert."
                    }
                  </p>
                  <p>
                    {language === 'en' ? 
                      "Our approach combines traditional barbering techniques with modern styles, ensuring each client receives personalized service tailored to their needs." :
                      "Unser Ansatz kombiniert traditionelle Barbier-Techniken mit modernen Stilen und stellt sicher, dass jeder Kunde einen auf seine Bedürfnisse zugeschnittenen Service erhält."
                    }
                  </p>
                  <p>
                    {language === 'en' ? 
                      "We pride ourselves on creating a welcoming environment where clients can relax and enjoy the authentic barbershop experience." :
                      "Wir sind stolz darauf, eine einladende Umgebung zu schaffen, in der sich unsere Kunden entspannen und das authentische Barbershop-Erlebnis genießen können."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
