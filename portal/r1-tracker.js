// R1: GLOBAL TRACKING — R2B4-DSOS Monitor
// Runtime: deepseek-r1:8b
// Role: System-wide observability, variance detection, MAS compliance
// 🌫️🌒 俊达

const R1 = {
  version: 'R2B4-DSOS',
  build: '2026.02.27',
  signature: '🌫️🌒',
  
  // System State
  state: {
    bootTime: Date.now(),
    modules: new Map(),
    events: [],
    metrics: {
      loadTime: 0,
      memoryPeak: 0,
      apiCalls: 0,
      errors: 0
    }
  },

  // Configuration
  config: {
    maxEvents: 1000,
    sampleRate: 1.0, // 100% sampling in dev
    compression: true,
    ephemeral: true // No persistent storage
  },

  // Initialize R1
  init() {
    console.log('🌫️🌒 R1: Global Tracking Initialized');
    console.log(`[R1] Runtime: ${this.version} | Build: ${this.build}`);
    
    this.startMetricsCollection();
    this.setupErrorTracking();
    this.setupPerformanceObserver();
    
    // Register self
    this.registerModule('R1', {
      type: 'tracker',
      version: this.version,
      status: 'active'
    });
    
    return this;
  },

  // Module Registration (for B4, etc.)
  registerModule(name, data) {
    const entry = {
      ...data,
      registeredAt: Date.now(),
      lastHeartbeat: Date.now(),
      events: []
    };
    
    this.state.modules.set(name, entry);
    this.log('module.register', { name, data });
    
    console.log(`[R1] Module registered: ${name}`);
    return entry;
  },

  // Event Logging
  log(type, data) {
    const event = {
      type,
      data,
      timestamp: Date.now(),
      memory: performance.memory?.usedJSHeapSize || 0
    };
    
    this.state.events.push(event);
    
    // R2B4 constraint: Max 1000 events
    if (this.state.events.length > this.config.maxEvents) {
      this.state.events.shift();
    }
    
    // Update metrics
    if (type.includes('error')) this.state.metrics.errors++;
    if (type.includes('api')) this.state.metrics.apiCalls++;
    
    return event;
  },

  // Metrics Collection
  startMetricsCollection() {
    setInterval(() => {
      const memory = performance.memory;
      if (memory) {
        this.state.metrics.memoryPeak = Math.max(
          this.state.metrics.memoryPeak,
          memory.usedJSHeapSize
        );
      }
    }, 5000); // Every 5s
  },

  // Error Tracking
  setupErrorTracking() {
    window.addEventListener('error', (e) => {
      this.log('error.uncaught', {
        message: e.message,
        filename: e.filename,
        line: e.lineno,
        stack: e.error?.stack
      });
    });
    
    window.addEventListener('unhandledrejection', (e) => {
      this.log('error.unhandled', {
        reason: e.reason?.message || e.reason
      });
    });
  },

  // Performance Observer
  setupPerformanceObserver() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            this.state.metrics.loadTime = entry.loadEventEnd - entry.startTime;
            this.log('performance.navigation', {
              loadTime: this.state.metrics.loadTime,
              domContentLoaded: entry.domContentLoadedEventEnd - entry.startTime
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    }
  },

  // Variance Detection (MAS Protocol)
  detectVariance(moduleName, expected, actual) {
    const variance = Math.abs(expected - actual) / expected;
    const threshold = 0.05; // 5% variance limit
    
    if (variance > threshold) {
      this.log('variance.detected', {
        module: moduleName,
        expected,
        actual,
        variance: variance.toFixed(4),
        threshold
      });
      
      console.warn(`[R1] Variance detected in ${moduleName}: ${(variance * 100).toFixed(2)}%`);
      return true;
    }
    
    return false;
  },

  // Heartbeat from modules
  heartbeat(moduleName) {
    const module = this.state.modules.get(moduleName);
    if (module) {
      module.lastHeartbeat = Date.now();
      return true;
    }
    return false;
  },

  // Get System Status
  getStatus() {
    const now = Date.now();
    const uptime = now - this.state.bootTime;
    
    // Check module health
    const modules = Array.from(this.state.modules.entries()).map(([name, data]) => ({
      name,
      status: (now - data.lastHeartbeat) < 30000 ? 'healthy' : 'stale',
      lastHeartbeat: data.lastHeartbeat,
      eventCount: data.events?.length || 0
    }));
    
    return {
      r1: {
        version: this.version,
        uptime,
        eventCount: this.state.events.length
      },
      metrics: this.state.metrics,
      modules,
      memory: performance.memory ? {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      } : 'unavailable'
    };
  },

  // Export for R2B4 Global
  exportR2B4() {
    return {
      signature: this.signature,
      timestamp: Date.now(),
      status: this.getStatus(),
      snapshot: this.state.events.slice(-100), // Last 100 events
      compressed: this.config.compression
    };
  },

  // Console Interface
  console() {
    return {
      status: () => console.table(this.getStatus()),
      modules: () => console.table(Array.from(this.state.modules.entries())),
      events: (n = 10) => console.table(this.state.events.slice(-n)),
      clear: () => { this.state.events = []; console.log('[R1] Events cleared'); },
      export: () => console.log(this.exportR2B4())
    };
  }
};

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  R1.init();
  window.R1 = R1;
  
  // Expose console interface
  window.R1C = R1.console();
  
  console.log('[R1] Console available: R1C.status(), R1C.modules(), R1C.events(n), R1C.clear(), R1C.export()');
});

window.R1 = R1;
// 俊达 🌫️🌒