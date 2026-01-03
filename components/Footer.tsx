'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t-2 border-gray-200 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-secondary/3 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom py-12 md:py-16 relative z-10">
        {/* Disclaimer */}
        <div id="disclaimer" className="pt-0 pb-8 md:pb-12 mb-8 md:mb-12 relative overflow-hidden border-b border-gray-200">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated gradient lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-slide-right"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-slide-left"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent animate-slide-right"></div>
            
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            {/* Geometric shapes */}
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-bounce-slow"></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('disclaimer.title')}</h3>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {t('disclaimer.text1')}
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                {t('disclaimer.text2')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/innohealth-logo.jpeg"
                alt="InnoHealth Solutions & Consulting Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">InnoHealth Solutions & Consulting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">{t('common.quickLinks')}</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-gray-600 hover:text-secondary font-medium text-sm transition-all duration-300 inline-flex items-center group hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></span>
                  {t('common.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-secondary font-medium text-sm transition-all duration-300 inline-flex items-center group hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></span>
                  {t('common.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-secondary font-medium text-sm transition-all duration-300 inline-flex items-center group hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></span>
                  {t('common.services')}
                </Link>
              </li>
              <li>
                <Link href="/why-innohealth" className="text-gray-600 hover:text-secondary font-medium text-sm transition-all duration-300 inline-flex items-center group hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></span>
                  {t('common.whyInnoHealth')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-secondary font-medium text-sm transition-all duration-300 inline-flex items-center group hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></span>
                  {t('common.contactUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">{t('common.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@innohealth.com" className="text-gray-600 hover:text-secondary font-medium transition-all duration-300 hover:translate-x-1">
                  {t('contact.email')}
                </a>
              </li>
              <li className="flex items-start group">
                <svg className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+966123456789" className="text-gray-600 hover:text-secondary font-medium transition-all duration-300 hover:translate-x-1">
                  {t('contact.phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-600">
            {t('common.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
