import React, { useState } from 'react';
import type { NavItem } from './types';

interface HeaderProps {
  logo?: string;
  navItems: NavItem[];
  version?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo = 'OUIRISE',
  navItems,
  version = 'v2.6.7',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-bebas text-2xl tracking-wider text-[#a50000] hover:text-[#f5f5f5] transition-colors border-2 border-[#a50000] px-3 py-1"
        >
          {logo}
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 border border-[#1f1f1f] hover:bg-[#1f1f1f] transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" strokeWidth="1.5" />
                <line x1="4" y1="12" x2="20" y2="12" strokeWidth="1.5" />
                <line x1="4" y1="18" x2="20" y2="18" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen
              ? 'fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-[#141414] border-t border-[#1f1f1f] flex-col p-8'
              : 'hidden'
          } md:flex md:static md:h-auto md:bg-transparent md:border-none md:flex-row md:p-0 md:w-auto mono text-sm uppercase tracking-widest gap-6 md:gap-8 items-start md:items-center`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link py-2 md:py-0 relative transition-colors duration-200 ${
                item.isActive ? 'text-[#a50000]' : 'hover:text-[#a50000]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-px bg-[#a50000] transition-all duration-200 ${
                  item.isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}

          {/* Mobile meta */}
          <div className="md:hidden mt-8 text-xs text-[#666666] mono space-y-1">
            <p>// OUIRISE NAV</p>
            <p>// {version}</p>
          </div>
        </nav>
      </div>
    </header>
  );
};
