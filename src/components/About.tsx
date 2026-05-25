import { motion } from 'framer-motion';
import { Code2, Star, Layers } from 'lucide-react';

const About = () => (
  <motion.section id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }} className="space-y-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="section-label text-slate-400">About Me</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional journey and expertise</h2>
      </div>
      <p className="max-w-xl text-sm text-slate-400 md:text-right">
        Modern, clean, and developer-centric portfolio style built for software engineering internship opportunities. Mobile-friendly, accessible, and polished for recruiters.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
      <div className="glass-card p-8">
        <p className="text-slate-300 leading-8">
          I am a motivated Computer Science student passionate about full-stack web development and software engineering. I enjoy building secure and scalable applications with React, Node.js, Express, MongoDB, and REST APIs.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <Star className="mb-4 h-6 w-6 text-violet-300" />
            <h3 className="text-lg font-semibold text-white">Focused Learner</h3>
            <p className="mt-2 text-sm text-slate-400">Continuously improving with hands-on full-stack projects and real-world software engineering tools.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <Layers className="mb-4 h-6 w-6 text-cyan-300" />
            <h3 className="text-lg font-semibold text-white">Hybrid Workflow</h3>
            <p className="mt-2 text-sm text-slate-400">Combining user-friendly frontends with optimized backend logic for complete application experiences.</p>
          </div>
        </div>
      </div>
      <div className="grid gap-5">
        <div className="glass-card p-6">
          <p className="text-slate-400">I like to create smooth, accessible user experiences while maintaining strong architecture behind every interface.</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-slate-400">I build clean code, reusable component systems, and polished project demos tailored for internships and junior developer roles.</p>
        </div>
      </div>
    </div>
  </motion.section>
);

export default About;
