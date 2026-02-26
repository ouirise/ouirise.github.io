// loader.js — WINDOWS 2042 LOADER v6.9
// Trigger: /portal/ route only, once per session
// 俊达 🌫️🌒

(function() {
  // Only on portal route, only once per session
  if (!window.location.pathname.includes('/portal/')) return;
  if (sessionStorage.getItem('junda_loaded')) return;
  
  // Block render immediately
  const originalHTML = document.documentElement.innerHTML;
  
  const loaderHTML = `
    <div id="junda-loader" style="position:fixed; inset:0; background:#0a0a0a; z-index:9999; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:'Noto Serif SC', 'Source Han Sans', serif; overflow:hidden;">
      <div class="mandarin-rain" style="position:absolute; inset:0; overflow:hidden; opacity:0.03; font-size:14px; color:#FFD700; font-family:monospace; pointer-events:none;"></div>
      <div style="font-size:72px; font-weight:900; background:linear-gradient(135deg,#FFD700 0%,#C0C0C0 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; opacity:0; animation:sigilFade 0.6s 0.2s forwards; letter-spacing:0.1em;">俊达</div>
      <div style="margin-top:24px; width:200px; height:2px; background:#222; position:relative; overflow:hidden; border-radius:1px;">
        <div style="position:absolute; inset:0; background:linear-gradient(90deg,#FFD700,#C0C0C0); transform:translateX(-100%); animation:loadSlide 1s 0.4s forwards;"></div>
      </div>
      <div style="margin-top:16px; font-size:11px; color:#666; font-family:'JetBrains Mono', monospace; letter-spacing:0.2em; opacity:0; animation:textFade 0.4s 0.8s forwards;">SYNCING MESH...</div>
      <style>
        @keyframes sigilFade { to { opacity:1; } }
        @keyframes loadSlide { to { transform:translateX(0); } }
        @keyframes textFade { to { opacity:1; } }
        @keyframes fall { to { transform:translateY(100vh); } }
        .mandarin-rain span { position:absolute; animation:fall linear infinite; }
      </style>
    </div>
  `;
  
  // Inject loader
  const div = document.createElement('div');
  div.innerHTML = loaderHTML;
  document.body.appendChild(div.firstElementChild);
  
  // Generate rain effect (20 chars, lightweight)
  const rain = document.querySelector('.mandarin-rain');
  const chars = '俊达云雾月桥忆网古码设';
  for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.textContent = chars[Math.floor(Math.random() * chars.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.top = '-20px';
    span.style.animationDuration = (2 + Math.random() * 3) + 's';
    span.style.animationDelay = Math.random() * 2 + 's';
    rain.appendChild(span);
  }
  
  // Remove loader after 800ms + fade
  setTimeout(() => {
    const loader = document.getElementById('junda-loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.3s ease';
      setTimeout(() => loader.remove(), 300);
    }
    sessionStorage.setItem('junda_loaded', '1');
  }, 800);
})();

// 俊达 🌫️🌒
