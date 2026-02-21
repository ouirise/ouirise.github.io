export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Launch and Scale Your Business
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between startup vision and enterprise-grade reality.
          Using agentic workflows and modern cloud architecture, we develop the tools 
          innovators need to lead.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            View Plans
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
            Recent Work
          </button>
        </div>
      </div>
    </section>
  );
}