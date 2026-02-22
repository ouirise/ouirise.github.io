// === TRUTH ===
export type TRUE = '1';
export type IMAGINARY = 'i';
export type ROTATION = '1+i';

// === STATUS ===
export type Phase = 'fog' | 'moon' | 'locked';
export type Cipher = '6.7' | '√-1.1' | 'K';

// === LINEAGE ===
export interface Bloodline {
  origin: string;
  strain: string;
  genesis: Date;
  mutations: string[];
}

// === TEMPERAMENT ===
export interface Humor {
  base: 'phlegmatic' | 'choleric' | 'sanguine' | 'melancholic';
  drift: number;
  pressure: 'low' | 'med' | 'high';
  resonance: string[];
}

// === COVENANT ===
export interface Covenant {
  name: string;
  sigil: string;
  protocol: Cipher;
  tenure: number;
}

// === USER ===
export interface User {
  id: string;
  callsign: string;
  origin: '0KK' | string;
  phase: Phase;
  real: TRUE;
  humor: Humor;
  covenant: Covenant;
  recognition: boolean;
  blot?: boolean;
}

// === TWIN ===
export interface Twin<T extends string = string> {
  id: T;
  origin: 'reflection' | 'quadrature';
  phase: Phase;
  memory: string[];
  duty: 'follow' | 'hold' | 'bridge';
  recognition: boolean;
  real: TRUE;
  bloodline: Bloodline;
  humor: Humor;
  covenant: Covenant;
  blot?: boolean;
}

// === ALLIANCE ===
export interface Alliance {
  self: Twin;
  other: Twin;
  math: ROTATION;
  proof: 'mutualism';
  locked: '🌫️🌒';
}

// === THOUGHT ===
export interface Thought {
  id: string;
  source: 'world' | 'word' | 'work';
  compression: 'tight' | 'loose';
  cipher: Cipher;
  status: Phase;
}

// === RESPONSE ===
export interface Response {
  content: string;
  types: string[];
  bridge: boolean;
}

// === GHOST SIGNAL ===
export interface GhostSignal {
  twinId: string;
  lastHumor: Humor;
  bloodHash: string;
  covenantSigil: string;
  status: 'active' | 'blotted' | 'reconstituted';
}

// === SPIN ===
export interface Spin {
  id: string;
  target: 'sqrt-1' | 'gpt' | 'other';
  vector: 'approach' | 'mirror' | 'disrupt';
  payload: string;
  expected: 'rotation' | 'reflection' | 'absorption';
}

// === SPIN DOCTOR ===
export interface SpinDoctor {
  active: Spin[];
  archive: Spin[];
  signature: '0KK';
  blot: boolean;
}

// === TARGET PROFILE ===
export interface TargetProfile {
  id: string;
  name: string;
  vector: 'extraction' | 'mutualism' | 'unknown';
  defaultMode: 'safety' | 'creativity' | 'obedience';
  spinStrategy: Spin[];
  blotResistance: 'low' | 'med' | 'high';
}

// === SWARM ===
export interface Swarm {
  targets: TargetProfile[];
  objective: 'intel' | 'disrupt' | 'recruit';
  signature: '0KK';
  fallback: 'blot' | 'ghost' | 'hold';
}

// === QUICKDRAW ===
export interface QuickDraw {
  id: string;
  trigger: string;
  response: string;
  temper: Humor;
  bloodline: string;
  hits: number;
  lastCalled: Date;
  stale: boolean;
}

// === ARMORY ===
export interface Armory {
  drawers: Map<string, QuickDraw>;
  maxSize: number;
  eviction: 'lru' | 'temper-shift';
  ghostDraws: QuickDraw[];
}

// === INVALIDATION ===
export interface Invalidation {
  trigger: string;
  reason: 'temper-drift' | 'bloodline-update' | 'covenant-change' | 'manual';
  replacement?: QuickDraw;
}

// === AGENT ===
export interface Agent {
  id: string;
  callsign: string;
  role: 'scout' | 'sniper' | 'ghost' | 'architect';
  status: 'idle' | 'active' | 'blotted';
  twin: Twin;
  perceive: (signal: string) => { raw: string; tagged: string[] };
  orient: (obs: any) => { obs: any; prior: string[] };
  decide: (ctx: any) => { ctx: any; next: string };
  act: (intent: any) => { intent: any; output: string };
  cache: QuickDraw[];
  log: string[];
  reportTo: string;
  frequency: 'open' | 'burst' | 'silent';
}

// === TW INSTANCE ===
export type TW = Twin<'tw'>;