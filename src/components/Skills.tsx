import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => (
  <motion.section id="skills" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }} className="space-y-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="section-label text-slate-400">Skills</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Tools and technologies</h2>
      </div>
      <p className="max-w-xl text-sm text-slate-400 md:text-right">
        A collection of engineering skills, frameworks, and developer tools used to build modern web applications.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="glass-card overflow-hidden rounded-[32px] border border-white/10 p-6"
          >
            <div className={`mb-5 inline-flex items-center justify-center rounded-3xl bg-gradient-to-br ${skill.accent} p-4 text-slate-950 shadow-[0_20px_80px_rgba(124,58,237,0.12)]`}>
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            <p className="mt-3 text-sm text-slate-400">Experienced with modern development workflows, modular architecture, and team collaboration tools.</p>
          </motion.div>
        );
      })}
    </div>
  </motion.section>
);

export default Skills;
