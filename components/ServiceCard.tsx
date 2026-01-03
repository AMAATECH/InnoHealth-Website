'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  const { t } = useLanguage();
  const content = (
    <div className="bg-white border border-gray-200 rounded-xl p-8 h-full card-hover shadow-soft group">
      <div className="mb-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            {icon ? (
              <div className="w-6 h-6 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:max-w-full [&>svg]:max-h-full">
                {icon}
              </div>
            ) : (
              <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 text-base">{description}</p>
      {href && (
        <div className="mt-auto">
          <Link
            href={href}
            className="text-secondary hover:text-secondary-dark font-semibold text-sm inline-flex items-center group/link"
          >
            {t('common.learnMore')}
            <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }

  return content;
}
