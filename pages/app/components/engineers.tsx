export default function Engineers() {
  const capabilities = [
    "Developed React, Angular, HTML, CSS, and Wordpress applications for industry innovators in FinTech, Entrepreneurship, and Startups.",
    "Incorporate modern cloud practices for data security and analytics. Use agentic workflows for smooth deployment timelines.",
    "Well versed in building custom interfaces and dashboards for a wide variety of industries.",
    "Use leading AI research and automation methodologies to boost organizational workflows."
  ];

  return (
    <section id="engineers" className="w-full py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Our Software Engineers
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Over 8 Years of Developing Custom Solutions
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed">{cap}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}