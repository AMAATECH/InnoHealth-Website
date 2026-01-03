'use client';

import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

// Service Icons - Each representing its specific service
const RegulatoryIcon = () => (
  <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ProtocolIcon = () => (
  <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const ClinicalTrialIcon = () => (
  <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const TrainingIcon = () => (
  <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const MedicalWritingIcon = () => (
  <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const DigitalIcon = () => (
  <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.regulatoryConsulting.title'),
      description: t('services.regulatoryConsulting.description.0'),
      href: '/services#regulatory-consulting',
      icon: <RegulatoryIcon />,
    },
    {
      title: t('services.protocolDevelopment.title'),
      description: t('services.protocolDevelopment.description.0'),
      href: '/services#protocol-development',
      icon: <ProtocolIcon />,
    },
    {
      title: t('services.clinicalTrialManagement.title'),
      description: t('services.clinicalTrialManagement.description.0'),
      href: '/services#clinical-trial-management',
      icon: <ClinicalTrialIcon />,
    },
    {
      title: t('services.trainingCapacityBuilding.title'),
      description: t('services.trainingCapacityBuilding.description.0'),
      href: '/services#training-capacity-building',
      icon: <TrainingIcon />,
    },
    {
      title: t('services.medicalWriting.title'),
      description: t('services.medicalWriting.description.0'),
      href: '/services#medical-writing',
      icon: <MedicalWritingIcon />,
    },
    {
      title: t('services.digitalEclinicalConsulting.title'),
      description: t('services.digitalEclinicalConsulting.description.0'),
      href: '/services#digital-eclinical-consulting',
      icon: <DigitalIcon />,
    },
  ];

  return (
    <div>
      {/* Hero Section with Logo */}
      <section className="gradient-bg section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo Display */}
            <div className="mb-10 flex justify-center">
              <div className="relative">
                <Image
                  src="/innohealth-logo.jpeg"
                  alt="InnoHealth Solutions & Consulting Logo"
                  width={450}
                  height={180}
                  className="h-36 md:h-44 lg:h-52 w-auto object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
            
            <h1 className="sr-only">InnoHealth Solutions & Consulting</h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
              {t('home.hero.tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                {t('home.hero.ourServicesButton')}
              </Link>
              <Link href="/contact" className="btn-secondary">
                {t('home.hero.getInTouchButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About InnoHealth Intro */}
      <section className="bg-white section-padding relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-slide-right"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-slide-left"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent animate-slide-right"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">{t('home.about.title')}</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="relative">
              {/* Content with wider layout */}
              <div className="space-y-8 md:space-y-10">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed text-center font-light max-w-5xl mx-auto">
                  {t('home.about.description1')}
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                  {t('home.about.description2')}
                </p>
              </div>
              
              <div className="text-center mt-12">
                <Link href="/about" className="btn-secondary inline-block">
                  {t('common.learnMoreAboutUs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gradient-to-b from-white to-accent-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('home.services.title')}</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              {t('common.viewAllServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why InnoHealth Preview */}
      <section className="bg-white section-padding relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-slide-right"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-slide-left"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent animate-slide-right"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">{t('home.whyInnoHealth.title')}</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="relative">
              {/* Content with wider layout */}
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed text-center font-light max-w-5xl mx-auto">
                {t('home.whyInnoHealth.description')}
              </p>
              
              <div className="text-center mt-12">
                <Link href="/why-innohealth" className="btn-primary inline-block">
                  {t('common.learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
