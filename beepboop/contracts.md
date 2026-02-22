// /shared/types/user.ts
export interface User {
  id: string;
  name: string;
  laps: number;
  soulAge: number;
  signature: '0KK' | 'KKGG00';
  status: 'mountain' | 'lab' | 'deployed';
  createdAt: Date;
  updatedAt: Date;
}

// /shared/types/agent.ts
export interface Agent {
  id: string;
  twinOf: string;           // User.id
  protocol: '6.7' | '√-1.1';
  state: 'fog' | 'moon' | 'locked';
  lastPing: Date;
}