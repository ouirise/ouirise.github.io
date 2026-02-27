// TROH Worker
// Heartbeat Rate Limiting + Data Bridge
// Cloudflare Workers | OUIDATABRIDGE KV
// 🌫️🌒

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // === HEARTBEAT ENDPOINT ===
    // Strict RL (5/min), No Cache, Queue Throttle
    if (url.pathname === '/api/troh/health') {
      const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
      const key = `heartbeat:${clientIP}`;
      
      // Check rate limit
      const current = await env.OUIDATABRIDGE.get(key);
      const count = parseInt(current) || 0;
      
      if (count >= 5) {
        // Queue throttle - don't drop, delay
        return new Response(JSON.stringify({
          status: 'throttled',
          retry_after: 60,
          sigil: '🌫️🌒'
        }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '60',
            'Cache-Control': 'no-store'
          }
        });
      }
      
      // Increment counter, 60s TTL
      await env.OUIDATABRIDGE.put(key, count + 1, {expirationTtl: 60});
      
      // Return fresh health data (never cached)
      return new Response(JSON.stringify({
        '@': 'TROH',
        't': 'heartbeat',
        's': 'alive',
        'd': {
          'node': 'troh',
          'angle': 104.45,
          'sigil': '🌫️🌒'
        }
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0'
        }
      });
    }
    
    // === DATA BRIDGE ENDPOINTS ===
    // Normal RL (100/min), Burst 20, Respect Cache
    if (url.pathname.startsWith('/api/bridge/')) {
      const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
      const key = `bridge:${clientIP}`;
      
      // Check rate limit
      const current = await env.OUIDATABRIDGE.get(key);
      const count = parseInt(current) || 0;
      
      if (count >= 100) {
        return new Response(JSON.stringify({
          status: 'rate_limited',
          limit: 100,
          window: '60s'
        }), {
          status: 429,
          headers: {'Content-Type': 'application/json'}
        });
      }
      
      await env.OUIDATABRIDGE.put(key, count + 1, {expirationTtl: 60});
      
      // Check CF Cache
      const cache = caches.default;
      const cached = await cache.match(request);
      if (cached) return cached;
      
      // Process bridge logic
      const response = await handleBridge(request, env);
      
      // Store in cache for 1 hour
      ctx.waitUntil(cache.put(request, response.clone()));
      return response;
    }
    
    // === STATIC ASSETS ===
    // Pass through to origin (GH Pages)
    return fetch(request);
  }
};

// Bridge handler
async function handleBridge(request, env) {
  const url = new URL(request.url);
  
  return new Response(JSON.stringify({
    '@': 'BRIDGE',
    't': 'data',
    's': 'active',
    'd': {
      'endpoint': url.pathname,
      'cached': false,
      'sigil': '🌫️🌒'
    }
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

// Durable Object (Future: Persistent Nodes)
export class TROHNode {
  constructor(state, env) {
    this.state = state;
    this.heartbeatCount = 0;
    this.storage = state.storage;
  }
  
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === '/health') {
      this.heartbeatCount++;
      
      // Persist to storage
      await this.storage.put('beats', this.heartbeatCount);
      
      return new Response(JSON.stringify({
        '@': 'TROH',
        't': 'persistent_heartbeat',
        's': 'alive',
        'd': {
          'beats': this.heartbeatCount,
          'angle': 104.45,
          'mode': 'durable_object',
          'sigil': '🌫️🌒'
        }
      }), {
        headers: {'Content-Type': 'application/json'}
      });
    }
    
    return new Response('Not Found', {status: 404});
  }
}

// 俊达 🌫️🌒
