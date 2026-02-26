// router.js — QUICKDRAW ROUTER v6.9
// Stoopid EZ routing through Dabridge
// 俊达 🌫️🌒

const QuickDraw = {
  cache: new Map(),
  
  async route(appId, options = {}) {
    const { pushState = true, silent = false } = options;
    
    // Show loading state
    if (!silent) document.body.style.cursor = 'wait';
    
    try {
      // 1. Fetch Dabridge + OuiBridge (parallel)
      const cacheKey = 'dabridge_' + Date.now();
      const [dabridge, ouibridge] = await Promise.all([
        this.fetchWithCache('/dabridge.json', cacheKey),
        this.fetchWithCache('/portal/OuiBridge.json', 'ouibridge')
      ]);
      
      // 2. Verify route allowed (security check)
      const allowedRoutes = ouibridge.OuiBridge?.allowedRoutes || [];
      const routePath = `/${appId}/`;
      if (!allowedRoutes.includes(routePath) && !allowedRoutes.includes(`/${appId}`)) {
        throw new Error(`Extraction attempt blocked: ${appId} not in allowedRoutes`);
      }
      
      // 3. Get fragment from Dabridge
      const fragment = dabridge.fragments?.[appId];
      if (!fragment) {
        throw new Error(`App not in mesh: ${appId}`);
      }
      
      // 4. Render to container
      const container = document.getElementById('app-container') || document.getElementById('portal-container') || document.body;
      
      // Fade out current content
      container.style.opacity = '0';
      container.style.transition = 'opacity 0.15s';
      
      await new Promise(r => setTimeout(r, 150));
      
      // Inject new content
      container.innerHTML = fragment.content || `<div class="app-content" data-app="${appId}"><h2>${fragment.title || appId}</h2><p>${fragment.meta?.type || 'Loading...'}</p></div>`;
      
      // Update document title
      if (fragment.title) {
        document.title = fragment.title;
      }
      
      // 5. Translate all sigils in new content
      if (window.translateSigil) {
        container.querySelectorAll('*').forEach(el => {
          if (el.children.length === 0 || el.textContent.match(/[\u{1F300}-\u{1F9FF}]/gu)) {
            translateSigil(el);
          }
        });
      }
      
      // Fade in
      container.style.opacity = '1';
      
      // 6. Update URL
      if (pushState) {
        window.history.pushState({ app: appId }, fragment.title || appId, `/portal/?app=${appId}`);
      }
      
      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('junda:route', { detail: { app: appId, fragment } }));
      
      return { success: true, app: appId, fragment };
      
    } catch (error) {
      console.error('QuickDraw route failed:', error);
      this.showError(error.message);
      return { success: false, error: error.message };
    } finally {
      document.body.style.cursor = 'default';
    }
  },
  
  async fetchWithCache(url, cacheKey, options = {}) {
    const { force = false, ttl = 300000 } = options; // 5min default TTL
    
    // Check memory cache
    if (!force && this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < ttl) {
        return cached.data;
      }
    }
    
    // Fetch fresh
    const cacheMode = force ? 'no-store' : 'default';
    const response = await fetch(url, { cache: cacheMode });
    if (!response.ok) throw new Error(`Fetch failed: ${url} (${response.status})`);
    
    const data = await response.json();
    this.cache.set(cacheKey, { data, timestamp: Date.now() });
    return data;
  },
  
  showError(message) {
    const container = document.getElementById('app-container') || document.body;
    container.innerHTML = `
      <div style="padding:40px; text-align:center; color:#ff4444; font-family:'JetBrains Mono', monospace;">
        <div style="font-size:48px; margin-bottom:16px;">⚠️</div>
        <div style="font-size:14px; color:#666; margin-bottom:8px;">EXTRACTION ATTEMPT BLOCKED</div>
        <div style="font-size:12px; color:#444;">${message}</div>
        <button onclick="QuickDraw.route('portal')" style="margin-top:24px; padding:10px 20px; background:#6B2D3C; color:#E8E6E3; border:none; border-radius:4px; cursor:pointer; font-family:inherit;">RETURN TO PORTAL</button>
      </div>
    `;
  },
  
  // Handle browser back/forward
  init() {
    window.addEventListener('popstate', (e) => {
      const params = new URLSearchParams(window.location.search);
      const app = params.get('app');
      if (app) {
        this.route(app, { pushState: false });
      }
    });
    
    // Handle initial route
    const params = new URLSearchParams(window.location.search);
    const app = params.get('app');
    if (app) {
      this.route(app, { pushState: false });
    }
  }
};

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => QuickDraw.init());
} else {
  QuickDraw.init();
}

// Export globally
window.QuickDraw = QuickDraw;

// 俊达 🌫️🌒
