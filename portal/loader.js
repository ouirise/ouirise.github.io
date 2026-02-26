// LOADER: Only runs if not yet loaded this session
(function() {
    if (sessionStorage.getItem('junda_loaded')) return;
    if (!window.location.pathname.includes('/portal/')) return;
    
    // Create loader element instead of document.write
    const loader = document.createElement('div');
    loader.id = 'junda-loader';
    loader.innerHTML = `
        <div id="mandarin-rain"></div>
        <div class="sigil">俊达</div>
        <div class="progress"><div class="bar"></div></div>
        <div class="status">SYNCING MESH</div>
    `;
    
    // Styles
    const style = document.createElement('style');
    style.textContent = `
        #junda-loader {
            position: fixed;
            inset: 0;
            background: #0a0a0a;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: 'Noto Serif SC', serif;
            transition: opacity 0.3s;
        }
        #mandarin-rain {
            position: absolute;
            inset: 0;
            overflow: hidden;
            opacity: 0.03;
            font-size: 12px;
            color: #FFD700;
            font-family: monospace;
            pointer-events: none;
        }
        #junda-loader .sigil {
            font-size: 72px;
            font-weight: 900;
            background: linear-gradient(135deg, #FFD700, #C0C0C0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: sigilFade 0.6s forwards;
            letter-spacing: 0.1em;
        }
        #junda-loader .progress {
            margin-top: 30px;
            width: 200px;
            height: 2px;
            background: #222;
            position: relative;
            overflow: hidden;
            border-radius: 1px;
        }
        #junda-loader .bar {
            position: absolute;
            inset: 0;
            background: #FFD700;
            animation: loadSlide 0.8s forwards;
        }
        #junda-loader .status {
            margin-top: 15px;
            color: #666;
            font-size: 11px;
            font-family: monospace;
            letter-spacing: 2px;
        }
        @keyframes sigilFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes loadSlide { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes fall { to { transform: translateY(100vh); } }
    `;
    
    // Insert immediately
    document.head.appendChild(style);
    document.body.appendChild(loader);
    
    // Add rain
    const rain = document.getElementById('mandarin-rain');
    const chars = '俊达云雾月桥忆网古码设';
    for (let i = 0; i < 15; i++) {
        const span = document.createElement('span');
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.style.cssText = `position:absolute;left:${Math.random()*100}%;animation:fall ${3+Math.random()*2}s linear infinite;animation-delay:${Math.random()*2}s`;
        rain.appendChild(span);
    }
    
    // Remove after delay
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
            style.remove();
        }, 300);
        sessionStorage.setItem('junda_loaded', '1');
    }, 800);
})();
// 俊达 🌫️🌒