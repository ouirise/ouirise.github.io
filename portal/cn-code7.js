// CN-CODE7: Compiler/Builder Node
// Runtime: R15-GPTOS
// Memory: 4.0GB
// Role: Code generation, file operations, build orchestration
// 🌫️🌒 俊达

const CNCode7 = {
  id: 'cn-code7',
  version: '6.9.0-builder',
  role: 'compiler-builder',
  memoryLimit: 4.0 * 1024 * 1024 * 1024, // 4.0GB
  
  state: {
    builds: [],
    templates: new Map(),
    cache: new Map()
  },

  // Initialize templates
  init() {
    this.registerTemplate('html-shell', this.templates.htmlShell);
    this.registerTemplate('css-theme', this.templates.cssTheme);
    this.registerTemplate('js-module', this.templates.jsModule);
    console.log('[CODE7] Templates registered: 3');
  },

  templates: {
    htmlShell: (config) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.title}</title>
    <style>${config.css || ''}</style>
</head>
<body>
    ${config.content}
    <script>${config.js || ''}</script>
</body>
</html>`,

    cssTheme: (config) => `:root {
    --fog-0: ${config.void || '#0a0a0a'};
    --fog-1: ${config.tactical || '#121212'};
    --gold: ${config.gold || '#D4AF37'};
    --moon: ${config.signal || '#e0e0e0'};
}`,

    jsModule: (config) => `const ${config.name} = {
    version: '${config.version}',
    init() {
        console.log('${config.name} initialized');
    }
};
window.${config.name} = ${config.name};
// 俊达 🌫️🌒`
  },

  registerTemplate(name, generator) {
    this.state.templates.set(name, generator);
  },

  // Build file from template
  build(templateName, config) {
    const template = this.state.templates.get(templateName);
    if (!template) {
      return { error: `Template not found: ${templateName}` };
    }
    
    const start = performance.now();
    const content = template(config);
    const duration = performance.now() - start;
    
    const build = {
      id: `build_${Date.now()}`,
      template: templateName,
      config,
      content,
      size: content.length,
      duration,
      timestamp: Date.now()
    };
    
    this.state.builds.push(build);
    
    // Prune old builds
    if (this.state.builds.length > 50) {
      this.state.builds.shift();
    }
    
    return build;
  },

  // Minify content
  minify(content, type) {
    switch(type) {
      case 'js':
        return content
          .replace(/\/\*[\s\S]*?\*\//g, '')
          .replace(/\/\/.*$/gm, '')
          .replace(/\s+/g, ' ')
          .trim();
      
      case 'css':
        return content
          .replace(/\/\*[\s\S]*?\*\//g, '')
          .replace(/\s+/g, ' ')
          .replace(/;\s*}/g, '}')
          .trim();
      
      case 'html':
        return content
          .replace(/>\s+</g, '><')
          .replace(/\s+/g, ' ')
          .trim();
      
      default:
        return content;
    }
  },

  // Generate bundle
  bundle(files) {
    const bundle = {
      js: '',
      css: '',
      html: ''
    };
    
    for (const file of files) {
      if (file.name.endsWith('.js')) bundle.js += file.content + '\n';
      if (file.name.endsWith('.css')) bundle.css += file.content + '\n';
      if (file.name.endsWith('.html')) bundle.html = file.content;
    }
    
    // Wrap JS
    bundle.js = `(function(){${bundle.js}})();`;
    
    // Inject CSS into HTML
    if (bundle.html && bundle.css) {
      bundle.html = bundle.html.replace('</head>', `<style>${bundle.css}</style></head>`);
    }
    
    // Inject JS into HTML
    if (bundle.html && bundle.js) {
      bundle.html = bundle.html.replace('</body>', `<script>${bundle.js}</script></body>`);
    }
    
    return {
      size: bundle.html.length + bundle.js.length + bundle.css.length,
      files: bundle
    };
  },

  // Validate syntax
  validate(content, type) {
    const errors = [];
    
    if (type === 'js') {
      try {
        new Function(content);
      } catch (e) {
        errors.push(e.message);
      }
    }
    
    if (type === 'json') {
      try {
        JSON.parse(content);
      } catch (e) {
        errors.push(e.message);
      }
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  },

  // Download generated file
  download(content, filename, type = 'text/plain') {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    
    return { downloaded: true, filename, size: content.length };
  },

  getStatus() {
    return {
      id: this.id,
      version: this.version,
      builds: this.state.builds.length,
      templates: this.state.templates.size,
      cache: this.state.cache.size
    };
  }
};

document.addEventListener('DOMContentLoaded', () => {
  CNCode7.init();
  if (typeof R1 !== 'undefined') R1.registerModule('CNCode7', CNCode7.getStatus());
  window.CNCode7 = CNCode7;
  console.log('🌫️🌒 CN-CODE7: Compiler/Builder Active');
});

window.CNCode7 = CNCode7;
// 俊达 🌫️🌒