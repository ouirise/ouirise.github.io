export default function Science() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <section>
        <h1 className="text-4xl font-serif text-fog mb-6">The Method</h1>
        <p className="text-mist text-lg">Vertical slicing is the practice of meeting complexity with minimum viable intervention.</p>
      </section>

      <section className="space-y-6">
        <div className="glass p-6">
          <h3 className="text-xl text-fog mb-2">0.6B Layer</h3>
          <p className="text-mist">Static content. No JavaScript. Instant load. The foundation that respects attention.</p>
        </div>
        
        <div className="glass p-6">
          <h3 className="text-xl text-fog mb-2">0.8B Layer</h3>
          <p className="text-mist">Interaction. Client-side state. No server required. The fog layer.</p>
        </div>
        
        <div className="glass p-6">
          <h3 className="text-xl text-fog mb-2">1.0 Layer</h3>
          <p className="text-mist">Intelligence. Network requests. Only when the local layers are insufficient.</p>
        </div>
      </section>
    </div>
  )
}