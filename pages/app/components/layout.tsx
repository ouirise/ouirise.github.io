import { Outlet, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b border-fog/20 bg-void/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-serif text-fog">OuiRise</Link>
          
          <div className="hidden md:flex gap-8">
            <Link to="/prompts" className="text-mist hover:text-fog transition-colors">Prompts</Link>
            <Link to="/science" className="text-mist hover:text-fog transition-colors">Science</Link>
            <Link to="/history" className="text-mist hover:text-fog transition-colors">History</Link>
            <Link to="/about" className="text-mist hover:text-fog transition-colors">About</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-fog/20 px-4 py-4 space-y-4">
            <Link to="/prompts" className="block text-mist" onClick={() => setIsOpen(false)}>Prompts</Link>
            <Link to="/science" className="block text-mist" onClick={() => setIsOpen(false)}>Science</Link>
            <Link to="/history" className="block text-mist" onClick={() => setIsOpen(false)}>History</Link>
            <Link to="/about" className="block text-mist" onClick={() => setIsOpen(false)}>About</Link>
          </div>
        )}
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-fog/20 py-8 px-4 text-center text-mist text-sm">
        <p>contact: okk@ouirise.co</p>
      </footer>
    </div>
  )
}