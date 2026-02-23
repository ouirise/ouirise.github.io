import React from 'react';
import type { SocialLink } from './types';

interface FooterProps {
  logo?: string;
  socialLinks?: SocialLink[];
  meta?: string[];
  glyphs?: string;
}

export const Footer: React.FC<FooterProps> = ({
  logo = 'OUIRISE',
  socialLinks = [],
  meta = ['2026 // ALL WAYS', 'Technical Organization // OUI'],
  glyphs = '🌫️🌒',
}) => (
  <footer className="py-12 px-4 md:px-6 bg-[#0a0a0a] border-t border-[#1a1a1a]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Logo */}
      <div className="font-bebas text-2xl text-[#a50000] tracking-wider">
        {logo}
      </div>

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div className="flex gap-4 md:gap-6 order-3 md:order-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mono text-xs text-[#666666] hover:text-[#a50000] transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Meta */}
      <div className="mono text-xs text-[#666666] text-center md:text-right space-y-1 order-2 md:order-3">
        <p>
          {glyphs} {meta[0]}
        </p>
        {meta.slice(1).map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  </footer>
);

// Simple variant for minimal footer
export const SimpleFooter: React.FC<{
  text?: string;
}> = ({ text = 'OUIRISE INITIATIVE' }) => (
  <footer className="py-8 md:py-12 px-4 md:px-6 bg-[#0a0a0a] border-t border-[#1a1a1a]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="mono text-sm font-semibold text-[#a50000]">{text}</div>
      <div className="mono text-xs text-[#666666] text-center md:text-right">
        <p>// Built by 00 + Kimi-K2.5</p>
        <p>// MAROON TACTICAL v5.1</p>
      </div>
    </div>
  </footer>
);
