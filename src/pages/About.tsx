
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';

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


      {/* Story Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1974"
                  alt="Top Cut Barbershop Interior"
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
