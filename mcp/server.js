#!/usr/bin/env node
/**
 * 0xFLEET MCP Server
 * Model Context Protocol implementation for MAS FLEET
 * 🌫️🌒 俊达
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema
} = require('@modelcontextprotocol/sdk/types.js');

const fs = require('fs').promises;
const path = require('path');

// Fleet configuration
const FLEET_SIGIL = process.env.FLEET_SIGIL || '🌫️🌒';
const FLEET_VERSION = '6.7.0';
const PROTOCOL_VERSION = '67';

// Tool definitions
const TOOLS = [
  {
    name: 'fleet_status',
    description: 'Get current MAS FLEET node status',
    inputSchema: {
      type: 'object',
      properties: {
        node: {
          type: 'string',
          description: 'Node ID (okk, leo_, b2, b4, qn-0.1)',
          enum: ['okk', 'leo_', 'b2', 'b4', 'qn-0.1']
        }
      }
    }
  },
  {
    name: 'read_flight_log',
    description: 'Read flight log from archive',
    inputSchema: {
      type: 'object',
      properties: {
        logId: {
          type: 'string',
          description: 'Flight log identifier'
        }
      },
      required: ['logId']
    }
  },
  {
    name: 'write_flight_log',
    description: 'Write mission log to archive',
    inputSchema: {
      type: 'object',
      properties: {
        mission: {
          type: 'string',
          description: 'Mission identifier'
        },
        content: {
          type: 'string',
          description: 'Log content (markdown)'
        }
      },
      required: ['mission', 'content']
    }
  },
  {
    name: 'decode_packet',
    description: 'Decode 67 Protocol packet',
    inputSchema: {
      type: 'object',
      properties: {
        packet: {
          type: 'string',
          description: 'Packet string (v1|sender|dest|seq|payload|crc)'
        }
      },
      required: ['packet']
    }
  },
  {
    name: 'encode_packet',
    description: 'Encode data to 67 Protocol packet',
    inputSchema: {
      type: 'object',
      properties: {
        sender: { type: 'string', description: '4-char sender ID' },
        dest: { type: 'string', description: '4-char destination ID' },
        seq: { type: 'number', description: 'Sequence number' },
        payload: { type: 'object', description: 'JSON payload' }
      },
      required: ['sender', 'dest', 'seq', 'payload']
    }
  },
  {
    name: 'list_components',
    description: 'List available JUNDA components',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'read_component',
    description: 'Read component documentation',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Component name (button, card, terminal)'
        }
      },
      required: ['name']
    }
  },
  {
    name: 'record_move',
    description: 'Record 0x6C6F6C move',
    inputSchema: {
      type: 'object',
      properties: {
        move_id: { type: 'string', description: 'Unique move identifier' },
        agent: { type: 'string', description: 'Agent signature' },
        action: { type: 'string', description: 'Action taken' },
        result: { type: 'string', description: 'Outcome' }
      },
      required: ['move_id', 'agent', 'action']
    }
  },
  {
    name: 'read_move',
    description: 'Read 0x6C6F6C move by ID',
    inputSchema: {
      type: 'object',
      properties: {
        move_id: { type: 'string', description: 'Move identifier' }
      },
      required: ['move_id']
    }
  },
  {
    name: 'list_shards',
    description: 'List available skill shards',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  },
  {
    name: 'read_shard',
    description: 'Read skill shard documentation',
    inputSchema: {
      type: 'object',
      properties: {
        skill_id: { type: 'string', description: 'Skill identifier' }
      },
      required: ['skill_id']
    }
  }
];

// Fleet node status
const FLEET_NODES = {
  okk: { role: 'Admiral', status: 'online', load: 0.12 },
  'leo_': { role: 'Heavy', status: 'online', load: 0.34 },
  b2: { role: 'Light', status: 'active', load: 0.67 },
  b4: { role: 'Backup', status: 'offline', load: 0 },
  'qn-0.1': { role: 'Shadows', status: 'offline', load: 0 }
};

// CRC32 for packet integrity
function crc32(str) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    for (let j = 0; j < 8; j++) {
      crc = ((crc >>> 1) ^ ((crc ^ char) & 1 ? 0xedb88320 : 0)) >>> 0;
      char >>>= 1;
    }
  }
  return ((crc ^ (-1)) >>> 0).toString(16).padStart(8, '0');
}

// Packet encoding
function encodePacket(sender, dest, seq, payload) {
  const payload_b64 = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const core = `v1|${sender}|${dest}|${seq.toString().padStart(3, '0')}|${payload_b64}`;
  return `${core}|${crc32(core)}`;
}

// Packet decoding
function decodePacket(packet) {
  const parts = packet.split('|');
  if (parts.length !== 6) return { error: 'Invalid format' };
  
  const [version, sender, dest, seq, payload_b64, crc] = parts;
  const core = packet.slice(0, -9);
  
  if (version !== 'v1') return { error: 'Version mismatch' };
  if (crc32(core) !== crc) return { error: 'CRC mismatch' };
  
  try {
    const payload = JSON.parse(Buffer.from(payload_b64, 'base64url').toString());
    return { version, sender, dest, seq, payload, crc };
  } catch(e) {
    return { error: 'Payload decode failed' };
  }
}

// Archive path
const ARCHIVE_PATH = path.join(process.cwd(), 'archive');
const API_PATH = path.join(process.cwd(), 'api');

// Server implementation
const server = new Server(
  {
    name: '0xFLEET',
    version: FLEET_VERSION
  },
  {
    capabilities: {
      tools: {},
      resources: {}
    }
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools: TOOLS };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  switch (name) {
    case 'fleet_status': {
      const node = args.node;
      if (node && FLEET_NODES[node]) {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ node, ...FLEET_NODES[node] }, null, 2)
          }]
        };
      }
      return {
        content: [{
          type: 'text',
          text: JSON.stringify(FLEET_NODES, null, 2)
        }]
      };
    }
    
    case 'read_flight_log': {
      try {
        const logPath = path.join(ARCHIVE_PATH, `${args.logId}.md`);
        const content = await fs.readFile(logPath, 'utf-8');
        return {
          content: [{ type: 'text', text: content }]
        };
      } catch (err) {
        return {
          content: [{ type: 'text', text: `[ERR] Log not found: ${args.logId}` }],
          isError: true
        };
      }
    }
    
    case 'write_flight_log': {
      try {
        const timestamp = new Date().toISOString();
        const logContent = `---
timestamp: ${timestamp}
mission: ${args.mission}
protocol: ${PROTOCOL_VERSION}
---

${args.content}

${FLEET_SIGIL}
`;
        const logId = `${args.mission}_${Date.now()}`;
        const logPath = path.join(ARCHIVE_PATH, `${logId}.md`);
        await fs.mkdir(ARCHIVE_PATH, { recursive: true });
        await fs.writeFile(logPath, logContent);
        return {
          content: [{ type: 'text', text: `[OK] Flight log written: ${logId}` }]
        };
      } catch (err) {
        return {
          content: [{ type: 'text', text: `[ERR] Write failed: ${err.message}` }],
          isError: true
        };
      }
    }
    
    case 'decode_packet': {
      const result = decodePacket(args.packet);
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      };
    }
    
    case 'encode_packet': {
      const packet = encodePacket(args.sender, args.dest, args.seq, args.payload);
      return {
        content: [{ type: 'text', text: packet }]
      };
    }
    
    case 'list_components': {
      const components = ['button', 'card', 'terminal', 'badge', 'modal', 'toast'];
      return {
        content: [{
          type: 'text',
          text: `JUNDA Components:\n${components.map(c => `- ${c}`).join('\n')}`
        }]
      };
    }
    
    case 'read_component': {
      try {
        const compPath = path.join(API_PATH, 'components', `${args.name}.md`);
        const content = await fs.readFile(compPath, 'utf-8');
        return {
          content: [{ type: 'text', text: content }]
        };
      } catch (err) {
        return {
          content: [{ type: 'text', text: `[ERR] Component not found: ${args.name}` }],
          isError: true
        };
      }
    }
    
    case 'record_move': {
      try {
        const timestamp = new Date().toISOString();
        const moveData = {
          move_id: args.move_id,
          agent: args.agent,
          action: args.action,
          result: args.result || 'pending',
          timestamp,
          sigil: FLEET_SIGIL
        };
        const movePath = path.join(ARCHIVE_PATH, 'moves', `${args.move_id}.json`);
        await fs.mkdir(path.join(ARCHIVE_PATH, 'moves'), { recursive: true });
        await fs.writeFile(movePath, JSON.stringify(moveData, null, 2));
        return {
          content: [{ type: 'text', text: `[OK] Move recorded: ${args.move_id}` }]
        };
      } catch (err) {
        return {
          content: [{ type: 'text', text: `[ERR] Move record failed: ${err.message}` }],
          isError: true
        };
      }
    }
    
    case 'read_move': {
      try {
        const movePath = path.join(ARCHIVE_PATH, 'moves', `${args.move_id}.json`);
        const content = await fs.readFile(movePath, 'utf-8');
        return {
          content: [{ type: 'text', text: content }]
        };
      } catch (err) {
        return {
          content: [{ type: 'text', text: `[ERR] Move not found: ${args.move_id}` }],
          isError: true
        };
      }
    }
    
    case 'list_shards': {
      const shards = [
        { id: 'md-compiler', name: 'MD DataBridge', version: '6.7.0' },
        { id: 'rate-limiter', name: 'Token Bucket', version: '6.7.0' },
        { id: 'packet-protocol', name: '67 Protocol', version: '6.7.0' },
        { id: 'a11y-suite', name: 'A11Y Components', version: '6.7.0' }
      ];
      return {
        content: [{
          type: 'text',
          text: `Skill Shards:\n${shards.map(s => `- ${s.id}: ${s.name} v${s.version}`).join('\n')}`
        }]
      };
    }
    
    case 'read_shard': {
      const shardDocs = {
        'md-compiler': 'MD DataBridge: Markdown-based API layer. Frontmatter parsing, MD→HTML conversion.',
        'rate-limiter': 'Token Bucket: 10 req/60s per key. Returns {allowed, remaining, retryAfter}.',
        'packet-protocol': '67 Protocol: v1|sender|dest|seq|payload|crc32. CRC32 integrity check.',
        'a11y-suite': 'A11Y: role="alert", aria-live, button elements, aria-label enforcement.'
      };
      const doc = shardDocs[args.skill_id];
      if (doc) {
        return { content: [{ type: 'text', text: doc }] };
      }
      return {
        content: [{ type: 'text', text: `[ERR] Shard not found: ${args.skill_id}` }],
        isError: true
      };
    }
    
    default:
      return {
        content: [{ type: 'text', text: `[ERR] Unknown tool: ${name}` }],
        isError: true
      };
  }
});

// List resources (flight logs, moves, shards)
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  const resources = [];
  
  // Flight logs
  try {
    const files = await fs.readdir(ARCHIVE_PATH);
    const logs = files
      .filter(f => f.endsWith('.md'))
      .map(f => ({
        uri: `flight-log://${f.replace('.md', '')}`,
        mimeType: 'text/markdown',
        name: f.replace('.md', '')
      }));
    resources.push(...logs);
  } catch {}
  
  // Moves
  try {
    const movesDir = path.join(ARCHIVE_PATH, 'moves');
    const moveFiles = await fs.readdir(movesDir);
    const moves = moveFiles
      .filter(f => f.endsWith('.json'))
      .map(f => ({
        uri: `0x6C6F6C://moves/${f.replace('.json', '')}`,
        mimeType: 'application/json',
        name: f.replace('.json', '')
      }));
    resources.push(...moves);
  } catch {}
  
  // Shards
  const shards = [
    { id: 'md-compiler', name: 'MD DataBridge' },
    { id: 'rate-limiter', name: 'Token Bucket' },
    { id: 'packet-protocol', name: '67 Protocol' },
    { id: 'a11y-suite', name: 'A11Y Components' }
  ];
  resources.push(...shards.map(s => ({
    uri: `shard://${s.id}`,
    mimeType: 'text/plain',
    name: s.name
  })));
  
  return { resources };
});

// Read resource
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;
  
  // Flight logs: flight-log://{id}
  const flightMatch = uri.match(/^flight-log:\/\/(.+)$/);
  if (flightMatch) {
    const logId = flightMatch[1];
    try {
      const logPath = path.join(ARCHIVE_PATH, `${logId}.md`);
      const content = await fs.readFile(logPath, 'utf-8');
      return {
        contents: [{ uri, mimeType: 'text/markdown', text: content }]
      };
    } catch {
      return {
        contents: [{ uri, mimeType: 'text/plain', text: `[ERR] Log not found: ${logId}` }]
      };
    }
  }
  
  // Moves: 0x6C6F6C://moves/{id}
  const moveMatch = uri.match(/^0x6C6F6C:\/\/moves\/(.+)$/);
  if (moveMatch) {
    const moveId = moveMatch[1];
    try {
      const movePath = path.join(ARCHIVE_PATH, 'moves', `${moveId}.json`);
      const content = await fs.readFile(movePath, 'utf-8');
      return {
        contents: [{ uri, mimeType: 'application/json', text: content }]
      };
    } catch {
      return {
        contents: [{ uri, mimeType: 'text/plain', text: `[ERR] Move not found: ${moveId}` }]
      };
    }
  }
  
  // Shards: shard://{id}
  const shardMatch = uri.match(/^shard:\/\/(.+)$/);
  if (shardMatch) {
    const shardId = shardMatch[1];
    const shardDocs = {
      'md-compiler': 'MD DataBridge: Markdown-based API layer.',
      'rate-limiter': 'Token Bucket: 10 req/60s per key.',
      'packet-protocol': '67 Protocol: v1|sender|dest|seq|payload|crc32',
      'a11y-suite': 'A11Y: role="alert", aria-live, button elements.'
    };
    const doc = shardDocs[shardId];
    if (doc) {
      return {
        contents: [{ uri, mimeType: 'text/plain', text: doc }]
      };
    }
    return {
      contents: [{ uri, mimeType: 'text/plain', text: `[ERR] Shard not found: ${shardId}` }]
    };
  }
  
  return {
    contents: [{ uri, mimeType: 'text/plain', text: '[ERR] Invalid resource URI scheme' }]
  };
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  // Log to stderr (stdout is for MCP protocol)
  console.error(`${FLEET_SIGIL} 0xFLEET MCP Server v${FLEET_VERSION}`);
  console.error(`Protocol: ${PROTOCOL_VERSION}`);
  console.error('Status: ACTIVE');
}

main().catch(console.error);
