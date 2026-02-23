import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'alt' | 'tactical';
  border?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  border = true,
  padding = 'lg',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-[#0a0a0a]',
    alt: 'bg-[#0d0d0d]',
    tactical: 'bg-[#141414]',
  };

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const borderClass = border ? 'border-b border-[#1a1a1a]' : '';

  return (
    <section
      className={`${variants[variant]} ${paddings[padding]} px-4 md:px-6 ${borderClass} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

// Constrained section for narrower content
export const ConstrainedSection: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  border = true,
  padding = 'lg',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-[#0a0a0a]',
    alt: 'bg-[#0d0d0d]',
    tactical: 'bg-[#141414]',
  };

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const borderClass = border ? 'border-b border-[#1a1a1a]' : '';

  return (
    <section
      className={`${variants[variant]} ${paddings[padding]} px-4 md:px-6 ${borderClass} ${className}`}
      {...props}
    >
      <div className="max-w-3xl mx-auto">{children}</div>
    </section>
  );
};

// Section header component
export const SectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  centered?: boolean;
}> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-[#a50000] mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className={`text-[#666666] ${centered ? 'max-w-2xl mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </div>
);
