export default function Pricing() {
  const plans = [
    {
      name: "Prototype",
      subtitle: "Single Page Application",
      description: "The SPA Plan is built to draft ideas and to assist clients seeking cost-effective solutions without compromising quality. Perfect for landing pages and high-impact marketing assets.",
      features: ["Modern Cloud Deployment", "Responsive Design", "Speed Optimized"],
      price: "Starting at $2,500",
      popular: false,
      cta: "Start Prototype"
    },
    {
      name: "Most Popular",
      subtitle: "The MVP Solution",
      description: "Expert software engineers scale your business with an interactive cloud solution. A balanced approach between availability and flexibility, suitable for projects requiring consistent evolution.",
      features: ["Custom Database Integration", "Server Management Included", "Interactive Dashboards"],
      price: "Starting at $8,000",
      popular: true,
      cta: "Build MVP"
    },
    {
      name: "Enterprise",
      subtitle: "Big Data & AI",
      description: "Tailored for comprehensive support and prioritized attention. We build custom dashboards and AI agentic solutions to improve workflow productivity and data-driven decision making.",
      features: ["AI Agent Workflows", "Full-time Engineering Focus", "Custom Analytics Suites"],
      price: "Custom Pricing",
      popular: false,
      cta: "Contact Us"
    }
  ];

  return (
    <section id="plans" className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Recent Deployments
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Plans
          </h3>
          <p className="text-gray-600 text-lg">
            Engineered for scalability, drafted for success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular 
                  ? 'border-gray-900 bg-gray-900 text-white' 
                  : 'border-gray-200 bg-white text-gray-900'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-100 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              
              <div className="mb-6">
                <span className={`text-sm font-medium uppercase tracking-wider ${
                  plan.popular ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {plan.name}
                </span>
                <h4 className="text-2xl font-bold mt-2">{plan.subtitle}</h4>
              </div>

              <p className={`mb-6 leading-relaxed ${
                plan.popular ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-gray-400' : 'text-gray-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.popular ? 'text-gray-300' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className={`text-lg font-bold mb-4 ${
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.price}
                </p>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}