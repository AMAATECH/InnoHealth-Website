'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div>
      {/* Page Header */}
      <section className="gradient-bg section-padding border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">{t('about.title')}</h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('about.aboutInnoHealth.title')}</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-accent-light rounded-2xl p-8 md:p-12 shadow-soft mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  {t('about.aboutInnoHealth.description1')}
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t('about.aboutInnoHealth.description2')}
                </p>
              </div>
            </div>

            {/* Our Focus */}
            <div className="mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">{t('about.ourFocus.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  t('about.ourFocus.items.0'),
                  t('about.ourFocus.items.1'),
                  t('about.ourFocus.items.2'),
                  t('about.ourFocus.items.3'),
                  t('about.ourFocus.items.4'),
                ].map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section id="disclaimer" className="bg-gray-50 section-padding border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">{t('disclaimer.title')}</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                {t('disclaimer.text1')}
              </p>
              <p>
                {t('disclaimer.text2')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

