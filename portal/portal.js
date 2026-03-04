  // Clock
    setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      document.getElementById('tray').textContent = time;
    }, 1000);

    // Start Menu
    function toggleStart() {
      document.getElementById('startMenu').classList.toggle('open');
    }

    // Window Management
    let activeWin = null;

    function openWin(name) {
      // Close others on mobile
      if (window.innerWidth < 768) {
        document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
        document.querySelectorAll('.task-item').forEach(t => t.classList.remove('active'));
      }
      
      document.getElementById(`win-${name}`).classList.add('active');
      document.getElementById(`task-${name}`).classList.add('active');
      activeWin = name;
    }

    function closeWin(name) {
      document.getElementById(`win-${name}`).classList.remove('active');
      document.getElementById(`task-${name}`).classList.remove('active');
    }

    function minWin(name) {
      document.getElementById(`win-${name}`).classList.remove('active');
      document.getElementById(`task-${name}`).classList.remove('active');
    }

    function focusWin(name) {
      if (document.getElementById(`win-${name}`).classList.contains('active')) {
        minWin(name);
      } else {
        openWin(name);
      }
    }

    // Close start when clicking elsewhere
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.start-menu') && !e.target.closest('.start-btn')) {
        document.getElementById('startMenu').classList.remove('open');
      }
    });

    // Init
    openWin('home');