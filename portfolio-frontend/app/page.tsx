import Navigation from '@/components/Navigation'
import WireframeBackground from '@/components/WireframeBackground'

export default function Home() {
  return (
    <>
      <WireframeBackground />
      <Navigation />
      <div className="min-h-screen relative z-10">
        <main className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-100 glow-text mb-4">
                BRENNAN MCFARLAND
              </h1>
              <div className="text-purple-300 text-lg font-mono tracking-widest">
                {'>>>'} type(BrennanMcFarland)<br></br>
                &lt;class 'Software Engineer'&gt;
              </div>
            </div>
            
            <div className="sci-fi-bg glow-border rounded-lg p-8 mb-12 max-w-3xl mx-auto">
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                Welcome to my site! Its main purpose is as a hub for my professional profile to showcase my 
                abilities as a Developer/Software Engineer, but also as a place for me to experiment and make 
                new and fun things in a place where people can see how they work without digging into the 
                source code. It's currently very much a work in progress, but I'll try to keep adding new 
                features and to keep it up to date over time (we'll see how that goes)! 
                {/* <span className="text-purple-400 glow-text font-semibold">quantum-ready</span> */}
              </p>
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400">
                <div className="border-l-2 border-purple-500/50 pl-4">
                  <span className="text-purple-300 font-mono">CORE.SYS</span>
                  <br />React • Next.js • Node.js
                </div>
                <div className="border-l-2 border-purple-500/50 pl-4">
                  <span className="text-purple-300 font-mono">DATA.NET</span>
                  <br />PostgreSQL • MongoDB • Redis
                </div>
                <div className="border-l-2 border-purple-500/50 pl-4">
                  <span className="text-purple-300 font-mono">CLOUD.ENV</span>
                  <br />AWS • Docker • Kubernetes
                </div>
              </div> */}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://linkedin.com/in/brennanmcfarland"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 glow-border glow-hover rounded-lg transition-all duration-300 font-mono text-purple-300 hover:text-purple-200 sci-fi-bg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{'<'}</span>
                  <span>LINKEDIN</span>
                  <span>{'/>'}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div>
                  linkedin.com/in/brennanmcfarland
                </div>
              </a>
              
              <a 
                href="https://github.com/brennanmcfarland"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 glow-border glow-hover rounded-lg transition-all duration-300 font-mono text-purple-300 hover:text-purple-200 sci-fi-bg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{'<'}</span>
                  <span>GITHUB</span>
                  <span>{'/>'}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div>
                  github.com/brennanmcfarland
                </div>
              </a>
              
              <a 
                href="mailto:theotherbrennanmcfarland@gmail.com"
                className="group relative px-8 py-4 glow-border glow-hover rounded-lg transition-all duration-300 font-mono text-purple-300 hover:text-purple-200 sci-fi-bg"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{'<'}</span>
                  <span>CONTACT</span>
                  <span>{'/>'}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div>
                  For my professional email,<br></br> please see my resume
                </div>
              </a>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block font-mono text-sm text-slate-500">
                <span className="text-purple-400">STATUS:</span> ONLINE 
                <span className="ml-4 text-purple-400">UPTIME:</span> If you can read this, &gt; 0
                <span className="ml-4 text-purple-400">VERSION:</span> 2.0.1
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
