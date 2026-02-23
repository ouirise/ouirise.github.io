import React from 'react';
import type { ProcessStep } from './types';

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
  footer?: string;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps,
  title,
  footer,
}) => (
  <div className="max-w-3xl">
    {title && (
      <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-[#a50000] mb-12">
        {title}
      </h2>
    )}

    <div className="space-y-8">
      {steps.map((step, i) => (
        <div
          key={i}
          className="border-l-2 border-[#1f1f1f] pl-6 py-2 transition-all duration-300 hover:border-l-[#a50000] hover:pl-8"
        >
          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-bebas text-2xl text-[#a50000]">{step.number}</span>
            <h3 className="text-[#f5f5f5] font-semibold text-lg">{step.title}</h3>
          </div>
          <p className="text-[#666666] text-sm leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>

    {footer && (
      <div className="mt-12 pt-8 border-t border-[#1f1f1f]">
        <p className="mono text-sm text-[#a50000]">// {footer}</p>
      </div>
    )}
  </div>
);

// Philosophy block quote
export const PhilosophyBlock: React.FC<{
  quote: string;
  attribution: string;
}> = ({ quote, attribution }) => (
  <div className="border-l-4 border-[#a50000] bg-gradient-to-r from-[rgba(128,0,0,0.1)] to-transparent p-6 md:p-8 flex flex-col justify-center">
    <p className="text-[#f5f5f5] text-lg md:text-xl leading-relaxed mb-4">"{quote}"</p>
    <p className="mono text-sm text-[#a50000]">— {attribution}</p>
  </div>
);

// Feature list with plus icons
export const FeatureList: React.FC<{
  features: string[];
}> = ({ features }) => (
  <ul className="space-y-3 text-xs md:text-sm">
    {features.map((feature, i) => (
      <li key={i} className="flex items-center gap-3 text-[#f5f5f5]">
        <span className="text-[#a50000] mono">+</span>
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);
