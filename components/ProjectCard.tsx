interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  projectStatus?: string
}

export default function ProjectCard({ title, description, technologies, githubUrl, liveUrl, projectStatus }: ProjectCardProps) {
  return (
    <div className="group relative sci-fi-bg glow-border glow-hover rounded-lg p-6 transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className="w-full h-full border-t-2 border-r-2 border-purple-500 rounded-tr-lg"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className="w-full h-full border-b-2 border-l-2 border-purple-500 rounded-bl-lg"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-100 glow-text font-mono">
            {'<'}{title.toUpperCase().replace(/\s+/g, '_')}{'/>'}
          </h3>
          <div className="text-xs text-purple-400 font-mono">
            PROJECT.EXE
          </div>
        </div>
        
        <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-mono text-purple-300 mb-3 tracking-widest">
            TECH_STACK://
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 text-purple-200 text-sm rounded font-mono hover:border-purple-400/50 hover:bg-purple-800/30 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-4 py-2 glow-border rounded transition-all duration-300 text-sm font-mono text-purple-300 hover:text-purple-200 sci-fi-bg overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>{'{'}</span>
                <span>VIEW_CODE</span>
                <span>{'}'}</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-4 py-2 glow-border rounded transition-all duration-300 text-sm font-mono text-purple-300 hover:text-purple-200 sci-fi-bg overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>{'['}</span>
                <span>LIVE_DEMO</span>
                <span>{']'}</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-purple-500/20">
          <div className="flex justify-between items-center text-xs font-mono text-slate-500">
            <span>STATUS: <span className="text-green-400">{projectStatus}</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}