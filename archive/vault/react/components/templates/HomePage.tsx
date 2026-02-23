// Home Page Template
// Replicates the landing page with Hero, About, Deployments, Services, Origin

import React from 'react';
import {
  TacticalBackground,
  Header,
  HomeHero,
  Section,
  SectionHeader,
  DeploymentCard,
  ServiceCard,
  SimpleFooter,
  MetaBlock,
  Text,
} from '../index';

const navItems = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'About', href: '/about/' },
  { label: 'Archive', href: '/archive/' },
  { label: 'Beepboop', href: '/beepboop/' },
  { label: 'Contact', href: '/contact/' },
];

const deployments = [
  {
    title: 'RISE INTEGRATION',
    services: ['Site Setup + Migration', 'Cloud Consulting', 'Multi-Platform System Design'],
    tags: ['Vercel', 'Supabase', 'DNS'],
  },
  {
    title: 'DATA BRIDGE',
    services: ['Custom CMS Platform', 'Documentation System', 'Horizontal Scaling Database'],
    tags: ['SQL', 'R2', 'MongoDB'],
  },
  {
    title: 'BUSINESS AUTOMATIONS',
    services: ['Content Writing', 'E-commerce Integration', 'Free Vision Development Session'],
    tags: ['Kimi-K2.5', 'Stripe', 'Shopify'],
  },
];

const services = [
  {
    tier: 'Prototype',
    title: 'Single Page Application',
    description:
      'Built to draft ideas and assist clients seeking cost-effective solutions without compromising quality. Perfect for landing pages and high-impact marketing assets.',
    price: '$200',
    features: ['Modern Cloud Deployment', 'Responsive Design', 'Speed Optimized'],
    highlighted: false,
  },
  {
    tier: 'Most Popular',
    title: 'The MVP Solution',
    description:
      'Scale your business with an interactive cloud solution. Balanced approach between availability and flexibility.',
    badge: 'Popular',
    features: ['Custom Database Integration', 'Server Management Included', 'Interactive Dashboards'],
    highlighted: true,
  },
  {
    tier: 'Enterprise',
    title: 'Big Data & AI',
    description:
      'Tailored for comprehensive support and prioritized attention. We build custom dashboards and AI agentic solutions for workflow productivity.',
    price: 'Starting at $10,000',
    features: ['AI Agent Workflows', 'Full-time Engineering Focus', 'Custom Analytics Suites'],
    highlighted: false,
  },
];

export const HomePage: React.FC = () => (
  <TacticalBackground showGrid>
    <Header logo="OUIRISE" navItems={navItems} />

    {/* Hero */}
    <HomeHero
      title="ACCESS GRANTED"
      subtitle="We bridge startup vision and enterprise-grade reality through agentic workflows and modern cloud architecture."
      tagline="Built for endurance. Field-tested in CLT."
      ctaText="Initiate Project"
      ctaHref="/contact/"
    />

    {/* About Section */}
    <Section variant="default" id="about">
      <div className="flex flex-col md:flex-row gap-8 md:gap-24">
        <div className="w-full md:w-1/2">
          <h2 className="text-lg md:text-xl mb-4 md:mb-6 mono">
            BLACK OWNED. <span className="text-[#a50000]">PURPOSE DRIVEN.</span>
          </h2>
          <div className="w-full h-64 bg-[#1f1f1f] border border-[#333333] flex items-center justify-center">
            <img src="/images/ouirise.webp" alt="OUI RISE INITIATIVE" className="max-w-full max-h-full" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 w-full md:w-1/2 pt-4 md:pt-16">
          <Text>We are a tactical response to mainstream data extraction architecture.</Text>
          <Text variant="maroon" className="font-semibold">
            Yes, OUI.
          </Text>
          <div className="space-y-2">
            <Text>We are researchers merging:</Text>
            <ul className="list-disc list-inside pl-2 space-y-1 text-[#666666] text-xs md:text-sm">
              <li>Data Privacy and Information Security</li>
              <li>Psychology of Business</li>
              <li>Bias-Resistant Systems</li>
              <li>Universal Cultural Exploration and AI training</li>
            </ul>
          </div>
          <MetaBlock
            items={[
              'FILENAME: 8K.0',
              'OPERATIONAL SYSTEMS STRATEGIST',
              'EXPANDING CURIOSITY SINCE 2019',
              'Artificial Understanding = AU',
            ]}
            variant="maroon"
            className="mt-4"
          />
        </div>
      </div>
    </Section>

    {/* Deployments */}
    <Section variant="default">
      <div className="mono text-sm md:text-xl text-center text-[#666666] mb-8 md:mb-12 uppercase tracking-widest px-2">
        CULTURAL INTERSECTIONALITY × (SCIENCE + ART + BUSINESS)
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {deployments.map((d, i) => (
          <DeploymentCard key={i} {...d} />
        ))}
      </div>
    </Section>

    {/* Services */}
    <Section variant="default">
      <SectionHeader
        title="What We Offer"
        subtitle="Engineered for scalability. Drafted for success."
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </Section>

    {/* Origin */}
    <Section variant="alt">
      <div className="max-w-3xl mx-auto">
        <h2 className="mono text-2xl md:text-4xl font-bold mb-6 md:mb-8 uppercase tracking-widest leading-tight">
          Field-Tested for Black Owned Business
        </h2>
        <div className="h-px w-24 bg-[#a50000] mb-6 md:mb-8" />
        <Text variant="muted" size="lg" className="mb-6">
          We didn't learn this in a garage. We learned it creating sites for clients, tutoring first,
          years of apprenticeship. We know what it takes to build a budget-conscious business from
          the ground up.
          <br />
          <br />
          <a
            href="https://www.tayloringraysofhope.com"
            className="text-[#a50000] hover:underline break-all"
          >
            Tayloring Rays of Hope 501(c)(3)
          </a>{' '}
          was our first AI integration. Seamless agent onboarding and content calibration.
          <br />
          <span className="mono text-xs mt-2 block text-[#666666]">Established: 2/1/2026</span>
        </Text>

        <h2 className="mono text-2xl md:text-4xl font-bold mb-6 md:mb-8 uppercase tracking-widest leading-tight mt-12">
          Battle-Tested for Fortune 500
        </h2>
        <Text variant="muted" size="lg" className="mb-8 md:mb-12">
          Years inside the machine taught us what breaks, what scales, and what survives. Now we
          operate outside. We bring that enterprise-grade rigor to startups and founders who need
          systems built for endurance.
        </Text>

        <MetaBlock
          items={['Black Business Background', 'Enterprise Agility', 'Built for Inevitability × Endurance']}
          variant="maroon"
        />
      </div>
    </Section>

    <SimpleFooter />
  </TacticalBackground>
);
