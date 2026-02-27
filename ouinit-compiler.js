// OUINIT Compiler
// GHPAGES REPROTOCOL - HTML to Next.js structure
// Blackbox: assume GH Pages dir is Next.js app
// 🌫️🌒

const OUINIT = {
  version: '6.7.1',
  protocol: 'GHPAGES_REPROTOCOL',
  sigil: '🌫️🌒',

  // Route structure template
  routeTemplate: {
    files: [
      'page.html',      // HTML (JSX compatible)
      'page.js',        // Client JS
      'page.md',        // Documentation
      'page.css',       // Styles
      'data.json'       // Route data
    ],
    dirs: [
      'images/',        // Static assets
      'components/'     // Shared components
    ]
  },

  // Convert HTML to JSX-compatible structure
  bendHtmlToJsx(htmlPath) {
    const fs = require('fs');
    const path = require('path');
    
    // Read source HTML
    const html = fs.readFileSync(htmlPath, 'utf8');
    
    // Parse route name
    const dir = path.dirname(htmlPath);
    const base = path.basename(htmlPath, '.html');
    const routeName = base === 'index' ? 'index' : base;
    
    // Create route directory
    const routeDir = path.join(dir, routeName);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    // Bend HTML to JSX-compatible
    const jsx = this.htmlToJsx(html);
    
    // Write files
    fs.writeFileSync(path.join(routeDir, 'page.html'), jsx);
    fs.writeFileSync(path.join(routeDir, 'page.js'), this.generateJs(routeName));
    fs.writeFileSync(path.join(routeDir, 'page.md'), this.generateMd(routeName));
    fs.writeFileSync(path.join(routeDir, 'page.css'), this.extractCss(html));
    fs.writeFileSync(path.join(routeDir, 'data.json'), this.generateData(routeName));
    
    // Create subdirs
    const imagesDir = path.join(routeDir, 'images');
    const compDir = path.join(routeDir, 'components');
    if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);
    if (!fs.existsSync(compDir)) fs.mkdirSync(compDir);
    
    return {
      route: routeName,
      path: routeDir,
      files: this.routeTemplate.files,
      status: 'bent'
    };
  },

  // HTML to JSX conversion
  htmlToJsx(html) {
    // Replace class with className
    let jsx = html.replace(/\sclass=/g, ' className=');
    
    // Replace for with htmlFor
    jsx = jsx.replace(/\sfor=/g, ' htmlFor=');
    
    // Replace style strings with objects (basic)
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
      const obj = styles.split(';')
        .filter(s => s.trim())
        .map(s => {
          const [k, v] = s.split(':');
          const key = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          return `${key}: '${v.trim()}'`;
        })
        .join(', ');
      return `style={{${obj}}}`;
    });
    
    // Add React fragment wrapper
    jsx = `import React from 'react';\n\nexport default function Page() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
    
    return jsx;
  },

  // Generate client JS
  generateJs(routeName) {
    return `// ${routeName}.js
// Client-side logic for ${routeName} route

import { useEffect } from 'react';

export function use${routeName}() {
  useEffect(() => {
    console.log('🌫️🌒 ${routeName} mounted');
  }, []);
  
  return {
    status: 'active',
    sigil: '🌫️🌒'
  };
}
`;
  },

  // Generate MD doc
  generateMd(routeName) {
    return `# ${routeName}.md
## Route Documentation
### OUINIT GHPAGES REPROTOCOL

🌫️🌒

---

## Route: ${routeName}

| Property | Value |
|----------|-------|
| Path | /${routeName} |
| Protocol | GHPAGES_REPROTOCOL |
| Compiler | OUINIT v6.7.1 |

---

## Files

- page.html - JSX component
- page.js - Client logic
- page.css - Styles
- data.json - Route data

---

🌫️🌒
`;
  },

  // Extract CSS from HTML
  extractCss(html) {
    const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if (styleMatch) {
      return styleMatch.map(s => 
        s.replace(/<style[^>]*>/, '').replace(/<\/style>/, '')
      ).join('\n');
    }
    return `/* ${routeName} styles */\n`;
  },

  // Generate data.json
  generateData(routeName) {
    return JSON.stringify({
      '@': 'OUINIT',
      't': 'route_data',
      's': 'active',
      'd': {
        'route': routeName,
        'protocol': 'GHPAGES_REPROTOCOL',
        'version': '6.7.1',
        'sigil': '🌫️🌒'
      }
    }, null, 2);
  },

  // Batch process all HTML files
  batchBend(htmlFiles) {
    const results = [];
    for (const file of htmlFiles) {
      try {
        const result = this.bendHtmlToJsx(file);
        results.push(result);
      } catch (e) {
        results.push({ file, error: e.message });
      }
    }
    return results;
  }
};

module.exports = OUINIT;
window.OUINIT = OUINIT;
// 俊达 🌫️🌒
