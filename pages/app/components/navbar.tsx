export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4 md:px-8 flex justify-between items-center bg-white border-b border-gray-100">
      <div className="text-xl font-bold text-gray-900 tracking-tight">
        Ouirise Initiative
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="#engineers" className="hover:text-gray-900 transition-colors">Engineers</a>
        <a href="#deployments" className="hover:text-gray-900 transition-colors">Deployments</a>
        <a href="#plans" className="hover:text-gray-900 transition-colors">Plans</a>
      </div>
      <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
        Get Started
      </button>
    </nav>
  );
}