
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { BarberScissors } from '@/components/BarberScissors';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    { name: 'haircut', price: 31 },
    { name: 'beardTrim', price: 25 },
    { name: 'hairAndBeard', price: 46 },
    { name: 'kidsHaircut', price: 25 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-gold text-white py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4 animate-fadeIn">{t('servicesTitle')}</h1>
          <p className="body-text mb-6 max-w-2xl mx-auto animate-fadeIn animation-delay-100">{t('servicesIntro')}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block">
              <BarberScissors className="mb-4" size={40} color="#000" goldColor="#F3C034" />
            </div>
            <h2 className="heading-2 text-brand-gold">{t('servicesTitle')}</h2>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="p-6">
              <table className="w-full">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 text-xl font-semibold text-gray-700">
                      {language === 'en' ? 'Service' : 'Dienstleistung'}
                    </th>
                    <th className="text-right py-4 text-xl font-semibold text-gray-700">
                      {language === 'en' ? 'Price' : 'Preis'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 text-lg font-medium">
                        {t(service.name)}
                      </td>
                      <td className="py-4 text-right text-lg font-bold text-brand-gold">
                        {service.price} {t('chf')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center shadow-lg transform transition-all hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Walk-In Only Policy' : 'Nur ohne Termin'}
            </h3>
            <p className="text-gray-700">
              {language === 'en' 
                ? 'At Top Cut Barbershop, we operate on a walk-in basis only. No appointments necessary - just stop by during our opening hours.' 
                : 'Im Top Cut Barbershop arbeiten wir ausschließlich ohne Termin. Keine Terminvereinbarung notwendig - kommen Sie einfach während unserer Öffnungszeiten vorbei.'}
            </p>
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">
                  {language === 'en' ? 'Our Quality Promise' : 'Unser Qualitätsversprechen'}
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="animate-fadeIn">
                    {language === 'en' 
                      ? 'We use premium products and tools to ensure the best results for every client.' 
                      : 'Wir verwenden hochwertige Produkte und Werkzeuge, um die besten Ergebnisse für jeden Kunden zu gewährleisten.'}
                  </p>
                  <p className="animate-fadeIn animation-delay-100">
                    {language === 'en' 
                      ? 'Our barbers are trained in the latest techniques and styles to keep you looking your best.' 
                      : 'Unsere Barbiere sind in den neuesten Techniken und Stilen geschult, damit Sie immer bestens aussehen.'}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1974"
                  alt="Barbershop tools"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
