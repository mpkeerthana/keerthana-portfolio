import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-4 z-40 mx-auto flex w-full flex-wrap items-center justify-between gap-3 rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 shadow-soft backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(124,58,237,0.28)]">
          <span className="text-lg font-bold">K</span>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Keerthana MP</p>
          <p className="text-xs text-slate-500">Full Stack Developer</p>
        </div>
      </div>

      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a href="https://github.com/mpkeerthana" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-violet-400/40 hover:text-white">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/keerthanamp/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-300/40 hover:text-white">
          <Linkedin size={18} />
        </a>
        <a href="mailto:mpkeerthu@gmail.com" className="hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 md:inline-flex">
          Contact
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
