// /shared/types/client.ts

// === CORE ASSET ===
export interface BusinessProfile {
  id: string;                    // callsign: "troh", "qamaria", etc.
  designation: string;           // "Tayloring Rays of Hope"
  theater: string;               // domain/field of operation
  status: 'standby' | 'active' | 'extracting' | 'archived';
  protocolVersion: string;       // "v1.0", "v2.0"
  extracted: boolean;            // TroH = true (offboarded)
  
  assets: {
    insignia: string;            // logo
    colors: TacticalColors;
    typography: CommsFonts;
    texture?: string;            // fog, ambient
  };
  
  intel: {
    directive: string;           // mission
    logistics: Capability[];     // services
    personnel: Operator[];       // team
    history?: string;            // the scar, 25th dynasty
  };
  
  supply?: {
    processor: 'stripe' | 'square' | 'manual';
    donations: boolean;
    recurring?: boolean;
  };
  
  infrastructure: {
    host: 'ghpages' | 'vercel' | 'netlify';
    vault: 'mongo' | 'supabase' | 'none';
    hasCommand: boolean;         // admin panel
    hasExchange: boolean;        // shop/capability
  };
}

// === VISUAL ===
export type TacticalColors = {
  primary: string;              // maroon - blood kept
  secondary: string;            // orange - wcag/safety
  base: string;                 // #0a0a0a - dark
  fog: string;                  // ambient, texture
  signal: string;               // #ffffff - moon/white
  scar?: string;                // child's mark, sscar
};

export type CommsFonts = {
  display: string;              // Bebas - headers/shout
  mono: string;                 // JetBrains - data/technical
  body?: string;                // fallback/readable
};

// === OPERATIONAL ===
export interface Capability {
  id: string;
  codename: string;
  description: string;
  rate?: string;                // price/contract
  cta: string;                  // "ACCESS GRANTED", "DEPLOY"
  icon?: string;                // visual identifier
}

export interface Operator {
  id: string;
  callsign: string;
  designation: string;          // title/rank
  portrait?: string;            // avatar
  bio?: string;
  signature?: string;           // their mark, 0KK equivalent
}

export interface Directive {
  headline: string;             // "BLACK OWNED. PURPOSE DRIVEN."
  intel: string[];              // body copy
  established: string;          // "2025"
  location: string;             // "CLT" - coordinates
  scar?: string;                // the double-s, the mark left
}

// === SYSTEM ===
export interface Operation {
  asset: BusinessProfile;
  vault: {
    db: string;                 // connection string ref
    deadDrops: string[];        // backups/cache
  };
  beepboop: {
    units: UnitConfig[];
    twins: boolean;             // AI shadow clone active?
  };
  lab: {
    fieldTests: string[];       // experiments, feature flags
    deployed: boolean;
  };
  signs: {
    protocol: '6.7' | '√-1.1';
    locked: boolean;
    lastPing: Date;
  };
}

export interface UnitConfig {
  id: string;
  callsign: string;
  role: 'scribe' | 'archivist' | 'messenger' | 'ghost';
  status: 'fog' | 'moon' | 'locked';
  training: string[];           // memory ids, context files
}

// === TEMPLATES (Generic) ===
export interface SOP {          // Standard Operating Procedure
  version: string;
  designation: 'Alpha' | 'Bravo' | 'Charlie' | 'Delta';  // no biz types
  blocks: TacticalBlock[];
  compatible: string[];         // asset classifications
}

export interface TacticalBlock {
  type: 'ingress' | 'directive' | 'grid' | 'egress';  // hero/mission/grid/footer
  required: boolean;
  params: Record<string, unknown>;
}

// === STATE ===
export type Phase = 'mountain' | 'kitchen' | 'deployed';
export type Cipher = '6.7' | '√-1.1' | 'K';
export type Visibility = 0 | 1 | 2 | 3;  // fog density

export interface SystemStatus {
  version: string;
  operations: Operation[];
  activeCipher: Cipher;
  phase: Phase;
  lastSync: Date;
  locked: boolean;
}