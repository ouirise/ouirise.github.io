// QuickDraw Router — MAS Compliant
const QuickDraw = {
  cache: new Map(),
  
  async route(appId, pushState = true) {
    // Don't break the UI on error
    try {
      document.body.style.cursor = 'wait';
      
      // Try to fetch Dabridge
      let dabridge, ouibridge;
      try {
        [dabridge, ouibridge] = await Promise.all([
          fetch('../dabridge.json', { cache: 'no-store' }).then(r => r.json()),
          fetch('OuiBridge.json').then(r => r.json())
        ]);
      } catch (fetchErr) {
        console.warn('Dabridge fetch failed:', fetchErr.message);
        // Use fallback: open as regular window
        this.openAsWindow(appId);
        return;
      }
      
      // Verify route
      if (!ouibridge?.OuiBridge?.allowedRoutes?.includes(`/${appId}/`)) {
        console.warn('Route not in whitelist:', appId);
        this.openAsWindow(appId);
        return;
      }
      
      // Get fragment
      const fragment = dabridge.fragments?.[appId];
      if (!fragment) {
        console.warn('Fragment not found:', appId);
        this.openAsWindow(appId);
        return;
      }
      
      // Render
      const container = document.getElementById('desktop') || document.body;
      const win = document.createElement('div');
      win.className = 'window open';
      win.style.zIndex = '3000';
      win.innerHTML = `
        <div class="window-header">
          <div class="window-title">${fragment.title}</div>
          <div class="window-controls">
            <div class="window-btn minimize" onclick="this.closest('.window').style.display='none'"></div>
            <div class="window-btn maximize" onclick="QuickDraw.maximize(this.closest('.window'))"></div>
            <div class="window-btn close" onclick="this.closest('.window').remove()"></div>
          </div>
        </div>
        <div class="window-content">${fragment.content}</div>
      `;
      container.appendChild(win);
      
      if (pushState) {
        window.history.pushState({ app: appId }, '', `?app=${appId}`);
      }
      
      if (window.translateSigil) translateSigil(win);
      
    } catch (err) {
      console.error('QuickDraw error:', err);
      this.openAsWindow(appId);
    } finally {
      document.body.style.cursor = 'default';
    }
  },
  
  openAsWindow(appId) {
    // Fallback: just open the window if Dabridge fails
    const win = document.getElementById(`window-${appId}`);
    if (win) {
      win.classList.add('open');
    } else {
      console.log('Opening:', appId);
    }
  },
  
  maximize(win) {
    if (win.style.width === '100vw') {
      win.style.width = ''; win.style.height = ''; win.style.top = ''; win.style.left = ''; win.style.transform = '';
    } else {
      win.style.width = '100vw'; win.style.height = '100vh'; win.style.top = '0'; win.style.left = '0'; win.style.transform = 'none';
    }
  }
};

window.addEventListener('popstate', (e) => {
  if (e.state?.app) QuickDraw.route(e.state.app, false);
});

window.QuickDraw = QuickDraw;
// 俊达 🌫️🌒