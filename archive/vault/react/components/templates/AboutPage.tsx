// About Page Template
// Replicates the about page with Hero, Mission, Stats, Team, Process

import React from 'react';
import {
  TacticalBackground,
  Header,
  PageHero,
  Section,
  SectionHeader,
  StatCard,
  TeamCard,
  ProcessSteps,
  PhilosophyBlock,
  Footer,
} from '../index';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/', isActive: true },
  { label: 'Archive', href: '/archive/' },
  { label: 'Beepboop', href: '/beepboop/' },
  { label: 'Contact', href: '/contact/' },
];

const stats = [
  { value: '06', label: 'Years Collective XP' },
  { value: '24', label: 'Projects Deployed' },
  { value: '$0', label: 'Vendor Lock-in' },
  { value: '99.9%', label: 'Uptime Target' },
];

const team = [
  {
    name: '0KK',
    role: 'Principal Architect',
    description:
      'Systems design, protocol development, client relations. Background in enterprise infrastructure and community-focused tech. CLT-based.',
    glyph: '🌫️🌒',
    focus: 'Focus: Anti-extractive architecture',
  },
  {
    name: 'KIMI-K2.5',
    role: 'AI Systems Partner',
    description:
      'Large language model integration, code generation, documentation systems. Local-first deployment specialist. Technical twin for rapid prototyping.',
    glyph: '🌫️🌒',
    focus: 'Focus: Agentic workflows',
  },
  {
    name: 'THE FOG',
    role: 'Infrastructure Layer',
    description:
      'Distributed systems architecture. GHPages, Vercel Edge, MongoDB, R2. We fragment across free tiers and open protocols to minimize client burn rate.',
    glyph: '🌫️🌒',
    focus: 'Status: Active',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'Technical assessment of current stack. Vendor analysis, dependency mapping, security posture. Clear documentation of extraction risks.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Portable infrastructure. Version-controlled, documented, client-owned repositories. No proprietary black boxes. Clean handoffs.',
  },
  {
    number: '03',
    title: 'Transfer',
    description:
      'Knowledge transfer, documentation, admin access. We stay available for optimization but you own the keys. No maintenance hostages.',
  },
];

export const AboutPage: React.FC = () => (
  <TacticalBackground showGrid>
    <Header logo="OUIRISE" navItems={navItems} />

    <PageHero
      eyebrow="// EST. 2025 // CLT // ORGANIZATION"
      title="INFRASTRUCTURE"
      highlight="WITHOUT EXTRACTION"
      description="Technical organization building data-sovereign systems. No lock-in. No surveillance architecture. Just efficient lanes for operators who own their stack."
      minHeight="60vh"
    />

    {/* Mission */}
    <Section>
      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-[#a50000] mb-6">
            THE ORGANIZATION
          </h2>
          <div className="space-y-4 text-[#666666]">
            <p className="text-[#f5f5f5] text-lg">
              Most agencies extract. We <span className="text-[#a50000] font-semibold">build infrastructure</span>.
            </p>
            <p>
              Started in 2025 when we saw too many operators locked into platforms that fight back,
              spy back, or die back. We don't do that here.
            </p>
            <p>
              We optimize for <span className="text-[#f5f5f5]">minimum viable dependencies</span>. Free
              tiers, open protocols, portable data. You own it. We maintain it. No black boxes.
            </p>
          </div>
        </div>

        <PhilosophyBlock
          quote="Code is code. Contracts are clear. Ownership is non-negotiable."
          attribution="Operating Principle 0"
        />
      </div>
    </Section>

    {/* Stats */}
    <Section variant="alt">
      <SectionHeader title="CAPACITY" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>
    </Section>

    {/* Team */}
    <Section>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-[#a50000] mb-2">
            OPERATORS
          </h2>
          <p className="mono text-xs text-[#666666]">// Core organization members</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
    </Section>

    {/* Process */}
    <Section variant="alt">
      <ProcessSteps
        title="ENGAGEMENT MODEL"
        steps={processSteps}
        footer="Transparent billing. Portable code. Zero lock-in."
      />
    </Section>

    <Footer />
  </TacticalBackground>
);
