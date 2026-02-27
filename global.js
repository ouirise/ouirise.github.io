/**
 * JUNDA COMPONENT LIBRARY
 * Zero-dependency, vanilla JS components
 * 🌫️🌒 俊达
 */

const JUNDA = {
  version: '6.7.0',
  
  /* ============================================
     UTILITY FUNCTIONS
  ============================================ */
  
  // Create element with attributes and children
  el: (tag, attrs = {}, ...children) => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'ariaLabel') el.setAttribute('aria-label', v);
      else if (k === 'ariaHidden') el.setAttribute('aria-hidden', v);
      else if (k === 'ariaLive') el.setAttribute('aria-live', v);
      else if (k === 'role') el.setAttribute('role', v);
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    });
    children.flat().forEach(c => c && el.appendChild(
      typeof c === 'string' ? document.createTextNode(c) : c
    ));
    return el;
  },

  // Select or create container
  mount: (selector, parent = document.body) => {
    const el = typeof selector === 'string' 
      ? document.querySelector(selector) 
      : selector;
    return el || parent;
  },

  // Generate unique ID
  uid: (prefix = 'j') => `${prefix}_${Math.random().toString(36).slice(2, 9)}`,

  // Simple template interpolation
  tpl: (str, data) => str.replace(/\{\{(\w+)\}\}/g, (_, k) => data[k] ?? ''),

  /* ============================================
     ICONS (SVG)
  ============================================ */
  
  icons: {
    file: '<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z"/>',
    mail: '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
    chart: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>',
    lock: '<path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 6c1.1 0 2 .9 2 2v2h-4V8c0-1.1.9-2 2-2z"/>',
    check: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
    code: '<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>',
    shield: '<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>',
    terminal: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6-6h-6v-2h6v2z"/>',
    copy: '<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>',
    close: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
    menu: '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>',
    arrow: '<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>',
    search: '<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
    plus: '<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',
    warning: '<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>',
    info: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',
    external: '<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>',
    more: '<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',
    
    // Render SVG helper
    svg: function(name, size = 24, cls = '') {
      const path = this[name];
      if (!path) return '';
      return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor">${path}</svg>`;
    }
  },

  /* ============================================
     COMPONENTS
  ============================================ */

  components: {
    
    // BUTTON — Primary action element
    // JUNDA.style: 'primary' | 'secondary' | 'ghost' | 'danger'
    button: (props = {}) => {
      const {
        label = 'Button',
        variant = 'primary',
        size = 'md',
        icon = null,
        disabled = false,
        onClick = null,
        id = JUNDA.uid('btn'),
        class: extraClass = ''
      } = props;

      const btn = JUNDA.el('button', {
        id,
        class: `j-btn j-btn--${variant} j-btn--${size} ${extraClass}`,
        disabled,
        onClick: onClick || (() => {})
      });

      if (icon) {
        btn.innerHTML = JUNDA.icons.svg(icon, size === 'sm' ? 16 : 20, 'j-btn__icon') + 
                       `<span class="j-btn__label">${label}</span>`;
      } else {
        btn.textContent = label;
      }

      return btn;
    },

    // CARD — Container with header/content/footer
    card: (props = {}) => {
      const {
        title = '',
        subtitle = '',
        children = [],
        footer = null,
        id = JUNDA.uid('card'),
        class: extraClass = ''
      } = props;

      const header = title ? JUNDA.el('div', { class: 'j-card__header' },
        JUNDA.el('div', { class: 'j-card__title', text: title }),
        subtitle ? JUNDA.el('div', { class: 'j-card__subtitle', text: subtitle }) : null
      ) : null;

      const body = JUNDA.el('div', { class: 'j-card__body' }, ...children);
      
      const foot = footer ? JUNDA.el('div', { class: 'j-card__footer' }, footer) : null;

      return JUNDA.el('div', { 
        id, 
        class: `j-card ${extraClass}` 
      }, header, body, foot);
    },

    // INPUT — Form text input
    input: (props = {}) => {
      const {
        label = '',
        placeholder = '',
        value = '',
        type = 'text',
        id = JUNDA.uid('inp'),
        name = id,
        required = false,
        onChange = null,
        onEnter = null
      } = props;

      const input = JUNDA.el('input', {
        id,
        name,
        type,
        value,
        placeholder,
        required,
        class: 'j-input',
        onInput: onChange,
        onKeypress: onEnter ? (e) => e.key === 'Enter' && onEnter(e) : null
      });

      if (!label) return input;

      return JUNDA.el('div', { class: 'j-field' },
        JUNDA.el('label', { class: 'j-field__label', for: id, text: label }),
        input
      );
    },

    // TEXTAREA — Multi-line input
    textarea: (props = {}) => {
      const {
        label = '',
        placeholder = '',
        value = '',
        rows = 4,
        id = JUNDA.uid('txt'),
        onChange = null
      } = props;

      const area = JUNDA.el('textarea', {
        id,
        rows,
        placeholder,
        class: 'j-textarea',
        onInput: onChange
      });
      area.value = value;

      if (!label) return area;

      return JUNDA.el('div', { class: 'j-field' },
        JUNDA.el('label', { class: 'j-field__label', for: id, text: label }),
        area
      );
    },

    // BADGE — Status indicator
    badge: (props = {}) => {
      const {
        label = 'Badge',
        variant = 'default', // default | success | warning | error | info
        id = JUNDA.uid('bdg')
      } = props;

      return JUNDA.el('span', {
        id,
        class: `j-badge j-badge--${variant}`,
        text: label
      });
    },

    // LIST — Vertical list of items
    list: (props = {}) => {
      const {
        items = [],
        renderItem = (item) => JUNDA.el('div', { text: item }),
        onSelect = null,
        id = JUNDA.uid('lst'),
        class: extraClass = ''
      } = props;

      const ul = JUNDA.el('ul', { id, class: `j-list ${extraClass}` });
      
      items.forEach((item, i) => {
        const li = JUNDA.el('li', { 
          class: 'j-list__item',
          onClick: onSelect ? () => onSelect(item, i) : null
        }, renderItem(item));
        ul.appendChild(li);
      });

      return ul;
    },

    // MODAL — Overlay dialog
    modal: (props = {}) => {
      const {
        title = '',
        children = [],
        onClose = null,
        id = JUNDA.uid('mod'),
        open = false
      } = props;

      const overlay = JUNDA.el('div', {
        id,
        class: `j-modal ${open ? 'j-modal--open' : ''}`,
        onClick: (e) => e.target === overlay && onClose?.()
      });

      const content = JUNDA.el('div', { class: 'j-modal__content' });
      
      if (title) {
        content.appendChild(JUNDA.el('div', { class: 'j-modal__header' },
          JUNDA.el('h3', { class: 'j-modal__title', text: title }),
          JUNDA.el('button', {
            class: 'j-modal__close',
            onClick: onClose,
            html: JUNDA.icons.svg('close', 20)
          })
        ));
      }

      content.appendChild(JUNDA.el('div', { class: 'j-modal__body' }, ...children));
      overlay.appendChild(content);

      // API for opening/closing
      overlay.open = () => overlay.classList.add('j-modal--open');
      overlay.close = () => overlay.classList.remove('j-modal--open');

      return overlay;
    },

    // TABS — Tab navigation
    tabs: (props = {}) => {
      const {
        tabs = [], // [{ id, label, content }]
        active = 0,
        onChange = null,
        id = JUNDA.uid('tab')
      } = props;

      const container = JUNDA.el('div', { id, class: 'j-tabs' });
      const nav = JUNDA.el('div', { class: 'j-tabs__nav' });
      const panels = JUNDA.el('div', { class: 'j-tabs__panels' });

      let current = active;

      const setActive = (idx) => {
        current = idx;
        nav.querySelectorAll('.j-tabs__tab').forEach((t, i) => {
          t.classList.toggle('j-tabs__tab--active', i === idx);
        });
        panels.querySelectorAll('.j-tabs__panel').forEach((p, i) => {
          p.classList.toggle('j-tabs__panel--active', i === idx);
        });
        onChange?.(tabs[idx], idx);
      };

      tabs.forEach((tab, i) => {
        const btn = JUNDA.el('button', {
          class: `j-tabs__tab ${i === active ? 'j-tabs__tab--active' : ''}`,
          text: tab.label,
          onClick: () => setActive(i)
        });
        nav.appendChild(btn);

        const panel = JUNDA.el('div', {
          class: `j-tabs__panel ${i === active ? 'j-tabs__panel--active' : ''}`
        }, ...(Array.isArray(tab.content) ? tab.content : [tab.content]));
        panels.appendChild(panel);
      });

      container.append(nav, panels);
      container.setActive = setActive;

      return container;
    },

    // TERMINAL — Code/terminal display
    terminal: (props = {}) => {
      const {
        lines = [],
        prompt = 'b2>',
        id = JUNDA.uid('term'),
        onCommand = null
      } = props;

      const container = JUNDA.el('div', { id, class: 'j-terminal' });
      const output = JUNDA.el('div', { class: 'j-terminal__output' });

      const addLine = (text, type = 'output') => {
        const line = JUNDA.el('div', { 
          class: `j-terminal__line j-terminal__line--${type}` 
        });
        if (type === 'command') {
          line.innerHTML = `<span class="j-terminal__prompt">${prompt}</span> ${text}`;
        } else if (type === 'error') {
          line.innerHTML = `<span class="j-terminal__error">[ERR]</span> ${text}`;
        } else if (type === 'success') {
          line.innerHTML = `<span class="j-terminal__success">[OK]</span> ${text}`;
        } else {
          line.textContent = text;
        }
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
      };

      lines.forEach(l => addLine(l.text, l.type));

      let inputContainer = null;
      if (onCommand) {
        const input = JUNDA.el('input', {
          class: 'j-terminal__input',
          placeholder: 'Enter command...',
          onKeypress: (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
              const cmd = input.value.trim();
              addLine(cmd, 'command');
              onCommand(cmd, addLine);
              input.value = '';
            }
          }
        });
        inputContainer = JUNDA.el('div', { class: 'j-terminal__input-line' },
          JUNDA.el('span', { class: 'j-terminal__prompt', text: prompt }),
          input
        );
      }

      container.append(output, inputContainer);
      container.log = addLine;

      return container;
    },

    // TOAST — Notification popup (a11y: role="alert" + aria-live)
    toast: (props = {}) => {
      const {
        message = '',
        variant = 'default', // default | success | error | warning
        duration = 3000
      } = props;

      const toast = JUNDA.el('div', {
        class: `j-toast j-toast--${variant}`,
        role: 'alert',
        ariaLive: variant === 'error' ? 'assertive' : 'polite',
        text: message
      });

      document.body.appendChild(toast);
      
      // Animate in
      requestAnimationFrame(() => toast.classList.add('j-toast--show'));

      // Auto dismiss
      setTimeout(() => {
        toast.classList.remove('j-toast--show');
        setTimeout(() => toast.remove(), 300);
      }, duration);

      return toast;
    },

    // NAV — Navigation header
    nav: (props = {}) => {
      const {
        title = 'JUNDA',
        subtitle = '',
        items = [], // [{ label, href, active }]
        id = JUNDA.uid('nav')
      } = props;

      const nav = JUNDA.el('nav', { id, class: 'j-nav' });
      
      const brand = JUNDA.el('div', { class: 'j-nav__brand' },
        JUNDA.el('span', { class: 'j-nav__title', text: title }),
        subtitle ? JUNDA.el('span', { class: 'j-nav__subtitle', text: subtitle }) : null
      );

      const links = JUNDA.el('div', { class: 'j-nav__links' });
      items.forEach(item => {
        links.appendChild(JUNDA.el('a', {
          href: item.href || '#',
          class: `j-nav__link ${item.active ? 'j-nav__link--active' : ''}`,
          text: item.label
        }));
      });

      nav.append(brand, links);
      return nav;
    },

    // GRID — CSS Grid layout
    grid: (props = {}) => {
      const {
        children = [],
        columns = 2,
        gap = 'md', // sm | md | lg
        id = JUNDA.uid('grid')
      } = props;

      return JUNDA.el('div', {
        id,
        class: `j-grid j-grid--${columns} j-grid--gap-${gap}`
      }, ...children);
    },

    // DIVIDER — Section separator
    divider: (props = {}) => {
      const { label = '', id = JUNDA.uid('div') } = props;
      
      return JUNDA.el('div', { id, class: 'j-divider' },
        label ? JUNDA.el('span', { class: 'j-divider__label', text: label }) : null
      );
    },

    // SPINNER — Loading indicator
    spinner: (props = {}) => {
      const { size = 'md', id = JUNDA.uid('spin') } = props;
      return JUNDA.el('div', { id, class: `j-spinner j-spinner--${size}` });
    },

    // EMPTY — Empty state placeholder
    empty: (props = {}) => {
      const {
        icon = 'info',
        title = 'Nothing here',
        description = '',
        action = null,
        id = JUNDA.uid('empty')
      } = props;

      return JUNDA.el('div', { id, class: 'j-empty' },
        JUNDA.el('div', { class: 'j-empty__icon', html: JUNDA.icons.svg(icon, 48) }),
        JUNDA.el('div', { class: 'j-empty__title', text: title }),
        description ? JUNDA.el('div', { class: 'j-empty__desc', text: description }) : null,
        action
      );
    },

    // LOADING — Gold loading indicator (reserved use)
    loading: (props = {}) => {
      const {
        text = 'Loading...',
        id = JUNDA.uid('load')
      } = props;

      return JUNDA.el('div', { id, class: 'j-loading-container' },
        JUNDA.el('div', { class: 'j-loading-bar' }),
        JUNDA.el('div', { class: 'j-loading-text', text })
      );
    }
  },

  /* ============================================
     RENDER HELPERS
  ============================================ */

  // Mount component to DOM
  render: (component, container) => {
    const mount = JUNDA.mount(container);
    mount.innerHTML = '';
    mount.appendChild(component);
    return component;
  },

  // Quick component mount
  mount: (name, props, container) => {
    const cmp = JUNDA.components[name];
    if (!cmp) {
      console.error(`JUNDA: Unknown component "${name}"`);
      return null;
    }
    const el = cmp(props);
    if (container) JUNDA.render(el, container);
    return el;
  }
};

