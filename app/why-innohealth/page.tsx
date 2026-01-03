'use client';

import Callout from '@/components/Callout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function WhyInnoHealth() {
  const { t } = useLanguage();
  return (
    <div>
      {/* Page Header */}
      <section className="gradient-bg section-padding border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">{t('whyInnoHealth.title')}</h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <Callout>
              <p className="text-lg md:text-xl leading-relaxed">
                {t('whyInnoHealth.description')}
              </p>
            </Callout>
          </div>
        </div>
      </section>
    </div>
  );
}

