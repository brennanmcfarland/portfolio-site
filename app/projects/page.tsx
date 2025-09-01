import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'
import WireframeBackground from '@/components/WireframeBackground'

const projects = [
  {
    title: "arc23",
    description: " A deep learning library built on/to be used in conjunction with PyTorch. I created this library because moving from Keras to PyTorch, I found PyTorch to be far more flexible but missed some of the ease-of-use from the former. I wanted something that would not only make creating deep neural nets easier, but that I could use interchangeably with pure PyTorch for maximum flexibility. Thus, I decided to take a more functional approach with functions operating on PyTorch-compatible datatypes whenever possible. I also wanted a set of utilities for things like memory optimization, so that's in there too.",
    technologies: ["Python", "PyTorch", "NVIDIA DALI"],
    githubUrl: "https://github.com/brennanmcfarland/arc23",
    projectStatus: "Stable releases bonobo, rhesus, chimpanzee tagged"
  },
  {
    title: "Portfolio Site",
    description: "My personal portfolio/about me website.",
    technologies: ["React", "Typescript", "Node.js", "NextJS", "Angular", "SCSS", "HTML"],
    githubUrl: "https://github.com/brennanmcfarland/portfolio-site",
    liveUrl: "https://brennanmcfarland.com",
    projectStatus: "You're looking at it!"
  },
  {
    title: "handrite.io",
    description: "handrite.io helps kids improve their handwriting! (not the actual URL, the actual project is private/shared ownership and I take no responsibility for where that domain might lead)",
    technologies: ["Python", "Tensorflow", "SQL", "Flask"],
    githubUrl: "https://github.com/brennanmcfarland/handrite.io",
    projectStatus: "It worked if not well"
  },
  {
    title: "Torch Art",
    description: "A classifier CNN on the Cleveland Museum of Art dataset built as a demo for arc23",
    technologies: ["Python", "PyTorch"],
    githubUrl: "https://github.com/brennanmcfarland/torch-art",
    projectStatus: "For more than just hotdogs"
  },
  {
    title: "3D Printing",
    description: "Built, upgraded a Voron 2.4 3D printer, modeled some stuff, and now I've got a minimalist 3D CAD viewer for designing my CadQuery models.",
    technologies: ["3D Printing", "Python", "CAD", "CadQuery", "Klipper"],
    githubUrl: "https://github.com/brennanmcfarland/cadviewer",
    projectStatus: "I will add pictures and more details at some point...",
    liveUrl: "https://www.printables.com/@confuseddepo_1505531"
  },
  {
    title: "Homelab",
    description: "I have a homelab! Which is basically just a NAS with a media server and mirrors/backups of all my cloud data. And some data hoards.",
    technologies: ["Bash"],
    projectStatus: "It's labbin'",
  },
  {
    title: "BBSBBS",
    description: "I made a BBS in college, for fun! Well it was for a class, but I enjoyed it.",
    technologies: ["C"],
    githubUrl: "https://github.com/brennanmcfarland/networksclass/tree/master/project4",
    projectStatus: "Oldie but goodie"
  },
]

export default function Projects() {
  return (
    <>
      <WireframeBackground />
      <Navigation />
      <div className="min-h-screen relative z-10">
        <main className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 glow-text font-mono mb-4">
                PROJECT_ARCHIVE.DB
              </h1>
              <div className="text-purple-300 text-lg font-mono tracking-widest">
                {'>'} SELECT * FROM PROJECTS WHERE INTEREST &gt; 10
              </div>
            </div>
            
            <div className="sci-fi-bg glow-border rounded-lg p-6 mb-8 max-w-3xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed">
                My GitHub has a lot of cruft in it, so I thought it'd be helpful to enumerate some of my most interesting projects over the years:
              </p>
              
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
                <div className="border-l-2 border-purple-500/50 pl-4 text-slate-400">
                  <span className="text-purple-300 font-mono">TOTAL_PROJECTS</span>
                  <br />
                  <span className="text-2xl font-bold text-purple-400">{projects.length}</span>
                </div>
                <div className="border-l-2 border-purple-500/50 pl-4 text-slate-400">
                  <span className="text-purple-300 font-mono">SUCCESS_RATE</span>
                  <br />
                  <span className="text-2xl font-bold text-green-400">100%</span>
                </div>
                <div className="border-l-2 border-purple-500/50 pl-4 text-slate-400">
                  <span className="text-purple-300 font-mono">NEURAL_SCORE</span>
                  <br />
                  <span className="text-2xl font-bold text-purple-400">9.8/10</span>
                </div>
              </div> */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                projectStatus={project.projectStatus}
              />
            ))}
          </div>
          <br>
          </br>
          Additional projects available at <span className="group glow-border glow-hover rounded-lg transition-all duration-300 font-mono text-purple-300 hover:text-purple-200 sci-fi-bg">
            <a href="https://github.com/brennanmcfarland">https://github.com/brennanmcfarland</a>
          </span>

          {/* <div className="mt-16 text-center">
            <div className="sci-fi-bg glow-border rounded-lg p-6 max-w-2xl mx-auto">
              <div className="font-mono text-sm text-slate-400 mb-2">
                DATABASE_STATUS:
              </div>
              <div className="text-purple-300 font-mono">
                <span className="text-green-400">●</span> NEURAL_NETWORKS: ACTIVE
                <span className="ml-6 text-green-400">●</span> QUANTUM_ALGORITHMS: STABLE
                <span className="ml-6 text-green-400">●</span> AI_INTEGRATION: OPTIMIZED
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </>
  )
}