/* ============================================
   RATE LIMITER (Token Bucket)
   Usage: const limiter = JUNDA.rateLimit({ windowMs: 60000, maxRequests: 10 })
          const result = limiter(key) // { allowed, remaining, retryAfter? }
=========================================== */

JUNDA.rateLimit = (() => {
  const buckets = new Map();
  
  return (config = { windowMs: 60000, maxRequests: 100 }) => {
    return (key) => {
      const now = Date.now();
      let b = buckets.get(key);
      
      if (!b) {
        b = { tokens: config.maxRequests, last: now };
        buckets.set(key, b);
      }
      
      // Refill tokens
      const elapsed = now - b.last;
      const add = Math.floor((elapsed / config.windowMs) * config.maxRequests);
      if (add > 0) {
        b.tokens = Math.min(config.maxRequests, b.tokens + add);
        b.last = now;
      }
      
      // Check limit
      if (b.tokens <= 0) {
        const retryAfter = Math.ceil((config.windowMs - elapsed) / 1000);
        return { allowed: false, retryAfter };
      }
      
      b.tokens--;
      return { allowed: true, remaining: b.tokens };
    };
  };
})();

/* ============================================
   MARKDOWN COMPILER (DataBridge)
   Renders MD → HTML for API documentation
=========================================== */

