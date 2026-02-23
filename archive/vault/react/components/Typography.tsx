import React from 'react';

// Display heading (Bebas Neue)
export const Display: React.FC<{
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
}> = ({ children, size = 'lg', className = '', as: Component = 'h2' }) => {
  const sizes = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-7xl lg:text-8xl',
    xl: 'text-6xl md:text-8xl lg:text-9xl',
  };

  return (
    <Component
      className={`font-bebas tracking-tight leading-none ${sizes[size]} ${className}`}
    >
      {children}
    </Component>
  );
};

// Mono heading
export const MonoHeading: React.FC<{
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}> = ({ children, size = 'md', className = '', as: Component = 'h3' }) => {
  const sizes = {
    sm: 'text-xs uppercase tracking-widest',
    md: 'text-base md:text-lg uppercase tracking-tight',
    lg: 'text-2xl md:text-3xl font-bold uppercase tracking-tight',
  };

  return (
    <Component className={`mono ${sizes[size]} ${className}`}>{children}</Component>
  );
};

// Body text variants
export const Text: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'muted' | 'maroon';
  size?: 'sm' | 'base' | 'lg';
  className?: string;
}> = ({ children, variant = 'default', size = 'base', className = '' }) => {
  const variants = {
    default: 'text-[#f5f5f5]',
    muted: 'text-[#666666]',
    maroon: 'text-[#a50000]',
  };

  const sizes = {
    sm: 'text-xs md:text-sm',
    base: 'text-sm md:text-base',
    lg: 'text-base md:text-lg',
  };

  return <p className={`${variants[variant]} ${sizes[size]} ${className}`}>{children}</p>;
};

// Code/comment style text
export const CodeComment: React.FC<{
  children: React.ReactNode;
  variant?: 'default' | 'maroon';
  className?: string;
}> = ({ children, variant = 'default', className = '' }) => {
  const color = variant === 'maroon' ? 'text-[#a50000]' : 'text-[#666666]';

  return <span className={`mono text-xs ${color} ${className}`}>// {children}</span>;
};

// Meta info block
export const MetaBlock: React.FC<{
  items: string[];
  variant?: 'default' | 'maroon';
  className?: string;
}> = ({ items, variant = 'default', className = '' }) => {
  const borderColor = variant === 'maroon' ? 'border-[#a50000]' : 'border-[#1f1f1f]';

  return (
    <div className={`mono text-xs space-y-1 border-l-2 ${borderColor} pl-4 ${className}`}>
      {items.map((item, i) => (
        <p key={i} className={variant === 'maroon' ? 'text-[#a50000]' : 'text-[#666666]'}>
          // {item}
        </p>
      ))}
    </div>
  );
};

// Accent divider
export const Divider: React.FC<{
  width?: string;
  className?: string;
}> = ({ width = 'w-24', className = '' }) => (
  <div className={`h-px bg-[#a50000] ${width} ${className}`} />
);

// Eyebrow text (small uppercase label)
export const Eyebrow: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <p className={`mono text-xs text-[#666666] tracking-widest uppercase ${className}`}>
    {children}
  </p>
);
