
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-gold text-white py-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">{t('contactTitle')}</h1>
          <p className="body-text mb-6 max-w-2xl mx-auto">{t('contactIntro')}</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <MapPin className="h-10 w-10 text-brand-gold mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('address')}</h3>
              <p className="text-gray-700">Bahnhofstrasse 28</p>
              <p className="text-gray-700">6300 Zug</p>
              <p className="text-gray-700">Switzerland</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Phone className="h-10 w-10 text-brand-gold mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('phoneNumber')}</h3>
              <a 
                href="tel:+41415592299" 
                className="text-xl font-medium text-brand-gold hover:underline"
              >
                041 559 22 99
              </a>
              <p className="mt-4 font-medium">
                {t('walkInOnly')}
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-brand-gold mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('openingHours')}</h3>
              <ul className="space-y-1 text-gray-700">
                <li>{t('monday')}: 9:00 - 19:00</li>
                <li>{t('tuesday')}: 9:00 - 19:00</li>
                <li>{t('wednesday')}: 9:00 - 19:00</li>
                <li>{t('thursday')}: 9:00 - 19:00</li>
                <li>{t('friday')}: 9:00 - 19:00</li>
                <li>{t('saturday')}: 9:00 - 17:00</li>
                <li>{t('sunday')}: {t('closed')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <h2 className="text-2xl font-bold p-6 border-b">{t('findUs')}</h2>
            <div className="aspect-video w-full">
              <iframe
                title="Top Cut Barbershop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.3651957362456!2d8.512676!3d47.173072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aaa13beb6ffff%3A0x4ecb44790ebc80a5!2sBahnhofstrasse%2028%2C%206300%20Zug!5e0!3m2!1sen!2sch!4v1698533961144!5m2!1sen!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
