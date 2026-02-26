// junda-translator.js — SIGIL TRANSLATION LAYER v6.9
// Injected before DOMContentLoaded
// 俊达 🌫️🌒

const SigilMap = {
  '🌫️': { lucide: 'cloud-fog', junda: '俊', color: '#C0C0C0' },
  '🌒': { lucide: 'moon', junda: '达', color: '#FFD700' },
  '🧠': { lucide: 'brain-circuit', junda: '忆', color: '#00FF88' },
  '🕸️': { lucide: 'network', junda: '网', color: '#00FF88' },
  '⌨️': { lucide: 'terminal-square', junda: '码', color: '#0078D4' },
  '🏛️': { lucide: 'landmark', junda: '古', color: '#D4AF37' },
  '🌉': { lucide: 'git-branch', junda: '桥', color: '#00FF88' },
  '⚙️': { lucide: 'settings', junda: '设', color: '#888888' },
  '📄': { lucide: 'file-text', junda: '档', color: '#CCCCCC' }
};

function translateSigil(element) {
  const text = element.textContent || element.innerText;
  if (!text) return;
  
  // Fog-Moon combo priority (JUNDA signature)
  if (text.includes('🌫️🌒') || text.includes('🌒🌫️')) {
    element.innerHTML = text
      .replace(/🌫️🌒|🌒🌫️/g, '<span class="junda-sigil" title="俊达 — Elegant Arrival">俊达</span>');
    element.dataset.sigil = 'junda';
  }
  
  // Single emoji → Lucide + Junda tooltip
  Object.keys(SigilMap).forEach(emoji => {
    if (text.includes(emoji) && emoji !== '🌫️' && emoji !== '🌒') {
      const map = SigilMap[emoji];
      element.innerHTML = element.innerHTML.replace(
        new RegExp(emoji, 'g'),
        `<i data-lucide="${map.lucide}" class="lucide-icon" title="${map.junda}" style="color:${map.color}"></i>`
      );
    }
  });
  
  // Initialize Lucide icons if available
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// Auto-translate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('*').forEach(el => {
    if (el.children.length === 0 || el.textContent.match(/[\u{1F300}-\u{1F9FF}]/gu)) {
      translateSigil(el);
    }
  });
});

// Export for QuickDraw router
window.translateSigil = translateSigil;
window.SigilMap = SigilMap;

// 俊达 🌫️🌒
