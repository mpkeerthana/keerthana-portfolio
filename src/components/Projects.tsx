import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => (
  <motion.section id="projects" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }} className="space-y-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="section-label text-slate-400">Projects</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
      </div>
      <p className="max-w-xl text-sm text-slate-400 md:text-right">
        Two full-stack applications with authentication, responsive UI, backend integration, and modern SaaS workflows.
      </p>
    </div>

    <div className="grid gap-6 xl:grid-cols-2">
      {projects.map((project) => (
        <motion.article
          key={project.title}
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="glass-card overflow-hidden rounded-[36px] border border-white/10 p-6 shadow-soft"
        >
            <div className="grid gap-4 sm:grid-cols-[1fr_96px] sm:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Featured</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-slate-400">{project.subtitle}</p>
            </div>
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 p-3 text-center text-sm font-semibold text-slate-100 hover:brightness-105">
              Live Demo
              <ExternalLink size={14} className="ml-2" />
            </a>
          </div>

          <div className="mt-5 rounded-[28px] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 shadow-inner shadow-slate-950/50">
            <img src={project.image} alt={`${project.title} screenshot`} className="h-48 w-full object-cover" />
            <div className="p-5 text-slate-400">
              <p className="text-sm leading-6">{project.description}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
              Demo
              <ExternalLink size={16} />
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-400/40 hover:bg-slate-900/80">
              Code
              <Github size={16} />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </motion.section>
);

export default Projects;
