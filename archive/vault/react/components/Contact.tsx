import React from 'react';
import { Card } from './Card';
import type { ContactInfo } from './types';

interface ContactCardProps {
  info: ContactInfo;
  imageSrc?: string;
  tagline?: string;
}

export const OrgContactCard: React.FC<ContactCardProps> = ({
  info,
  imageSrc,
  tagline = 'Infrastructure without extraction. Data-sovereign systems for operators who own their stack.',
}) => (
  <Card padding="lg" className="mb-6">
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      {imageSrc && (
        <div className="w-full md:w-1/3">
          <img
            src={imageSrc}
            alt="OUI RISE INITIATIVE"
            className="w-full h-48 md:h-full object-cover border border-[#333333]"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="font-bebas text-3xl md:text-4xl tracking-wide mb-2">OUIRISE INITIATIVE</h3>
        <p className="mono text-xs text-[#a50000] uppercase tracking-wider mb-4">
          Technical Organization
        </p>
        <p className="text-[#666666] text-sm mb-6">{tagline}</p>

        <div className="space-y-3">
          <a
            href={`mailto:${info.email}`}
            className="flex items-center gap-3 hover:text-[#a50000] transition-colors"
          >
            <span className="text-[#a50000]">✉</span>
            <span className="text-sm md:text-base break-all">{info.email}</span>
          </a>
          <a
            href={`tel:${info.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-3 hover:text-[#a50000] transition-colors"
          >
            <span className="text-[#a50000]">☎</span>
            <span className="text-sm md:text-base">{info.phone}</span>
          </a>
        </div>
      </div>
    </div>
  </Card>
);

// Info card for location/availability
export const InfoCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <Card padding="md">
    <h3 className="mono text-xs text-[#666666] uppercase tracking-wider mb-2">{title}</h3>
    {children}
  </Card>
);

// Contact form component
interface ContactFormProps {
  action?: string;
  method?: 'get' | 'post';
  projectTypes?: Array<{ value: string; label: string }>;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  action = '/404/404.html',
  method = 'get',
  projectTypes = [
    { value: '', label: 'Select project type...' },
    { value: 'prototype', label: 'Prototype / SPA ($200)' },
    { value: 'mvp', label: 'MVP Cloud Solution' },
    { value: 'enterprise', label: 'Enterprise / Big Data + AI' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' },
  ],
}) => {
  const inputStyles =
    'w-full px-4 py-3 text-sm bg-[#141414] border border-[#1f1f1f] text-[#f5f5f5] transition-all duration-200 focus:outline-none focus:border-[#a50000] focus:shadow-[0_0_10px_rgba(165,0,0,0.3)] placeholder:text-[#666666]';

  return (
    <form action={action} method={method} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mono text-xs text-[#666666] uppercase tracking-wider mb-2">
            Name
          </label>
          <input type="text" name="name" required className={inputStyles} placeholder="Your name" />
        </div>
        <div>
          <label className="block mono text-xs text-[#666666] uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className={inputStyles}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block mono text-xs text-[#666666] uppercase tracking-wider mb-2">
          Project Type
        </label>
        <select name="project_type" className={inputStyles}>
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mono text-xs text-[#666666] uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={6}
          required
          className={`${inputStyles} resize-none`}
          placeholder="Describe your project, timeline, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#a50000] text-[#f5f5f5] mono text-sm uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-[#800000] hover:shadow-[0_0_20px_rgba(165,0,0,0.4)]"
      >
        Send Message
      </button>
    </form>
  );
};
