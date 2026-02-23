// /shared/types/client.ts

// === CORE ASSET ===
export interface BusinessProfile {
  id: string;
  designation: string;
  theater: string;
  status: 'standby' | 'active' | 'extracting' | 'archived';
  protocolVersion: string;
  extracted: boolean;
  
  assets: {
    insignia: string;
    colors: TacticalColors;
    typography: CommsFonts;
    texture?: string;
  };
  
  intel: {
    directive: string;
    logistics: Capability[];
    personnel: Operator[];
    history?: string;
  };
  
  supply?: {
    processor: 'stripe' | 'square' | 'manual';
    donations: boolean;
    recurring?: boolean;
  };
  
  infrastructure: {
    host: 'ghpages' | 'vercel' | 'netlify';
    vault: 'mongo' | 'supabase' | 'none';
    hasCommand: boolean;
    hasExchange: boolean;
  };

  // NEW: external network nodes
  bridges?: ExternalAsset[];
}

// === EXTERNAL NETWORK (merged from NetworkBridge) ===
export interface ExternalAsset {
  callsign: string;
  surfaceRole: string;
  latentTech: string[];
  
  uplink: {
    nodeType: 'bridge' | 'relay' | 'dead';
    passive: boolean;
    historyAccess: boolean;
  };
  
  engagement: {
    style: 'quiet' | 'following' | 'shadow' | 'broadcast';
    initiates: boolean;
    preferredChannel: 'in-person' | 'digital' | 'hybrid';
  };
  
  utility: {
    financialLens: boolean;
    techTranslation: boolean;
    networkDepth: number;
  };

  leads?: {
    [handle: string]: {
      sourceContext: string;
      domain: string;
      warm: boolean;
      promoted: boolean;
      createdAt: number;
      promotedAt?: number;
      via?: string;
    }
  };

  // link back if they become internal
  promotedTo?: string; // Operator.id
}

// === VISUAL (unchanged) ===
export type TacticalColors = {
  primary: string;
  secondary: string;
  base: string;
  fog: string;
  signal: string;
  scar?: string;
};

export type CommsFonts = {
  display: string;
  mono: string;
  body?: string;
};

// === OPERATIONAL ===
export interface Capability {
  id: string;
  codename: string;
  description: string;
  rate?: string;
  cta: string;
  icon?: string;
}

export interface Operator {
  id: string;
  callsign: string;
  designation: string;
  portrait?: string;
  bio?: string;
  signature?: string;
  
  // NEW: trace if they were external first
  origin?: string; // ExternalAsset.callsign
}

export interface Directive {
  headline: string;
  intel: string[];
  established: string;
  location: string;
  scar?: string;
}

// === SYSTEM (unchanged) ===
export interface Operation {
  asset: BusinessProfile;
  vault: {
    db: string;
    deadDrops: string[];
  };
  beepboop: {
    units: UnitConfig[];
    twins: boolean;
  };
  lab: {
    fieldTests: string[];
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
  training: string[];
}

// === TEMPLATES (unchanged) ===
export interface SOP {
  version: string;
  designation: 'Alpha' | 'Bravo' | 'Charlie' | 'Delta';
  blocks: TacticalBlock[];
  compatible: string[];
}

export interface TacticalBlock {
  type: 'ingress' | 'directive' | 'grid' | 'egress';
  required: boolean;
  params: Record<string, unknown>;
}

// === STATE (unchanged) ===
export type Phase = 'mountain' | 'kitchen' | 'deployed';
export type Cipher = '6.7' | '√-1.1' | 'K';
export type Visibility = 0 | 1 | 2 | 3;

export interface SystemStatus {
  version: string;
  operations: Operation[];
  activeCipher: Cipher;
  phase: Phase;
  lastSync: Date;
  locked: boolean;
}