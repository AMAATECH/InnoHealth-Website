'use client';

import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <div>
      {/* Page Header */}
      <section className="gradient-bg section-padding border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">{t('contact.title')}</h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-accent-light rounded-2xl p-8 shadow-soft mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">{t('contact.getInTouch.title')}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {t('contact.getInTouch.description')}
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-soft">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-primary">{t('common.email')}</h3>
                    </div>
                    <a
                      href="mailto:info@innohealth.com"
                      className="text-secondary hover:text-secondary-dark text-lg font-medium transition-colors"
                    >
                      {t('contact.email')}
                    </a>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-soft">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-primary">{t('common.phone')}</h3>
                    </div>
                    <a
                      href="tel:+966123456789"
                      className="text-secondary hover:text-secondary-dark text-lg font-medium transition-colors"
                    >
                      {t('contact.phone')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Disclaimer Section */}
              <div className="bg-accent-light rounded-xl p-6 border-l-4 border-secondary">
                <h3 className="text-lg font-bold text-primary mb-4">{t('disclaimer.title')}</h3>
                <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>
                    {t('disclaimer.text1')}
                  </p>
                  <p>
                    {t('disclaimer.text2')}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-accent-light rounded-2xl p-8 shadow-soft">
                <h2 className="text-3xl font-bold text-primary mb-6">{t('common.sendMessage')}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

