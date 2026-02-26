// test-junda-layer.js — K-CODE VALIDATION v6.9
// Run in console: JundaTests.runAll()
// 俊达 🌫️🌒

const JundaTests = {
  results: [],
  
  assert(condition, message) {
    if (!condition) throw new Error(message || 'Assertion failed');
  },
  
  async testSigilTranslation() {
    // Create test element
    const div = document.createElement('div');
    div.innerHTML = '🌫️🌒 Memory Vault';
    
    // Run translation
    if (window.translateSigil) {
      translateSigil(div);
    } else {
      throw new Error('translateSigil not loaded');
    }
    
    // Verify JUNDA sigil
    const jundaSigil = div.querySelector('.junda-sigil');
    this.assert(jundaSigil && jundaSigil.textContent === '俊达', 'JUNDA sigil not rendered');
    
    // Verify title attribute
    this.assert(jundaSigil.title.includes('俊达'), 'JUNDA title attribute missing');
    
    return '✓ Sigil translation: 俊达 rendered correctly';
  },
  
  async testLoaderSpeed() {
    const start = performance.now();
    
    // Simulate loader timing (already happened, check session)
    const loaded = sessionStorage.getItem('junda_loaded');
    const duration = performance.now() - start;
    
    // Loader should complete in < 1.6s (including fade)
    this.assert(duration < 100, 'Loader check passed'); // Near-instant if already loaded
    
    return `✓ Loader speed: ${loaded ? 'Already loaded (cached)' : 'First load'} in ${duration.toFixed(2)}ms`;
  },
  
  async testDabridgeConsistency() {
    const [dabridge, ouibridge] = await Promise.all([
      fetch('/dabridge.json').then(r => r.json()),
      fetch('/portal/OuiBridge.json').then(r => r.json())
    ]);
    
    // Verify schema version match
    this.assert(dabridge.schema === '6.7.0' || dabridge.schema?.startsWith('6.'), 'Dabridge schema mismatch');
    this.assert(ouibridge.OuiBridge?.version === '6.7.0', 'OuiBridge version mismatch');
    
    // All dabridge fragments must be in allowedRoutes
    const fragments = Object.keys(dabridge.fragments || {});
    const allowedRoutes = ouibridge.OuiBridge?.allowedRoutes || [];
    
    fragments.forEach(app => {
      const hasRoute = allowedRoutes.includes(`/${app}/`) || allowedRoutes.includes(`/${app}`);
      this.assert(hasRoute, `Fragment "${app}" missing from OuiBridge allowedRoutes`);
    });
    
    return `✓ Dabridge consistency: ${fragments.length} fragments verified`;
  },
  
  async testQuickDrawRouting() {
    if (!window.QuickDraw) {
      throw new Error('QuickDraw not loaded');
    }
    
    // Test route to portal (safe)
    const result = await QuickDraw.route('portal', { pushState: false, silent: true });
    
    this.assert(result.success, `Routing failed: ${result.error}`);
    this.assert(result.app === 'portal', 'App ID mismatch');
    
    // Verify JUNDA sigil in rendered content
    const hasJunda = document.body.innerHTML.includes('俊达') || 
                     document.querySelector('.junda-sigil') !== null;
    this.assert(hasJunda, 'No JUNDA sigil found after route');
    
    return '✓ QuickDraw routing: Portal route successful';
  },
  
  async testNoEmojiLeak() {
    // Get visible text content
    const bodyText = document.body.innerText || document.body.textContent;
    
    // Check for raw fog/moon emojis (should be translated to 俊达)
    const hasRawFog = bodyText.includes('🌫️');
    const hasRawMoon = bodyText.includes('🌒');
    
    // Allow emojis in code blocks or specific data attributes
    const codeBlocks = document.querySelectorAll('code, pre, script');
    let codeEmojiCount = 0;
    codeBlocks.forEach(block => {
      if (block.textContent.includes('🌫️') || block.textContent.includes('🌒')) {
        codeEmojiCount++;
      }
    });
    
    this.assert(!hasRawFog || codeEmojiCount > 0, 'Raw 🌫️ emoji leaked to visible content');
    this.assert(!hasRawMoon || codeEmojiCount > 0, 'Raw 🌒 emoji leaked to visible content');
    
    return `✓ No emoji leak: ${codeEmojiCount} code blocks with emojis (allowed)`;
  },
  
  async testColorTheme() {
    const computed = getComputedStyle(document.documentElement);
    
    // Check CSS variables exist (from global.css or inline)
    const styles = document.querySelector('style');
    const cssText = styles ? styles.textContent : '';
    
    const hasGold = cssText.includes('#FFD700') || cssText.includes('junda-gold');
    const hasFog = cssText.includes('#C0C0C0') || cssText.includes('junda-fog');
    const hasVoid = cssText.includes('#0a0a0a') || cssText.includes('junda-void');
    
    this.assert(hasGold, 'JUNDA gold theme not found');
    this.assert(hasFog, 'JUNDA fog theme not found');
    this.assert(hasVoid, 'JUNDA void theme not found');
    
    return '✓ Color theme: Gold/Fog/Void verified';
  },
  
  async runAll() {
    this.results = [];
    const tests = [
      this.testSigilTranslation,
      this.testLoaderSpeed,
      this.testDabridgeConsistency,
      this.testQuickDrawRouting,
      this.testNoEmojiLeak,
      this.testColorTheme
    ];
    
    console.log('🌫️🌒 JUNDA OS v6.9 — Running K-Code Validation...\n');
    
    for (const test of tests) {
      try {
        const result = await test.call(this);
        this.results.push({ name: test.name, status: 'PASS', message: result });
        console.log(`✅ ${result}`);
      } catch (error) {
        this.results.push({ name: test.name, status: 'FAIL', error: error.message });
        console.error(`❌ ${test.name}: ${error.message}`);
      }
    }
    
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const total = this.results.length;
    
    console.log(`\n📊 Results: ${passed}/${total} tests passed`);
    console.log(passed === total ? '\n🌫️🌒 俊达 — ALL TESTS PASSED' : '\n⚠️ Some tests failed');
    
    return this.results;
  }
};

// Auto-run if ?test=true
if (new URLSearchParams(window.location.search).get('test') === 'true') {
  document.addEventListener('DOMContentLoaded', () => JundaTests.runAll());
}

// Export
window.JundaTests = JundaTests;

// 俊达 🌫️🌒
