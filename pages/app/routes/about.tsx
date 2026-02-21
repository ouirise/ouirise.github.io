export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <section>
        <h1 className="text-4xl font-serif text-fog mb-6">About</h1>
        <p className="text-mist text-lg leading-relaxed">
          OuiRise builds defensive technology infrastructure. We specialize in local-first 
          architectures that keep community data under community control.
        </p>
      </section>

      <section className="glass p-8">
        <h2 className="text-2xl text-fog mb-4">Contact</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog"
          />
          <textarea 
            placeholder="Message" 
            rows={4}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog"
          ></textarea>
          <label className="flex items-center gap-2 text-mist text-sm">
            <input type="checkbox" className="rounded bg-void border-fog/20" />
            Remember this conversation
          </label>
          <button className="bg-orange/20 border border-orange/50 text-orange px-6 py-3 rounded hover:bg-orange/30 transition-colors">
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}