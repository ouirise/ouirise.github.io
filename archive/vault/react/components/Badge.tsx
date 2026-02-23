import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'maroon' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  const baseStyles = 'mono font-bold uppercase inline-block';

  const variants = {
    default: 'bg-[#1f1f1f] text-[#f5f5f5] border border-[#333333]',
    maroon: 'bg-[#a50000] text-[#f5f5f5]',
    outline: 'bg-transparent text-[#f5f5f5] border border-[#1f1f1f]',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-1',
    md: 'text-xs px-3 py-1',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

// Tech stack tag
export const TechTag: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <span className="mono text-[10px] bg-[#1f1f1f] px-2 py-1 text-[#666666] border border-[#333333]">
    {children}
  </span>
);

// Status indicator with pulse
export const StatusIndicator: React.FC<{
  text: string;
  status?: 'online' | 'offline' | 'busy';
}> = ({ text, status = 'online' }) => {
  const colors = {
    online: 'bg-[#a50000]',
    offline: 'bg-[#666666]',
    busy: 'bg-[#ff6b00]',
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`w-2 h-2 rounded-full ${colors[status]} animate-pulse`}
        style={{ animation: 'pulse 2s infinite' }}
      />
      <span className="mono text-xs text-[#666666]">{text}</span>
    </div>
  );
};
