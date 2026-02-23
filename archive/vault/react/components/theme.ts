// OUIRISE Theme Configuration
// Customizable color tokens for the tactical maroon aesthetic

export const theme = {
  colors: {
    // Core palette
    void: '#0a0a0a',
    tactical: '#141414',
    surface: '#1f1f1f',
    signal: '#f5f5f5',
    ghost: '#666666',
    
    // Maroon accents
    maroon: '#800000',
    brightMaroon: '#a50000',
    midDark: '#151515',
    
    // Utility
    border: '#1a1a1a',
    borderLight: '#333333',
  },
  
  fonts: {
    mono: "'JetBrains Mono', monospace",
    bebas: "'Bebas Neue', sans-serif",
    sans: "'Inter', sans-serif",
  },
  
  animation: {
    fadeIn: 'fadeIn 1s ease-out 0.5s forwards',
    pulse: 'pulse 2s infinite',
    unlock: 'unlock 1.5s ease-out forwards',
  },
  
  grid: {
    size: '40px',
    opacity: 0.06,
  },
} as const;

// Tailwind class mappings for common patterns
export const cx = {
  // Backgrounds
  bgVoid: 'bg-[#0a0a0a]',
  bgTactical: 'bg-[#141414]',
  bgSurface: 'bg-[#1f1f1f]',
  bgAlt: 'bg-[#0d0d0d]',
  
  // Text
  textSignal: 'text-[#f5f5f5]',
  textGhost: 'text-[#666666]',
  textMaroon: 'text-[#a50000]',
  
  // Borders
  borderSurface: 'border-[#1f1f1f]',
  borderSubtle: 'border-[#1a1a1a]',
  borderLight: 'border-[#333333]',
  borderMaroon: 'border-[#a50000]',
  
  // Interactive
  hoverMaroon: 'hover:text-[#a50000] hover:border-[#a50000]',
  cardHover: 'hover:border-[#a50000] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(128,0,0,0.3)]',
};

export type Theme = typeof theme;
