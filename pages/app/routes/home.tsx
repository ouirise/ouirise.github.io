import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Engineers from './components/Engineers';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Engineers />
        <Pricing />
      </main>
      <footer className="w-full py-8 px-4 text-center text-gray-500 text-sm border-t border-gray-100">
        © 2025 Ouirise Initiative. All rights reserved.
      </footer>
    </div>
  );
}

export default App;