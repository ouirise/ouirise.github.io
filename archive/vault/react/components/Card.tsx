import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  borderColor?: 'default' | 'maroon';
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  padding = 'md',
  borderColor = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = 'bg-[#141414] border transition-all duration-300';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const borderColors = {
    default: 'border-[#1f1f1f]',
    maroon: 'border-[#a50000]',
  };
  
  const hoverStyles = hover
    ? 'hover:border-[#a50000] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(128,0,0,0.2)]'
    : '';
  
  return (
    <div
      className={`${baseStyles} ${paddings[padding]} ${borderColors[borderColor]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Specialized card variants
export const StatCard: React.FC<{
  value: string;
  label: string;
}> = ({ value, label }) => (
  <Card className="text-center p-6">
    <div className="font-bebas text-4xl md:text-5xl text-[#a50000] mb-2">{value}</div>
    <div className="mono text-xs text-[#666666] uppercase tracking-wider">{label}</div>
  </Card>
);

export const TeamCard: React.FC<{
  name: string;
  role: string;
  description: string;
  glyph: string;
  focus: string;
}> = ({ name, role, description, glyph, focus }) => (
  <Card padding="md" className="group">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-bebas text-2xl tracking-wide">{name}</h3>
      <span className="text-[#a50000] text-lg">{glyph}</span>
    </div>
    <div className="mono text-xs text-[#a50000] uppercase tracking-wider mb-4">{role}</div>
    <p className="text-[#666666] text-sm leading-relaxed mb-4">{description}</p>
    <div className="mono text-xs text-[#666666] pt-4 border-t border-[#1f1f1f]">
      {focus}
    </div>
  </Card>
);

export const DeploymentCard: React.FC<{
  title: string;
  services: string[];
  tags: string[];
}> = ({ title, services, tags }) => (
  <Card padding="md" className="group cursor-pointer bg-[#0f0f0f]">
    <div className="aspect-video bg-[#1f1f1f] mb-4 overflow-hidden border border-[#333333]">
      <div className="w-full h-full bg-gradient-to-br from-[#800000] to-[#1a1a1a] opacity-80 group-hover:scale-105 transition-transform duration-500" />
    </div>
    <h3 className="mono text-base md:text-lg font-semibold mb-2 uppercase tracking-tight text-[#f5f5f5]">
      {title}
    </h3>
    <div className="space-y-1 mono text-xs text-[#666666] mb-4">
      {services.map((service, i) => (
        <p key={i}>// {service}</p>
      ))}
    </div>
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="mono text-[10px] bg-[#1f1f1f] px-2 py-1 text-[#666666] border border-[#333333]"
        >
          {tag}
        </span>
      ))}
    </div>
  </Card>
);

export const ServiceCard: React.FC<{
  tier: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  badge?: string;
  highlighted?: boolean;
}> = ({ tier, title, description, features, price, badge, highlighted = false }) => (
  <Card
    padding="lg"
    borderColor={highlighted ? 'maroon' : 'default'}
    className="flex flex-col relative"
    hover={!highlighted}
  >
    {(price || badge) && (
      <div
        className={`absolute top-0 right-0 ${
          highlighted ? 'bg-[#a50000]' : 'bg-[#1f1f1f] border border-[#333333]'
        } mono text-[10px] font-bold px-3 py-1 uppercase`}
      >
        {price || badge}
      </div>
    )}
    <div className="mb-6">
      <h3 className="mono text-xs uppercase tracking-widest text-[#666666] mb-2">{tier}</h3>
      <div className="mono text-xl md:text-2xl font-bold text-[#f5f5f5]">{title}</div>
    </div>
    <p className="text-[#666666] mb-8 text-xs md:text-sm leading-relaxed">{description}</p>
    <ul className="space-y-3 mb-8 flex-grow text-xs md:text-sm">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-[#f5f5f5]">
          <span className="text-[#a50000] mono">+</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      variant={highlighted ? 'solid' : 'outline'}
      size="md"
      className="w-full"
    >
      Select
    </Button>
  </Card>
);
