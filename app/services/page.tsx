'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'regulatory-consulting',
      title: t('services.regulatoryConsulting.title'),
      description: [
        t('services.regulatoryConsulting.description.0'),
        t('services.regulatoryConsulting.description.1'),
      ],
    },
    {
      id: 'protocol-development',
      title: t('services.protocolDevelopment.title'),
      description: [
        t('services.protocolDevelopment.description.0'),
      ],
    },
    {
      id: 'clinical-trial-management',
      title: t('services.clinicalTrialManagement.title'),
      description: [
        t('services.clinicalTrialManagement.description.0'),
      ],
    },
    {
      id: 'training-capacity-building',
      title: t('services.trainingCapacityBuilding.title'),
      description: [
        t('services.trainingCapacityBuilding.description.0'),
      ],
    },
    {
      id: 'medical-writing',
      title: t('services.medicalWriting.title'),
      description: [
        t('services.medicalWriting.description.0'),
        t('services.medicalWriting.description.1'),
      ],
    },
    {
      id: 'digital-eclinical-consulting',
      title: t('services.digitalEclinicalConsulting.title'),
      description: [
        t('services.digitalEclinicalConsulting.description.0'),
      ],
    },
  ];
  return (
    <div>
      {/* Page Header */}
      <section className="gradient-bg section-padding border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">{t('services.title')}</h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Side Navigation */}
            <aside className="lg:col-span-1">
              <nav className="sticky top-28 bg-accent-light rounded-xl p-6 shadow-soft" aria-label="Services navigation">
                <h2 className="text-xl font-bold text-primary mb-6">{t('common.services')}</h2>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.id}>
                      <a
                        href={`#${service.id}`}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:text-secondary rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-16">
                {services.map((service, index) => (
                  <div key={service.id} id={service.id} className="scroll-mt-28">
                    <div className="bg-accent-light rounded-2xl p-8 md:p-10 shadow-soft">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-xl">{index + 1}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                      </div>
                      <div className="space-y-6">
                        {service.description.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-lg text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

