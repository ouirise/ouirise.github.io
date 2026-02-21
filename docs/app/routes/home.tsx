import { Shield, BookOpen, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
      {/* Hero */}
      <section className="text-center space-y-6 pt-12">
        <h1 className="text-5xl md:text-6xl font-serif text-fog">Scale Your Understanding</h1>
        <p className="text-xl text-mist max-w-2xl mx-auto">
          Architect defensive systems that protect community data and scale human wisdom. 
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a href="/prompts" className="bg-orange/20 border border-orange/50 text-orange px-6 py-3 rounded hover:bg-orange/30 transition-colors">
            Begin the Work
          </a>
          <a href="/science" className="border border-fog/30 text-fog px-6 py-3 rounded hover:border-fog/60 transition-colors">
            View Method
          </a>
        </div>
      </section>

      {/* Packages */}
      <section>
        <h2 className="text-3xl font-serif text-fog mb-8 text-center">Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-8">
            <div className="text-orange text-sm mb-2">Protection Audit</div>
            <h3 className="text-2xl text-fog mb-4">MAS Assessment</h3>
            <p className="text-mist mb-6">Review your stack for extraction vulnerabilities. We audit data flows, authentication patterns, and vendor lock-in risks.</p>
            <ul className="space-y-2 text-mist text-sm mb-6">
              <li>Data sovereignty analysis</li>
              <li>Local-first architecture review</li>
              <li>Vendor exit strategy</li>
            </ul>
            <button className="w-full border border-gold/50 text-gold py-2 rounded hover:bg-gold/10 transition-colors">
              Contact for Proposal
            </button>
          </div>

          <div className="glass p-8">
            <div className="text-orange text-sm mb-2">Training</div>
            <h3 className="text-2xl text-fog mb-4">AI Coaching</h3>
            <p className="text-mist mb-6">Six sessions for your team. Learn to build with distributed systems rather than extractive platforms.</p>
            <ul className="space-y-2 text-mist text-sm mb-6">
              <li>Prompt engineering</li>
              <li>Local LLM deployment</li>
              <li>Community data governance</li>
            </ul>
            <div className="text-fog font-bold mb-4">$2,500 / team</div>
            <button className="w-full bg-orange/20 border border-orange/50 text-orange py-2 rounded hover:bg-orange/30 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Deployments */}
      <section>
        <h2 className="text-3xl font-serif text-fog mb-8 text-center">Past Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass p-6">
            <Shield className="text-orange mb-4" size={24} />
            <h4 className="text-fog font-bold mb-2">Site Archaeology</h4>
            <p className="text-mist text-sm">Migrated financial firm from cloud-locked SaaS to local-first architecture. 90% reduction in data extraction risk.</p>
          </div>
          
          <div className="glass p-6">
            <BookOpen className="text-orange mb-4" size={24} />
            <h4 className="text-fog font-bold mb-2">Memory Infrastructure</h4>
            <p className="text-mist text-sm">Built witness-node system for 501c3. Donor and beneficiary data remains community-owned, zero breaches.</p>
          </div>
          
          <div className="glass p-6">
            <Globe className="text-orange mb-4" size={24} />
            <h4 className="text-fog font-bold mb-2">Container Pattern</h4>
            <p className="text-mist text-sm">Designed patient data architecture for healthcare startup. HIPAA-compliant, patient-owned encryption keys.</p>
          </div>
        </div>
      </section>
    </div>
  )
}