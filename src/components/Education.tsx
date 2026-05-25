import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap, ExternalLink } from 'lucide-react';

const Education = () => (
  <motion.section id="education" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }} className="space-y-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="section-label text-slate-400">Education</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Academic background & certifications</h2>
      </div>
      <p className="max-w-xl text-sm text-slate-400 md:text-right">
        A practical academic path with engineering focus, supplemented by certification learning to support software development skills.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="glass-card rounded-[32px] p-8">
        <div className="flex items-center gap-4 text-violet-300">
          <GraduationCap size={22} />
          <h3 className="text-xl font-semibold text-white">B.Tech in Computer Science Engineering</h3>
        </div>
        <p className="mt-4 text-slate-400">Adi Shankara Institute of Engineering and Technology</p>
        <p className="mt-2 text-sm text-slate-500">2024 – 2028</p>
      </div>
      <div className="grid gap-5">
        <div className="glass-card rounded-[32px] p-6">
          <div className="flex items-center gap-3 text-cyan-300">
            <Award size={20} />
            <h3 className="text-lg font-semibold text-white">Certifications</h3>
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a
                href="/nasscom-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-4 transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <span className="font-medium text-white transition-colors group-hover:text-violet-300">NASSCOM Digital 101 – 30 hours</span>
                <span className="flex items-center gap-1.5 text-xs text-violet-400 opacity-80 transition-all group-hover:opacity-100 group-hover:text-violet-300">
                  View
                  <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="glass-card rounded-[32px] p-6">
          <div className="flex items-center gap-3 text-violet-300">
            <BookOpen size={20} />
            <h3 className="text-lg font-semibold text-white">Professional focus</h3>
          </div>
          <p className="mt-4 text-slate-400">Building reliable full-stack systems and modern UI experiences with reusable component patterns.</p>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Education;
