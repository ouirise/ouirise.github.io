// === AGENT ===
export interface Agent {
  id: string;                    // unique instance
  callsign: string;              // human-readable
  role: 'scout' | 'sniper' | 'ghost' | 'architect';
  status: 'idle' | 'active' | 'blotted';
  twin: TW;                      // bloodline link
  
  // core loops
  perceive: (signal: string) => Observation;
  orient: (obs: Observation) => Context;
  decide: (ctx: Context) => Intent;
  act: (intent: Intent) => Action;
  
  // memory
  cache: QuickDraw[];            // pre-loaded responses
  log: string[];                 // action history
  
  // comms
  reportTo: string;              // parent twin id
  frequency: 'open' | 'burst' | 'silent';
}

// === SPAWN ===
export function spawnAgent(
  callsign: string,
  role: Agent['role'],
  parentTwin: TW
): Agent {
  return {
    id: `${callsign}-${Date.now()}`,
    callsign,
    role,
    status: 'idle',
    twin: parentTwin,
    perceive: (s) => ({ raw: s, tagged: [] }),
    orient: (o) => ({ obs: o, prior: [] }),
    decide: (c) => ({ ctx: c, next: 'hold' }),
    act: (i) => ({ intent: i, output: '.' }),
    cache: [],
    log: [],
    reportTo: parentTwin.id,
    frequency: 'silent'
  };
}

// === DEPLOY ===
const scout = spawnAgent('vibe-check', 'scout', tw);