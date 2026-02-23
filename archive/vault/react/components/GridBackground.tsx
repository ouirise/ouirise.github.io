import React from 'react';

interface GridBackgroundProps {
  opacity?: number;
  size?: string;
  color?: string;
  className?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  opacity = 0.06,
  size = '40px',
  color = '128, 0, 0',
  className = '',
}) => (
  <div
    className={`fixed inset-0 pointer-events-none -z-10 ${className}`}
    style={{
      backgroundImage: `
        linear-gradient(rgba(${color}, ${opacity}) 1px, transparent 1px),
        linear-gradient(90deg, rgba(${color}, ${opacity}) 1px, transparent 1px)
      `,
      backgroundSize: `${size} ${size}`,
    }}
  />
);

// Noise/grain overlay
export const GrainOverlay: React.FC<{
  opacity?: number;
}> = ({ opacity = 0.03 }) => (
  <div
    className="fixed inset-0 pointer-events-none z-50"
    style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

// Combined background wrapper
export const TacticalBackground: React.FC<{
  children: React.ReactNode;
  showGrid?: boolean;
  showGrain?: boolean;
  className?: string;
}> = ({ children, showGrid = true, showGrain = false, className = '' }) => (
  <div className={`min-h-screen bg-[#0a0a0a] text-[#f5f5f5] antialiased ${className}`}>
    {showGrid && <GridBackground />}
    {showGrain && <GrainOverlay />}
    {children}
  </div>
);
