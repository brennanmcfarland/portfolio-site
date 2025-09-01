import Navigation from '@/components/Navigation'
import WireframeBackground from '@/components/WireframeBackground'

export default function AboutSite() {
  return (
    <>
      <WireframeBackground />
      <Navigation />
      <div className="min-h-screen relative z-10">
        <main className="max-w-5xl mx-auto px-4 py-16">
          <div className="sci-fi-bg glow-border rounded-lg p-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 glow-text font-mono mb-4">
                SYSTEM_DOCUMENTATION.LOG
              </h1>
              <div className="text-purple-300 text-lg font-mono tracking-widest">
                {'>'} --help
              </div>
            </div>
            
            <div className="space-y-8">
              <section className="sci-fi-bg glow-border rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-purple-300 mb-4 font-mono glow-text">
                  {'<'} SYSTEM_IMPLEMENTATION_OVERVIEW {'/>'} 
                </h2>
                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                  Source code at <a href='https://www.github.com/brennanmcfarland/portfolio-site' className='glow-border rounded transition-all duration-300 text-sm font-mono text-purple-300 hover:text-purple-200 sci-fi-bg'>My GitHub</a>. 
                  An eternal work in progress. I don't vibe-code often, but since life is busy and this is a just personal website not a medical algorithm, why not this time? Thank you, Claude. You saved me a lot of time.
                </p>
                <p>
                  I used to have a backend for the old (Angular) version of this site but it cost more than almost nothing to run. So now it's all frontend!
                </p>
              </section>

              <section className="sci-fi-bg glow-border rounded-lg p-6">
                <h3 className="text-xl font-mono text-purple-300 mb-4 glow-text tracking-widest">
                  TECH_STACK://
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Next.js + React + Turbopack", desc: "" },
                    { name: "TypeScript", desc: "" },
                    { name: "Tailwind CSS", desc: "" },
                  ].map((tech, index) => (
                    <div key={index} className="border-l-2 border-purple-500/50 pl-4 py-2">
                      <div className="text-purple-400 font-mono font-semibold">{tech.name}</div>
                      <div className="text-slate-400 text-sm">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* <section className="sci-fi-bg glow-border rounded-lg p-6">
                <h3 className="text-xl font-mono text-purple-300 mb-4 glow-text tracking-widest">
                  QUANTUM_ARCHITECTURE://
                </h3>
                <div className="space-y-4">
                  {[
                    { feature: "Neural Responsive Design", desc: "Quantum-adaptive layouts that predict user device preferences" },
                    { feature: "Animated Wireframe Engine", desc: "Real-time geometric particle system with physics simulation" },
                    { feature: "Holographic UI Components", desc: "Modular quantum components with self-healing architecture" },
                    { feature: "SEO Neural Network", desc: "AI-optimized meta-data with predictive search enhancement" },
                    { feature: "Quantum Performance", desc: "Sub-millisecond loading with parallel universe caching" },
                    { feature: "Biometric Accessibility", desc: "Neural interface compatibility with thought-controlled navigation" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 rounded border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
                      <div className="text-green-400 font-mono text-sm">●</div>
                      <div>
                        <div className="text-purple-400 font-semibold">{item.feature}</div>
                        <div className="text-slate-400 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="sci-fi-bg glow-border rounded-lg p-6">
                <h3 className="text-xl font-mono text-purple-300 mb-4 glow-text tracking-widest">
                  NEURAL_PROJECT_STRUCTURE://
                </h3>
                <div className="bg-slate-900/50 border border-purple-500/30 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-slate-300">
{`├── app/                    # Neural routing system
│   ├── page.tsx            # Quantum home interface
│   ├── projects/
│   │   └── page.tsx        # Project database matrix
│   └── about-site/
│       └── page.tsx        # System documentation
├── components/
│   ├── Navigation.tsx      # Neural navigation mesh
│   ├── ProjectCard.tsx     # Quantum project containers
│   └── WireframeBackground.tsx  # Geometric engine
├── app/globals.css         # Quantum style definitions
└── package.json            # Neural dependencies`}
                  </pre>
                </div>
              </section>

              <section className="sci-fi-bg glow-border rounded-lg p-6">
                <h3 className="text-xl font-mono text-purple-300 mb-4 glow-text tracking-widest">
                  QUANTUM_DEPLOYMENT://
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The neural portfolio platform is architected for{' '}
                  <span className="text-purple-400 glow-text font-semibold">quantum-cloud deployment</span> on 
                  next-generation hosting platforms. Utilizing distributed edge computing with{' '}
                  <span className="text-purple-400 glow-text font-semibold">neural load balancing</span> for 
                  optimal performance across multiple dimensions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-purple-500/30 rounded">
                    <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-slate-400 text-sm font-mono">UPTIME_NEURAL</div>
                  </div>
                  <div className="text-center p-4 border border-purple-500/30 rounded">
                    <div className="text-2xl font-bold text-purple-400 mb-2">0.3ms</div>
                    <div className="text-slate-400 text-sm font-mono">QUANTUM_LATENCY</div>
                  </div>
                  <div className="text-center p-4 border border-purple-500/30 rounded">
                    <div className="text-2xl font-bold text-blue-400 mb-2">∞</div>
                    <div className="text-slate-400 text-sm font-mono">SCALABILITY_INDEX</div>
                  </div>
                </div>
              </section>

              <div className="text-center mt-12">
                <div className="sci-fi-bg glow-border rounded-lg p-4">
                  <div className="font-mono text-sm text-slate-400 mb-2">
                    SYSTEM_STATUS:
                  </div>
                  <div className="text-purple-300 font-mono">
                    <span className="text-green-400">●</span> NEURAL_ENGINE: ACTIVE
                    <span className="ml-6 text-green-400">●</span> QUANTUM_CORE: STABLE
                    <span className="ml-6 text-green-400">●</span> REALITY_MATRIX: SYNCHRONIZED
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}