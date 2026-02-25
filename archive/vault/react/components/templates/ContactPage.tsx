// Contact Page Template
// Replicates the contact page with Org Card, Info Cards, and Form

import React from 'react';
import {
  TacticalBackground,
  Header,
  PageHero,
  Section,
  OrgContactCard,
  InfoCard,
  ContactForm,
  Footer,
} from '../index';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Archive', href: '/archive/' },
  { label: 'Beepboop', href: '/beepboop/' },
  { label: 'Contact', href: '/contact/', isActive: true },
];

const contactInfo = {
  email: 'ouiRise@proton.me',
  phone: '(980) 680-6214',
  location: 'Charlotte, NC',
  coordinates: '35.2271° N, 80.8431° W',
};

export function ContactPage() {
return (
  <TacticalBackground showGrid>
    <Header logo="OUIRISE" navItems={navItems} />

    <PageHero
      eyebrow="// EST. 2025 // CLT // CONTACT"
      title="REQUEST"
      highlight="ACCESS"
      description="Ready to build infrastructure without extraction? Reach out. We'll respond within 24 hours."
      minHeight="40vh"
    />

    {/* Org Contact Card */}
    <Section>
      <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-[#a50000] mb-12">
        DIRECT LINES
      </h2>

      <OrgContactCard
        info={contactInfo}
        imageSrc="/images/ouirise.webp"
        tagline="Infrastructure without extraction. Data-sovereign systems for operators who own their stack."
      />

      {/* Location Info Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <InfoCard title="Location">
          <p className="text-lg md:text-xl mb-1 text-[#f5f5f5]">Charlotte, NC</p>
          <p className="text-[#666666] text-xs">
            Operating out of CLT. Available for remote work worldwide.
          </p>
          <p className="mono text-xs text-[#a50000] mt-3">
            // COORDINATES: {contactInfo.coordinates}
          </p>
        </InfoCard>

        <InfoCard title="Availability">
          <div className="mono text-sm space-y-1 text-[#f5f5f5]">
            <p>// TIMEZONE: EST</p>
            <p>// RESPONSE: &lt; 24 HOURS</p>
            <p>// HOURS: MON - FRI</p>
            <p>// EMERGENCY: CALL DIRECT</p>
          </div>
        </InfoCard>
      </div>
    </Section>

    {/* Contact Form */}
    <Section variant="alt">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bebas text-3xl md:text-4xl tracking-wide text-[#a50000] mb-4">
          INITIATE PROJECT
        </h2>
        <p className="text-[#666666] mb-12">
          Tell us what you're building. We'll assess the terrain and respond with a plan.
        </p>

        <ContactForm action="/404/404.html" method="get" />

        <p className="mono text-xs text-[#666666] mt-6 text-center">
          // Form temporarily redirects to 404. For direct contact, use the email above.
        </p>
      </div>
    </Section>

    <Footer />
  </TacticalBackground>
);
} 