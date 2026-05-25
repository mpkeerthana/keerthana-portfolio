import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => (
  <motion.section id="contact" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }} className="space-y-8">
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="section-label text-slate-400">Contact</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Get in touch</h2>
      </div>
      <p className="max-w-xl text-sm text-slate-400 md:text-right">
        Reach out for internships, collaborations, or full-stack development opportunities.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-3">
      <div className="glass-card rounded-[32px] p-8">
        <div className="flex items-center gap-3 text-violet-300">
          <Mail size={22} />
          <h3 className="text-xl font-semibold text-white">Email</h3>
        </div>
        <p className="mt-4 text-slate-300">mpkeerthu@gmail.com</p>
        <a href="mailto:mpkeerthu@gmail.com" className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/20">
          Send message
        </a>
      </div>

      <div className="glass-card rounded-[32px] p-8">
        <div className="flex items-center gap-3 text-cyan-300">
          <Phone size={22} />
          <h3 className="text-xl font-semibold text-white">Phone</h3>
        </div>
        <p className="mt-4 text-slate-300">+91 94968 08965</p>
        <a href="tel:+919496808965" className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500/20">
          Call now
        </a>
      </div>

      <div className="glass-card rounded-[32px] p-8">
        <div className="flex items-center gap-3 text-slate-200">
          <Github size={22} />
          <h3 className="text-xl font-semibold text-white">Social</h3>
        </div>
        <div className="mt-4 space-y-4 text-sm text-slate-300">
          <a href="https://github.com/mpkeerthana" target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-300/40 hover:bg-slate-900/80">GitHub</a>
          <a href="https://www.linkedin.com/in/keerthanamp/" target="_blank" rel="noreferrer" className="block rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-violet-300/40 hover:bg-slate-900/80">LinkedIn</a>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Contact;