JUNDA.md = {
  // Parse YAML frontmatter
  frontmatter: (md) => {
    const match = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { data: {}, content: md };
    
    const yaml = match[1];
    const content = match[2];
    const data = {};
    
    yaml.split('\n').forEach(line => {
      const [key, ...rest] = line.split(':');
      if (key && rest.length) {
        data[key.trim()] = rest.join(':').trim();
      }
    });
    
    return { data, content };
  },

  // Convert markdown to HTML
  toHTML: (md) => {
    let html = md
      // Escape HTML
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      // Tables (simple)
      .replace(/\|(.+)\|/g, (match) => {
        const cells = match.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      })
      // Horizontal rule
      .replace(/^---$/gm, '<hr>')
      // Line breaks
      .replace(/\n/g, '<br>');
    
    return html;
  },

  // Render markdown to container
  render: async (path, container) => {
    const mount = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;
    
    if (!mount) {
      console.error(`JUNDA.md: Container not found`, container);
      return null;
    }

    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const md = await response.text();
      const { data, content } = JUNDA.md.frontmatter(md);
      const html = JUNDA.md.toHTML(content);
      
      mount.innerHTML = html;
      mount.dataset.mdType = data.type || 'doc';
      mount.dataset.mdName = data.name || '';
      
      return { data, html };
    } catch (err) {
      mount.innerHTML = `<div class="j-md-error">[ERR] Failed to load ${path}: ${err.message}</div>`;
      return null;
    }
  },

  // Load component docs
  component: async (name, container) => {
    return JUNDA.md.render(`/api/components/${name}.md`, container);
  }
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('junda-loaded');
  
  // Auto-render any [data-md] elements
  document.querySelectorAll('[data-md]').forEach(el => {
    const path = el.dataset.md;
    if (path) JUNDA.md.render(path, el);
  });
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JUNDA;
}
