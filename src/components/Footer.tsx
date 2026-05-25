const Footer = () => (
  <footer className="mt-12 rounded-[36px] border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400 shadow-soft backdrop-blur-xl">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div />
      <div className="flex flex-wrap items-center gap-3 text-slate-500">
        <span>© 2026</span>
        <span className="hidden sm:inline">·</span>
        <a href="https://github.com/mpkeerthana" className="transition hover:text-white">GitHub</a>
        <span className="hidden sm:inline">·</span>
        <a href="https://www.linkedin.com/in/keerthanamp/" className="transition hover:text-white">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
