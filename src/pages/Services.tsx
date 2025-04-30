
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { Scissors } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { name: 'haircut', price: 34 },
    { name: 'beardTrim', price: 25 },
    { name: 'hotTowelShave', price: 30 },
    { name: 'kidsHaircut', price: 29 },
    { name: 'haircut_beardTrim', price: 55, customName: language === 'en' ? 'Haircut & Beard Trim' : 'Haarschnitt & Bartschnitt' },
    { name: 'senior_haircut', price: 29, customName: language === 'en' ? 'Senior Haircut (65+)' : 'Senioren-Haarschnitt (65+)' },
  ];

  const { language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-gold text-white py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">{t('servicesTitle')}</h1>
          <p className="body-text mb-6 max-w-2xl mx-auto">{t('servicesIntro')}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <Scissors className="inline-block h-10 w-10 mb-4 text-brand-gold" />
            <h2 className="heading-2 text-brand-gold">{t('servicesTitle')}</h2>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 text-lg font-medium">
                        {service.customName || t(service.name)}
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

          <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-brand-gold mb-4">
                  {language === 'en' ? 'Our Quality Promise' : 'Unser Qualitätsversprechen'}
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    {language === 'en' 
                      ? 'We use premium products and tools to ensure the best results for every client.' 
                      : 'Wir verwenden hochwertige Produkte und Werkzeuge, um die besten Ergebnisse für jeden Kunden zu gewährleisten.'}
                  </p>
                  <p>
                    {language === 'en' 
                      ? 'Our barbers are trained in the latest techniques and styles to keep you looking your best.' 
                      : 'Unsere Barbiere sind in den neuesten Techniken und Stilen geschult, damit Sie immer bestens aussehen.'}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1589525231707-f2de2428f59c?q=80&w=1970"
                  alt="Barbershop tools"
                  className="w-full h-full object-cover"
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
