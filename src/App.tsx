import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-midnight via-slate-950 to-slate-900 text-slate-100">
      <ScrollProgress />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />
      <AnimatePresence>{!ready && <LoadingScreen />}</AnimatePresence>
      {ready && (
        <div className="relative z-10 mx-auto flex min-h-screen flex-col px-5 py-6 sm:px-8 lg:max-w-7xl">
          <Navbar />
          <main className="flex-1 space-y-24 py-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
