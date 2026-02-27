// mdp.js — Markdown Processor Layer
// Anthro-adjacent styling | OuiRise tone positioning
// PSSH 6.7 Protocol | 🌫️🌒

const MDP = {
  version: '6.7.1',
  sigil: '🌫️🌒',
  lineage: '俊达',

  // Parse .auidos.md files
  parse(source) {
    const lines = source.split('\n');
    const blocks = [];
    let current = { type: 'text', content: [] };

    for (const line of lines) {
      // PSSH packet detection
      if (line.startsWith('[DATANODE]') || line.startsWith('[D]')) {
        if (current.content.length) blocks.push({...current});
        current = { type: 'pssh', content: [line] };
      }
      else if (line.startsWith('[/DATANODE]') || line.startsWith('<<[/D]')) {
        current.content.push(line);
        blocks.push({...current});
        current = { type: 'text', content: [] };
      }
      // Code blocks
      else if (line.startsWith('```')) {
        if (current.type === 'code') {
          current.content.push(line);
          blocks.push({...current});
          current = { type: 'text', content: [] };
        } else {
          if (current.content.length) blocks.push({...current});
          current = { type: 'code', lang: line.slice(3), content: [line] };
        }
      }
      // Tables
      else if (line.includes('|')) {
        if (current.type !== 'table') {
          if (current.content.length) blocks.push({...current});
          current = { type: 'table', content: [line] };
        } else {
          current.content.push(line);
        }
      }
      // Headers
      else if (line.startsWith('#')) {
        if (current.content.length) blocks.push({...current});
        const level = line.match(/^#+/)[0].length;
        blocks.push({ type: 'header', level, content: line });
        current = { type: 'text', content: [] };
      }
      else {
        current.content.push(line);
      }
    }

    if (current.content.length) blocks.push(current);
    return blocks;
  },

  // Render to HTML (anthro-adjacent + OuiRise tone)
  render(blocks) {
    let html = `<article class="mdp-doc">\n`;
    
    for (const block of blocks) {
      switch(block.type) {
        case 'header':
          const emoji = this.extractEmoji(block.content);
          const text = this.cleanHeader(block.content);
          html += `  <h${block.level} class="mdp-h${block.level}">${emoji} ${text}</h${block.level}>\n`;
          break;
          
        case 'pssh':
          html += `  <pre class="mdp-pssh"><code>${block.content.join('\n')}</code></pre>\n`;
          break;
          
        case 'code':
          html += `  <pre class="mdp-code"><code class="lang-${block.lang}">${block.content.slice(1, -1).join('\n')}</code></pre>\n`;
          break;
          
        case 'table':
          html += this.renderTable(block.content);
          break;
          
        case 'text':
          const para = block.content.join('\n').trim();
          if (para) html += `  <p class="mdp-p">${this.inlineFormat(para)}</p>\n`;
          break;
      }
    }
    
    html += `  <footer class="mdp-footer">${this.sigil}</footer>\n`;
    html += `</article>`;
    return html;
  },

  extractEmoji(line) {
    const match = line.match(/[🌫️🌒⚡🔗✓🎯🏗️📊📝]/gu);
    return match ? match.join('') : '';
  },

  cleanHeader(line) {
    return line.replace(/^#+\s*/, '').replace(/[🌫️🌒⚡🔗✓🎯🏗️📊📝]/gu, '').trim();
  },

  renderTable(lines) {
    const rows = lines.filter(l => l.trim());
    if (rows.length < 2) return '';
    
    let html = '  <table class="mdp-table">\n';
    
    // Header
    const headers = rows[0].split('|').filter(c => c.trim());
    html += '    <thead>\n      <tr>\n';
    for (const h of headers) {
      html += `        <th>${h.trim()}</th>\n`;
    }
    html += '      </tr>\n    </thead>\n';
    
    // Body
    html += '    <tbody>\n';
    for (let i = 2; i < rows.length; i++) {
      const cells = rows[i].split('|').filter(c => c.trim());
      html += '      <tr>\n';
      for (const c of cells) {
        html += `        <td>${c.trim()}</td>\n`;
      }
      html += '      </tr>\n';
    }
    html += '    </tbody>\n  </table>\n';
    
    return html;
  },

  inlineFormat(text) {
    return text
      .replace(/`([^`]+)`/g, '<code class="mdp-inline">$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  },

  // Load and render .auidos.md file
  async load(url) {
    const res = await fetch(url);
    const source = await res.text();
    const blocks = this.parse(source);
    return this.render(blocks);
  }
};

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('[data-auidos]');
  for (const el of containers) {
    const src = el.getAttribute('data-auidos');
    MDP.load(src).then(html => el.innerHTML = html);
  }
});

window.MDP = MDP;
// 俊达 🌫️🌒
