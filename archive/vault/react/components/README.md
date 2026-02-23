# OUIRISE React Component Library

Tactical UI component library for the OUIRISE Initiative website. Built for Next.js migration with TailwindCSS.

## 🎨 Theme

The design system uses a **Maroon Tactical** aesthetic:

| Token | Value | Usage |
|-------|-------|-------|
| `void` | `#0a0a0a` | Primary background |
| `tactical` | `#141414` | Card backgrounds |
| `surface` | `#1f1f1f` | Elevated surfaces |
| `signal` | `#f5f5f5` | Primary text |
| `ghost` | `#666666` | Muted text |
| `maroon` | `#800000` | Dark accent |
| `brightMaroon` | `#a50000` | Primary accent |

## 📦 Components

### Layout

#### `TacticalBackground`
Root wrapper with optional grid and grain overlays.

```tsx
<TacticalBackground showGrid showGrain>
  <Header />
  <main>{children}</main>
  <Footer />
</TacticalBackground>
```

#### `Header`
Fixed navigation with mobile hamburger menu.

```tsx
const navItems = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'About', href: '/about/' },
  // ...
];

<Header logo="OUIRISE" navItems={navItems} version="v2.6.7" />
```

#### `Footer` / `SimpleFooter`
Standard or minimal footer variants.

### Hero Sections

#### `HomeHero`
Full-height hero for landing page.

```tsx
<HomeHero
  title="ACCESS GRANTED"
  subtitle="We bridge startup vision..."
  tagline="Built for endurance. Field-tested in CLT."
  ctaText="Initiate Project"
  ctaHref="/contact/"
/>
```

#### `PageHero`
Compact hero for sub-pages.

```tsx
<PageHero
  eyebrow="// EST. 2025"
  title="INFRASTRUCTURE"
  highlight="WITHOUT EXTRACTION"
  description="Technical organization..."
/>
```

### Cards

#### `Card`
Base card with hover effects.

```tsx
<Card hover padding="md" borderColor="default">
  Content
</Card>
```

#### `ServiceCard`
Pricing tier card.

```tsx
<ServiceCard
  tier="Most Popular"
  title="The MVP Solution"
  description="Scale your business..."
  badge="Popular"
  features={['Feature 1', 'Feature 2']}
  highlighted
/>
```

#### `DeploymentCard`
Project showcase card.

```tsx
<DeploymentCard
  title="RISE INTEGRATION"
  services={['Site Setup', 'Cloud Consulting']}
  tags={['Vercel', 'Supabase']}
/>
```

#### `TeamCard`
Team member card.

```tsx
<TeamCard
  name="0KK"
  role="Principal Architect"
  description="Systems design..."
  glyph="🌫️🌒"
  focus="Focus: Anti-extractive architecture"
/>
```

#### `StatCard`
Statistics display.

```tsx
<StatCard value="06" label="Years Collective XP" />
```

### Buttons

```tsx
<Button variant="primary" size="md">Click</Button>
<LinkButton href="/contact" variant="solid" size="lg">Go</LinkButton>
```

Variants: `primary`, `solid`, `outline`
Sizes: `sm`, `md`, `lg`

### Sections

```tsx
<Section variant="default" padding="lg" border>
  <SectionHeader title="CAPACITY" subtitle="Our capabilities" centered />
  {/* Content */}
</Section>
```

Variants: `default`, `alt`, `tactical`

### Typography

```tsx
<Display size="xl">Huge Text</Display>
<MonoHeading size="md">Section Title</MonoHeading>
<Text variant="muted" size="lg">Body copy</Text>
<CodeComment variant="maroon">Meta info</CodeComment>
<MetaBlock items={['Item 1', 'Item 2']} />
<Divider width="w-32" />
<Eyebrow>Label</Eyebrow>
```

### Contact Components

```tsx
<OrgContactCard
  info={{
    email: 'ouiriseinitiative@yahoo.com',
    phone: '(980) 680-6214',
    location: 'Charlotte, NC',
    coordinates: '35.2271° N, 80.8431° W'
  }}
  imageSrc="/images/ouirise.webp"
/>

<ContactForm action="/api/contact" method="post" />
```

### Process Steps

```tsx
<ProcessSteps
  title="ENGAGEMENT MODEL"
  steps={[
    { number: '01', title: 'Audit', description: '...' },
    { number: '02', title: 'Build', description: '...' },
  ]}
  footer="Transparent billing. Portable code. Zero lock-in."
/>
```

## 🧩 Page Templates

Pre-built page layouts in `/templates/`:

- `HomePage.tsx` - Landing page
- `AboutPage.tsx` - Organization info
- `ContactPage.tsx` - Contact form

## 🎯 Usage Example

```tsx
import { 
  TacticalBackground, 
  Header, 
  PageHero, 
  Section,
  Footer 
} from './components/react';

export default function MyPage() {
  return (
    <TacticalBackground showGrid>
      <Header logo="OUIRISE" navItems={navItems} />
      <PageHero 
        title="ABOUT" 
        highlight="US" 
        description="Who we are" 
      />
      <Section>
        {/* Content */}
      </Section>
      <Footer />
    </TacticalBackground>
  );
}
```

## 🔧 Customization

Edit `theme.ts` to change colors:

```ts
export const theme = {
  colors: {
    void: '#0a0a0a',
    brightMaroon: '#a50000', // Change accent color
    // ...
  }
};
```

## 📁 File Structure

```
components/react/
├── index.ts           # Main exports
├── theme.ts           # Color tokens
├── types.ts           # TypeScript types
├── Button.tsx         # Button components
├── Card.tsx           # Card variants
├── Header.tsx         # Navigation
├── Footer.tsx         # Footer variants
├── Hero.tsx           # Hero sections
├── Section.tsx        # Layout sections
├── Typography.tsx     # Text components
├── Badge.tsx          # Badges & tags
├── Process.tsx        # Process steps
├── Contact.tsx        # Contact forms
├── GridBackground.tsx # Backgrounds
└── templates/         # Page templates
    ├── HomePage.tsx
    ├── AboutPage.tsx
    └── ContactPage.tsx
```

---

🌫️🌒 // OUIRISE // NO EXTRACTION // ALLWAYS
