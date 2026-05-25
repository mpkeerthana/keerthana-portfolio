
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DownloadCloud, ExternalLink, Sparkles } from 'lucide-react';

const phrases = ['Full Stack Developer', 'React & Node.js Enthusiast', 'Building polished web products'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhrase];
    const speed = deleting ? 40 : 90;

    const timeout = window.setTimeout(() => {
      setDisplayText((prev) => {
        if (!deleting) {
          return fullText.slice(0, prev.length + 1);
        }
        return fullText.slice(0, prev.length - 1);
      });

      if (!deleting && displayText === fullText) {
        window.setTimeout(() => setDeleting(true), 900);
      }
      if (deleting && displayText === '') {
        setDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [displayText, deleting, currentPhrase]);

  return (
    <section id="hero" className="relative grid gap-10 overflow-hidden rounded-[42px] border border-white/10 bg-slate-950/70 p-8 shadow-soft backdrop-blur-2xl lg:grid-cols-[1.35fr_0.95fr] lg:items-center lg:p-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-8 top-10 h-44 w-44 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-10 left-16 h-36 w-36 rounded-full bg-slate-400/10 blur-3xl" />
        <div className="absolute right-24 bottom-16 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-24 top-1/3 h-2 w-2 rounded-full bg-slate-100/80 shadow-[0_0_18px_rgba(147,197,253,0.55)] animate-star-flicker" />
        <div className="absolute right-28 top-28 h-1.5 w-1.5 rounded-full bg-slate-100/80 shadow-[0_0_12px_rgba(96,165,250,0.55)] animate-star-flicker" />
        <div className="absolute right-10 bottom-40 h-2 w-2 rounded-full bg-slate-100/70 shadow-[0_0_18px_rgba(56,189,248,0.45)] animate-star-flicker" />
      </div>

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative space-y-8"
      >
        <div className="space-y-3 lg:max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <Sparkles size={16} className="text-violet-300" />
            Internship-ready portfolio
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">Keerthana MP</span>
            </h1>
            <p className="text-lg font-medium text-slate-300">Aspiring Full Stack Developer</p>
            <p className="max-w-2xl text-slate-300">
              I build polished digital products with React, Node.js, Express, and MongoDB. My portfolio showcases modern UI, strong interactions, and premium developer craftsmanship.
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.4)] backdrop-blur-xl">
          <p className="text-slate-300">
            Motivated Computer Science student passionate about software engineering and full-stack development. Skilled in React, Node.js, Express, MongoDB, and REST APIs.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
            View Projects
            <ExternalLink size={16} className="ml-2" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30 hover:bg-slate-900/95">
            <DownloadCloud size={16} className="mr-2" />
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
        className="relative mx-auto flex h-[20rem] w-[20rem] items-center justify-center sm:h-[22rem] sm:w-[22rem] lg:h-[24rem] lg:w-[24rem]"
      >
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-4xl" />
        <div className="absolute inset-0 rounded-full border border-cyan-400/20 opacity-60" />
        <div className="absolute inset-0 rounded-full border border-violet-500/20 opacity-40 shadow-[0_0_120px_rgba(99,102,241,0.25)]" />
        <div className="absolute inset-8 rounded-full border border-violet-300/20 bg-slate-950/40 blur-xl" />

        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-slate-950/70 p-1 shadow-soft backdrop-blur-xl float-animate">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <img
            src="/profile.png"
            alt="Keerthana MP profile"
            className="relative h-full w-full rounded-full object-cover object-top"
          />
        </div>

        <div className="absolute inset-0 rounded-full border border-violet-400/20 opacity-60 animate-spin-slow" />

        
      </motion.div>
    </section>
  );
};

export default Hero;
