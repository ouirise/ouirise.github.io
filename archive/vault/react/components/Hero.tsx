import React from 'react';
import { LinkButton } from './Button';

// Full-height hero for home page
interface HomeHeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
  showLockIcon?: boolean;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  title,
  subtitle,
  tagline,
  ctaText,
  ctaHref,
  showLockIcon = true,
}) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20 md:pt-16 relative overflow-hidden">
    <div className="max-w-3xl mx-auto text-center">
      {showLockIcon && (
        <div className="mb-6 md:mb-8 flex justify-center">
          <svg
            className="w-12 h-12 md:w-16 md:h-16 text-[#a50000]"
            style={{ animation: 'unlock 1.5s ease-out forwards' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      )}

      <h1
        className="mono text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight"
        style={{ animation: 'fadeIn 1s ease-out 0.5s forwards', opacity: 0 }}
      >
        {title}
      </h1>

      <div
        className="h-px w-24 md:w-32 bg-[#a50000] mx-auto mb-6 md:mb-8"
        style={{ animation: 'fadeIn 1s ease-out 0.5s forwards', opacity: 0 }}
      />

      <p
        className="text-base md:text-xl text-[#666666] mb-4 max-w-2xl mx-auto leading-relaxed px-2 md:px-0"
        style={{ animation: 'fadeIn 1s ease-out 0.5s forwards', opacity: 0 }}
      >
        {subtitle}
      </p>

      <p
        className="text-base md:text-lg text-[#666666] mb-8 md:mb-12"
        style={{ animation: 'fadeIn 1s ease-out 0.5s forwards', opacity: 0 }}
      >
        {tagline}
      </p>

      <div style={{ animation: 'fadeIn 1s ease-out 0.5s forwards', opacity: 0 }}>
        <LinkButton href={ctaHref} variant="primary" size="lg">
          {ctaText}
        </LinkButton>
      </div>
    </div>

    <style>{`
      @keyframes unlock {
        0% { transform: rotate(0deg); opacity: 0; }
        50% { transform: rotate(-10deg); opacity: 1; }
        100% { transform: rotate(0deg); opacity: 1; }
      }
      @keyframes fadeIn {
        to { opacity: 1; }
      }
    `}</style>
  </section>
);

// Compact hero for sub-pages
interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  minHeight?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  minHeight = '40vh',
}) => (
  <section
    className="flex flex-col justify-center px-4 md:px-6 pt-24 pb-12 border-b border-[#1a1a1a]"
    style={{ minHeight }}
  >
    <div className="max-w-7xl mx-auto w-full">
      {eyebrow && (
        <p className="mono text-xs text-[#666666] mb-4 tracking-widest">{eyebrow}</p>
      )}
      <h1 className="font-bebas text-5xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-[#a50000]">{highlight}</span>
          </>
        )}
      </h1>
      <p className="text-[#666666] text-base md:text-lg max-w-2xl leading-relaxed">
        {description}
      </p>
    </div>
  </section>
);
