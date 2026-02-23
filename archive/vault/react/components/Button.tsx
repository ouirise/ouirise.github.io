import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'mono uppercase tracking-widest transition-all duration-200 font-semibold';
  
  const variants = {
    primary: 'border border-[#a50000] bg-transparent text-[#f5f5f5] hover:bg-[#a50000] hover:shadow-[0_0_20px_rgba(165,0,0,0.4)]',
    solid: 'bg-[#a50000] text-[#f5f5f5] hover:bg-[#800000]',
    outline: 'border border-[#1f1f1f] text-[#f5f5f5] hover:border-[#a50000] hover:text-[#a50000]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Link button variant for navigation
interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'mono uppercase tracking-widest transition-all duration-200 font-semibold inline-block text-center';
  
  const variants = {
    primary: 'border border-[#a50000] bg-transparent text-[#f5f5f5] hover:bg-[#a50000] hover:shadow-[0_0_20px_rgba(165,0,0,0.4)]',
    solid: 'bg-[#a50000] text-[#f5f5f5] hover:bg-[#800000]',
    outline: 'border border-[#1f1f1f] text-[#f5f5f5] hover:border-[#a50000] hover:text-[#a50000]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };
  
  return (
    <a
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
