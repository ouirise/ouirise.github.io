// Type definitions for OUIRISE components

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ServiceTier {
  name: string;
  subtitle: string;
  description: string;
  price?: string;
  badge?: string;
  features: string[];
  highlighted?: boolean;
}

export interface Deployment {
  title: string;
  services: string[];
  tags: string[];
  gradient?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  glyph: string;
  focus: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  coordinates: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface MetaComment {
  text: string;
  variant?: 'default' | 'maroon';
}
