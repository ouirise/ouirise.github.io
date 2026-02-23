// OUIRISE React Component Library
// Tactical UI components for Next.js migration

// Theme & Config
export { theme, cx } from './theme';
export type { Theme } from './theme';

// Types
export type {
  NavItem,
  ServiceTier,
  Deployment,
  TeamMember,
  Stat,
  ProcessStep,
  ContactInfo,
  SocialLink,
  MetaComment,
} from './types';

// Layout
export { Header } from './Header';
export { Footer, SimpleFooter } from './Footer';
export { Section, ConstrainedSection, SectionHeader } from './Section';

// Backgrounds
export { GridBackground, GrainOverlay, TacticalBackground } from './GridBackground';

// Hero
export { HomeHero, PageHero } from './Hero';

// Typography
export {
  Display,
  MonoHeading,
  Text,
  CodeComment,
  MetaBlock,
  Divider,
  Eyebrow,
} from './Typography';

// Buttons
export { Button, LinkButton } from './Button';

// Cards
export {
  Card,
  StatCard,
  TeamCard,
  DeploymentCard,
  ServiceCard,
} from './Card';

// Badges & Tags
export { Badge, TechTag, StatusIndicator } from './Badge';

// Process & Content
export { ProcessSteps, PhilosophyBlock, FeatureList } from './Process';

// Contact
export { OrgContactCard, InfoCard, ContactForm } from './Contact';
