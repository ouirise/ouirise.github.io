// Global Search Header Component for 0x6C6F6C
// Include this script in any page to add search functionality

(function() {
    // Documentation index - shared across all pages
    const searchIndex = [
        // MOVES
        { title: 'ART', section: 'MOVES', tag: 'Creative', url: '/0x6C6F6C/moves/art/' },
        { title: 'ARTSCI', section: 'MOVES', tag: 'Method', url: '/0x6C6F6C/moves/artsci/' },
        { title: 'CULTURESCAN', section: 'MOVES', tag: 'Intel', url: '/0x6C6F6C/moves/culturescan/' },
        { title: 'CYBERCHESS', section: 'MOVES', tag: 'Strategy', url: '/0x6C6F6C/moves/cyberchess/' },
        { title: 'DESKTOP_SIM', section: 'MOVES', tag: 'Tutorial', url: '/0x6C6F6C/moves/desktop_sim/' },
        { title: 'INSPIRE', section: 'MOVES', tag: 'Motivation', url: '/0x6C6F6C/moves/inspire/' },
        { title: 'LANG', section: 'MOVES', tag: 'AI', url: '/0x6C6F6C/moves/lang/' },
        { title: 'NAV', section: 'MOVES', tag: 'Arch', url: '/0x6C6F6C/moves/nav/' },
        { title: 'SKILLCREATOR', section: 'MOVES', tag: 'Dev', url: '/0x6C6F6C/moves/skillcreator/' },
        { title: 'THEME', section: 'MOVES', tag: 'Design', url: '/0x6C6F6C/moves/theme/' },
        { title: 'UI', section: 'MOVES', tag: 'Interface', url: '/0x6C6F6C/moves/ui/' },
        { title: 'UX', section: 'MOVES', tag: 'Experience', url: '/0x6C6F6C/moves/ux/' },
        // POSITIONS
        { title: '0', section: 'POSITIONS', tag: 'Origin', url: '/0x6C6F6C/positions/0/' },
        { title: 'B4D2', section: 'POSITIONS', tag: 'Role', url: '/0x6C6F6C/positions/b4d2/' },
        { title: 'CONSCIOUSNESS', section: 'POSITIONS', tag: 'Model', url: '/0x6C6F6C/positions/consciousness/' },
        { title: 'CONTEXT', section: 'POSITIONS', tag: 'Protocol', url: '/0x6C6F6C/positions/context/' },
        { title: 'CONTRACTS', section: 'POSITIONS', tag: 'Legal', url: '/0x6C6F6C/positions/contracts/' },
        { title: 'FLEET', section: 'POSITIONS', tag: 'Registry', url: '/0x6C6F6C/positions/fleet/' },
        { title: 'MUMININ', section: 'POSITIONS', tag: 'Position', url: '/0x6C6F6C/positions/muminin/' },
        // SHARDS
        { title: 'SKILLS', section: 'SHARDS', tag: 'Capabilities', url: '/0x6C6F6C/shards/skills/' }
    ];

    // Initialize search when DOM is ready
    function initSearch() {
        const searchInput = document.getElementById('globalSearchInput');
        const searchResults = document.getElementById('globalSearchResults');
        
        if (!searchInput || !searchResults) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.classList.remove('active');
                return;
            }
            
            const matches = searchIndex.filter(item => 
                item.title.toLowerCase().includes(query) ||
                item.section.toLowerCase().includes(query) ||
                item.tag.toLowerCase().includes(query)
            ).slice(0, 6);
            
            if (matches.length === 0) {
                searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-title">No results</div></div>';
            } else {
                searchResults.innerHTML = matches.map(item => `
                    <div class="search-result-item" onclick="window.location='${item.url}'">
                        <div class="search-result-title">${item.title}</div>
                        <div class="search-result-meta">${item.section} // ${item.tag}</div>
                    </div>
                `).join('');
            }
            
            searchResults.classList.add('active');
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.classList.remove('active');
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
            if (e.key === 'Escape') {
                searchResults.classList.remove('active');
                searchInput.blur();
            }
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }
})();
