
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-gold text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <div className="mb-6">
            <Scissors className="inline-block h-16 w-16 mb-4" />
          </div>
          <h1 className="heading-1 mb-4">{t('welcome')}</h1>
          <p className="body-text mb-8 max-w-2xl mx-auto">{t('welcomeMessage')}</p>
          
          <div className="inline-block bg-white text-brand-gold font-bold text-2xl px-6 py-3 rounded-md mb-8">
            {t('walkInOnly')}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 mr-2" />
                <h2 className="text-2xl font-bold">{t('openingHours')}</h2>
              </div>
              <ul className="space-y-2 text-left">
                <li className="flex justify-between">
                  <span>{t('monday')}:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('tuesday')}:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('wednesday')}:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('thursday')}:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('friday')}:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('saturday')}:</span>
                  <span>9:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('sunday')}:</span>
                  <span>{t('closed')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col justify-center items-center">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 mr-2" />
                <h2 className="text-2xl font-bold">{t('phoneNumber')}</h2>
              </div>
              <a 
                href="tel:+41415592299" 
                className="text-3xl font-bold hover:underline"
              >
                041 559 22 99
              </a>
              <p className="mt-4">{t('walkInOnly')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-brand-gold mb-4">{t('servicesTitle')}</h2>
            <p className="body-text text-gray-700 max-w-2xl mx-auto">
              {t('servicesIntro')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{t('haircut')}</h3>
              <p className="text-2xl font-bold text-brand-gold mb-2">34 {t('chf')}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{t('beardTrim')}</h3>
              <p className="text-2xl font-bold text-brand-gold mb-2">25 {t('chf')}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{t('hotTowelShave')}</h3>
              <p className="text-2xl font-bold text-brand-gold mb-2">30 {t('chf')}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{t('kidsHaircut')}</h3>
              <p className="text-2xl font-bold text-brand-gold mb-2">29 {t('chf')}</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-white">
              <Link to="/services">{t('servicesTitle')} →</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="heading-2 text-brand-gold mb-4">{t('aboutTitle')}</h2>
              <p className="body-text text-gray-700 mb-6">
                {t('aboutIntro')}
              </p>
              <p className="text-lg font-semibold mb-6">
                Top Cut Barbershop - {t('since')}
              </p>
              <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-white">
                <Link to="/about">{t('aboutTitle')} →</Link>
              </Button>
            </div>
            <div className="md:w-1/2 bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070"
                alt="Barbershop interior"
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
